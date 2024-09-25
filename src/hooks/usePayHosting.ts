import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner'
import api from '../services/api';
import useClientStore from '../contexts/clientStore';
import { useNavigate } from 'react-router-dom';
import usePayStore from '../contexts/payStore';
import Cookies from 'js-cookie';

interface ISignInResponse {
    token: {
        token: string,
        idCliente: string
    }
}


interface IFact {
    produtos: [
        {
            planoId: string
        },
        {
            dominioId: number
        },
    ],
    total: number,
    idCliente: string,
    idCiclo: string,
    endereco?: {
        endereco: string,
        pais: string
    },
    titular?: {
        nif: string,
        nome: string
    }
    ids: {
        planoId: string,
        dominioId: number
    },
    dominio: string,
    novoDominio: boolean
}

interface Endereco {
    endereco: string;
    pais: string;
    provincia: string;
}

interface Usuario {
    id: string,
    email: string;
    nome: string;
    senha: string;
    role: string;
    nif: string;
    telefone: string;
    endereco: Endereco;
}

interface IUser {
    success: boolean,
    message: string,
    client: Usuario
}

type formType = {
    telefone: string;
    email: string;
    endereco: string;
    senha: string;
    reSenha: string;
}

interface LocationData {
    ip: string;
    continent_code: string;
    continent_name: string;
    country_code2: string;
    country_code3: string;
    country_name: string;
    country_name_official: string;
    country_capital: string;
    state_prov: string;
    state_code: string;
    district: string;
    city: string;
    zipcode: string;
    latitude: string;
    longitude: string;
    is_eu: boolean;
    calling_code: string;
    country_tld: string;
    languages: string;
    country_flag: string;
    geoname_id: string;
    isp: string;
    connection_type: string;
    organization: string;
    country_emoji: string;
    currency: {
        code: string;
        name: string;
        symbol: string;
    };
    time_zone: {
        name: string;
        offset: number;
        offset_with_dst: number;
        current_time: string;
        current_time_unix: number;
        is_dst: boolean;
        dst_savings: number;
        dst_exists: boolean;
        dst_start: string;
        dst_end: string;
    };
}

const IPLOCATION_API_KEY = import.meta.env.VITE_IPLOCATION_API_KEY || "ba201f9ff89343d59b891f6b709cf720"

export default function usePayHosting() {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [payMethod, setPayMethod] = useState<number>(1)
    const [isOpen, setIsOpen] = useState(false)

    const [location, setLocation] = useState<{ pais: string, provincia: string }>({ pais: '', provincia: '' })

    const { client } = useClientStore()

    const { currentPlan, currentDomainExtension, currentPlanCicle, currentDomain, registerNewDomain, clientLoadedInfo, clientNIF, actions: {
        setFormStep,
        setIsBILoaded,
        setIsNIFLoaded,
        setClientLoadedInfo,
        setCurrentDomain,
        setClientNIF,
        setCurrentDomainAvailable,
        setCurrentPlanCicle,
        setDomainVerifyProcessComplete,
        setRegisterNewDomain,

    } } = usePayStore()

    const router = useNavigate()

    function resetStates() {
        setIsBILoaded(false)
        setIsNIFLoaded(false)
        setClientLoadedInfo({ name: '' })
        setCurrentDomain('')
        setCurrentDomainAvailable(false)
        setCurrentPlanCicle({ duracao: '', id: 0, multiplicador: 0, nome: '' })
        setDomainVerifyProcessComplete(false)
        setFormStep(1)
        setRegisterNewDomain(false)
        setClientNIF('')
    }

    useEffect(() => {
        async function getIp() {
            try {
                const resp = await axios.get('https://api.ipify.org/?format=json')
                const response: LocationData = await (await axios.get(`https://api.ipgeolocation.io/ipgeo?apiKey=${IPLOCATION_API_KEY}&ip=${resp.data.ip}`)).data
                setLocation({
                    pais: response.country_name,
                    provincia: response.state_prov
                })
            }
            catch (error) {
                toast.error('Desative o bloqueio de anuncios e rastreadores.', {
                    description: "Em seguida, atualize a página."
                })
                console.log(error)
            }
        }
        getIp()
    }, [])

    async function submitNIF(data: formType) {
        setIsLoading(true);
        setIsOpen(true)
        try {
            const response = await api.post('/cliente/registar', {
                nome: `${clientLoadedInfo.name}`,
                email: data.email,
                nif: clientNIF,
                telefone: data.telefone,
                role: 'Empresa',
                senha: data.senha,
                endereco: {
                    pais: location.pais,
                    provincia: location.provincia,
                    endereco: data.endereco
                }
            });

            const createdUser: IUser = response.data;

            if (createdUser.success) {
                toast.success('Conta criada com sucesso!');
                const resp = await finalizePayment(
                    currentPlan.id || "",
                    (currentPlan.preco * currentPlanCicle.multiplicador) + currentDomainExtension.preco,
                    currentDomain,
                    currentPlanCicle.id.toString(),
                    currentDomainExtension.id,
                    createdUser.client.id
                );
                toast.success('Serviço solicitado com sucesso!', {
                    description: 'Aguarde a confirmação do pagamento.',
                });
                toast.info('Estamos conectando você...', {
                    description: 'Agradecemos pela sua paciência',
                });
                if (resp.success) {
                    const loginData = createdUser.client.email
                        ? { client_ref: createdUser.client.email, password: data.senha }
                        : { client_ref: createdUser.client.telefone, password: data.senha };
                    const rr: ISignInResponse = await (await api.post('/cliente/entrar/empresa', {
                        senha: loginData.password,
                        email: data.email,
                        telefone: '',
                    })).data
                    Cookies.set('session', JSON.stringify({
                        token: rr.token.token,
                        clientId: rr.token.idCliente,
                        clientType: 'empresa'
                    }), {
                        secure: true,
                        expires: 1 / 24,
                        sameSite: 'Strict'
                    })

                    setTimeout(() => {
                        resetStates()
                        router('/cliente/painel/hospedagem/servicos');
                    }, 2000)
                }
            }
            else {
                toast.error('Ocorreu um erro ao criar a conta!', {
                    description: 'Entre em contacto com o suporte.'
                })
            }
        }
        catch (error) {
            toast.error('Ocorreu um erro ao processar a sua solicitação!', {
                description: 'Entre em contacto com o suporte.'
            })
            setIsOpen(false);
            setIsLoading(false);
        }
    }

    async function submitBI(data: formType) {
        setIsLoading(true);
        setIsOpen(true)
        try {
            const response = await api.post('/cliente/registar', {
                nome: `${clientLoadedInfo.name}`,
                email: data.email,
                nif: clientNIF,
                telefone: data.telefone,
                role: 'Particular',
                senha: data.senha,
                endereco: {
                    pais: location.pais,
                    provincia: location.provincia,
                    endereco: data.endereco
                }
            });

            const createdUser: IUser = response.data;

            if (createdUser.success) {
                toast.success('Conta criada com sucesso!');
                const resp = await finalizePayment(
                    currentPlan.id || "",
                    (currentPlan.preco * currentPlanCicle.multiplicador) + currentDomainExtension.preco,
                    currentDomain,
                    currentPlanCicle.id.toString(),
                    currentDomainExtension.id,
                    createdUser.client.id
                );
                toast.success('Serviço solicitado com sucesso!', {
                    description: 'Aguarde a confirmação do pagamento.',
                });
                toast.info('Estamos conectando você...', {
                    description: 'Agradecemos pela sua paciência',
                });
                if (resp.success) {
                    const loginData = createdUser.client.email
                        ? { client_ref: createdUser.client.email, password: data.senha }
                        : { client_ref: createdUser.client.telefone, password: data.senha };
                    const rr: ISignInResponse = await (await api.post('/cliente/entrar/particular', {
                        senha: loginData.password,
                        email: data.email,
                        telefone: '',
                    })).data
                    Cookies.set('session', JSON.stringify({
                        token: rr.token.token,
                        clientId: rr.token.idCliente,
                        clientType: 'particular'
                    }), {
                        secure: true,
                        expires: 1 / 24,
                        sameSite: 'Strict'
                    })

                    setTimeout(() => {
                        resetStates()
                        router('/cliente/painel/hospedagem/servicos');
                    }, 2000)
                }
            }
            else {
                toast.error('Ocorreu um erro ao criar a conta!', {
                    description: 'Entre em contacto com o suporte.'
                })
            }
        } catch (error) {
            toast.error('Ocorreu um erro ao processar a sua solicitação!', {
                description: 'Entre em contacto com o suporte.'
            })
        } finally {
            setIsLoading(false);
            setIsOpen(false)
        }
    }

    async function finalizePayment(planId: string, total: number, domain: string, idCiclo: string, idSubDomain: number, idCliente: string): Promise<{ success: boolean }> {
        try {
            if (registerNewDomain) {
                const newDomainTitular = Cookies.get('newDomainTitular');
                const owner: {
                    nif: string;
                    nome: string;
                    endereco: string;
                    pais: string;

                } = JSON.parse(newDomainTitular || "");
                const fatura: IFact = {
                    total: total,
                    endereco: {
                        endereco: owner.endereco,
                        pais: owner.pais
                    },
                    idCiclo: idCiclo,
                    idCliente: idCliente,
                    ids: {
                        dominioId: idSubDomain,
                        planoId: planId
                    },
                    produtos: [
                        {
                            planoId: planId
                        },
                        {
                            dominioId: idSubDomain
                        }
                    ],
                    dominio: domain,
                    novoDominio: true,
                    titular: {
                        nif: owner.nif,
                        nome: owner.nome
                    }
                };

                try {
                    const response = await api.post('/faturas/compra', fatura)
                    if (response.data.success) {
                        return { success: true }
                    }
                    else {
                        return { success: false }
                    }
                }
                catch (error) {
                    return { success: false }
                }
            }
            else {
                const fatura: IFact = {
                    total: total,
                    idCiclo: idCiclo,
                    idCliente: idCliente,
                    ids: {
                        dominioId: 0,
                        planoId: planId
                    },
                    produtos: [
                        {
                            planoId: planId
                        },
                        {
                            dominioId: 0
                        }
                    ],
                    dominio: domain,
                    novoDominio: false,
                };

                try {
                    const response = await api.post('/faturas/compra', fatura)
                    if (response.data.success) {
                        return { success: true }
                    }
                    else {
                        if (response.data.error === "The input is not a PNG file!") {
                            return { success: true }
                        }
                        return { success: false }
                    }
                }
                catch (error) {

                    return { success: true }
                }
            }
        }
        catch (error) {
            console.log(error)
            return { success: false }
        }
    }

    async function pay() {
        setIsLoading(true)
        setIsOpen(true)
        try {
            const response: { success: boolean; } = await finalizePayment(
                currentPlan.id,
                (currentPlan.preco * currentPlanCicle.multiplicador) + currentDomainExtension.preco,
                currentDomain,
                currentPlanCicle.id.toString(),
                currentDomainExtension.id,
                client?.id || "sem id"
            )
            if (response.success) {
                toast.success('Serviço solicitado com sucesso!', {
                    description: 'Aguarde a confirmação do pagamento.'
                })
                setTimeout(() => {
                    resetStates()
                    router('/cliente/painel/hospedagem/servicos')
                }, 3000)
            }
            else {
                toast.error('Ocorreu um erro ao solicitar o serviço!', {
                    description: 'Entre em contacto com o suporte.'
                })
            }
        }

        catch (error) {
            console.log(error)
            toast.error('Ocorreu um erro ao solicitar o serviço!', {
                description: 'Entre em contacto com o suporte.'
            })
        }
        finally {
            setIsLoading(false)
            setIsOpen(false)
        }

    }

    return { submitNIF, finalizePayment, pay, submitBI, location, isLoading, payMethod, setPayMethod, isOpen, setIsOpen }
}