import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Search } from "lucide-react"
import useUtils from "@/utils/useutils"
import usePayStore from "@/contexts/payStore"
import { domain, IDomainExtension } from "@/interfaces/domain"
import { toast } from "sonner"
import { TailSpin } from "react-loader-spinner"
import Cookies from "js-cookie"
import { Ciclo, IPlano } from "@/interfaces/plan.interface"
import { ExitModal } from "../exitModal"
import useCart from "@/hooks/useCart"
import axios from "axios"
//import proxy from "@/services/proxy"


interface ICreateModalProps {
    opened: boolean,
    setOpened: Dispatch<SetStateAction<boolean>>,
    plans: IPlano[],
    planIndex: number
}

interface ICiclo {
    planoId: string;
    cicloId: number;
    ciclo: Ciclo;
}

// interface IYabaduRespose {
//     sucess: boolean,
//     message: string
//     data: {
//         numero: string,
//         nome: string
//     }
// }

// interface UserPersonalData {
//     id_number: string;
//     first_name: string;
//     last_name: string;
//     gender_name: string;
//     birth_date: string;
//     father_first_name: string;
//     father_last_name: string;
//     mother_first_name: string;
//     mother_last_name: string;
//     marital_status_name: string;
//     birth_province_name: string;
//     birth_municipality_name: string;
//     issue_date: string;
//     expiry_date: string;
//     issue_place: string;
//     residence_country_name: string;
//     residence_province_name: string;
//     residence_municipality_name: string;
//     residence_commune_name: string;
//     residence_neighbor: string;
//     residence_address: string;
// }

/*
interface ApiResponse {
    messageType: number;
    message: string | null;
    data: {
        code: number;
        message: string;
        data: UserPersonalData;
    };
}
*/

interface UserInfo {
    nif: string;
    gsmc: string;
    ssswjg: string;
    nsrdz: string;
    nsrfrdb: string;
    nsrcwfzr: string;
    hdjy: string;
    lxfs: string;
    email: string;
    hdzt: string;
    ckd: string;
    tap_type_code: string;
    regimeIva: string;
    nameAbb: string;
    addressDbb: string;
    fzjgList: [];
    nsrzt: string;
    companyName: string;
}

 export interface NIF_RESPONSE {
    success: boolean;
    data: UserInfo;
    error: string | null;
    dataCount: number;
}


const NIF_REGEX = /^[0-9]{10}$/
const BI_REGEX = /^[0-9]{9}[a-zA-Z]{2}[0-9]{3}$/

export function BuyHostingModal({ opened, setOpened, plans, planIndex }: ICreateModalProps) {

    const [plan, setPlan] = useState<IPlano>({ categoriaId: 0, ciclos: [], descontos: 0, descricao: "", id: "", planoPopular: false, preco: 0, precoComDesconto: 0, recursos: [], titulo: '' })
    const [ciclo, setCiclo] = useState<ICiclo>({ ciclo: { duracao: "", id: "", multiplicador: 0, nome: "" }, cicloId: 0, planoId: "" })
    const [domainMode, setDomainMode] = useState(1)
    const [isOpened, setIsOpened] = useState(false)
    const [total, setTotal] = useState(0)
    const [verifDomain, setVerifDomain] = useState('')
    const [loaderLoading, setLoaderLoading] = useState(false)
    const [modalRegister, setModalRegister] = useState(false)
    const [processComplete, setProcessComplete] = useState(false)
    const [reusedDomain, setReusedDomain] = useState('')
    const [selectedExtension, setSelectedExtension] = useState<IDomainExtension>({ desconto: 0, id: 0, preco: 0, tipo: "" })
    const [nif, setNif] = useState('')
    const [country, setCountry] = useState('')
    const [address, setAddress] = useState('')
    const [registerLoading, setRegisterLoading] = useState(false)
    const { isBILoaded, isNIFLoaded, clientLoadedInfo, actions: {
        setClientNIF, setClientLoadedInfo,
        setIsBILoaded, setIsNIFLoaded
    } } = usePayStore()
    const [loadingVerify, setLoadingVerify] = useState(false)


    const { cartLenght, addToCart } = useCart()

    const domainRegex = /^(?!-)[A-Za-z0-9-]{1,63}(?<!-)\.[A-Za-z]{2,6}(\.[A-Za-z]{2,6})?$/;

    const { domainExtensions, currentDomain, actions: {
        getDomainExtensions,
        setCurrentDomain,
        setCurrentDomainAvailable,
        setDomainVerifyProcessComplete
    } } = usePayStore()

    const { checkDomain, formatMoney } = useUtils()

    useEffect(() => {
        setTotal(ciclo.ciclo.multiplicador * plan.preco)
    }, [ciclo, plan])

    useEffect(() => {
        if (domainMode === 2) {
            setIsOpened(true)
        }
    }, [domainMode])

    useEffect(() => {
        getDomainExtensions()
    }, [])

    async function verifyDomain() {

        if (selectedExtension.tipo !== '') {
            setLoaderLoading(true)
            setCurrentDomain(`${verifDomain}${selectedExtension.tipo}`)
            try {
                const json: domain = await checkDomain(`${verifDomain}${selectedExtension.tipo}`)
                if (!json.domain_status && json.nameservers.length === 0) {
                    toast.success('Domínio disponivel')
                    setCurrentDomainAvailable(true)
                    setOpenedStatus(true)
                }
                else {
                    toast.error('Domínio indisponivel')
                    setCurrentDomainAvailable(false)
                }
                return json
            }
            catch (error) {
                console.log(error)
            }
            finally {
                setDomainVerifyProcessComplete(true)
                setLoaderLoading(false)
                const inp = document.querySelector('.inputVerifyDomain') as HTMLInputElement
                inp.value = ''
            }
        }
        else {
            toast.error('Selecione a sua extensao!')
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault()
            }
        })
    }, [])

    async function verifyNif() {
        setClientNIF(nif.toUpperCase())
        setLoadingVerify(true)
        // if (NIF_REGEX.test(nif)) {
        //     try {
        //         const response: IYabaduRespose = await (await proxy.get(`/yabaduu.ao/ao/actions/nif.ajcall.php?nif=${nif}`)).data
        //         if (response.sucess) {
        //             toast.success('NIF verificado com sucesso!')
        //             setIsNIFLoaded(true)
        //             setIsBILoaded(false)
        //             setLoadingVerify(false)
        //             setClientLoadedInfo({
        //                 name: response.data.nome
        //             })
        //         }
        //         else {
        //             toast.error('NIF Invalido!')
        //         }
        //     }
        //     catch (error) {
        //         console.log(error)
        //     }
        //     finally {
        //         setLoadingVerify(false)
        //     }
        //     
        // }
        // else if (BI_REGEX.test(nif)) {
        //     setLoadingVerify(true)
        //     try {
        //         const resp: ApiResponse = await (await proxy.get(`/https://api.inagbe.gov.ao/api/v1/consultarBi?bi=${nif}`)).data
        //         toast.success('BI Verificado com sucesso!')
        //         setClientLoadedInfo({
        //             name: `${resp.data.data.first_name} ${resp.data.data.last_name}`,
        //         })
        //         setIsBILoaded(true)
        //         setIsNIFLoaded(false)
        //     }
        //     catch {
        //         toast.error('Ocorreu um erro ao processar a sua solicitação!')
        //     }
        //     finally {
        //         setLoadingVerify(false)
        //     }
        // }
        // else {
        //     toast.error('Valor inválido!')
        //     setLoadingVerify(false)
        // }º
        try {
            const response: NIF_RESPONSE = await (await axios.get(`https://invoice.minfin.gov.ao/commonServer/common/taxpayer/get/${nif}`)).data
            if (response.success) {
                toast.success('BI Verificado com sucesso!')
                setClientLoadedInfo({
                    name: response.data.gsmc
                })
                if (NIF_REGEX.test(nif)) {
                    setIsNIFLoaded(true)
                    setIsBILoaded(false)
                }
                else if (BI_REGEX.test(nif)) {
                    setIsBILoaded(true)
                    setIsNIFLoaded(false)
                }
            }
            else {
                toast.error('Não encontrado!')
            }
        }
        catch {
            toast.error('Ocorreu um erro ao processar a sua solicitação!')
        }
        finally {
            setLoadingVerify(false)
        }
    }

    function registerTitular() {
        if (selectedExtension.tipo === ".com" && ciclo.ciclo.multiplicador === 12) {
            setCurrentDomain(`${verifDomain}${selectedExtension.tipo}`)
            const product = {
                id: (cartLenght + 1).toString(),
                name: `Domínio premium ${verifDomain}${selectedExtension.tipo}`,
                planId: selectedExtension.id.toString(),
                price: 0,
                domainName: `${verifDomain}${selectedExtension.tipo}`,
                entensionId: selectedExtension.id,
                newDomain: true,
                type: "domain",
                joined: true
            }
            addToCart(product)
            setRegisterLoading(true)
            setTimeout(() => {
                const newDomainTitular = {
                    nif: nif,
                    nome: name,
                    endereco: address,
                    pais: country,
                    domain: `${verifDomain}${selectedExtension.tipo}`,
                    extensionId: selectedExtension.id,
                    new: true,
                    to: 'hospedagem'
                }
                Cookies.set('newDomainTitular', JSON.stringify(newDomainTitular))
                toast.success('Dominio registado com sucesso!')
                setRegisterLoading(false)
                setModalRegister(false)
                setIsOpened(false)
                setProcessComplete(true)
            }, 1000)
        }
        else {
            if ((selectedExtension.tipo === ".co.ao" || selectedExtension.tipo === ".ao") && verifDomain.length === 3) {
                setCurrentDomain(`${verifDomain}${selectedExtension.tipo}`)
                const product = {
                    id: (cartLenght + 1).toString(),
                    name: `Domínio premium ${verifDomain}${selectedExtension.tipo}`,
                    planId: selectedExtension.id.toString(),
                    price: 300000,
                    domainName: `${verifDomain}${selectedExtension.tipo}`,
                    entensionId: selectedExtension.id,
                    newDomain: true,
                    type: "domain",
                    joined: true
                }
                addToCart(product)
                setRegisterLoading(true)
                setTimeout(() => {
                    const newDomainTitular = {
                        nif: nif,
                        nome: name,
                        endereco: address,
                        pais: country,
                        domain: `${verifDomain}${selectedExtension.tipo}`,
                        extensionId: selectedExtension.id,
                        new: true,
                        to: 'hospedagem'
                    }
                    Cookies.set('newDomainTitular', JSON.stringify(newDomainTitular))
                    toast.success('Dominio premium registado com sucesso!')
                    setRegisterLoading(false)
                    setModalRegister(false)
                    setIsOpened(false)
                    setProcessComplete(true)
                }, 1000)
            }
            else {
                setCurrentDomain(`${verifDomain}${selectedExtension.tipo}`)
                const product = {
                    id: (cartLenght + 1).toString(),
                    name: `Domínio ${verifDomain}${selectedExtension.tipo}`,
                    planId: selectedExtension.id.toString(),
                    price: selectedExtension.preco,
                    domainName: `${verifDomain}${selectedExtension.tipo}`,
                    entensionId: selectedExtension.id,
                    newDomain: true,
                    type: "domain",
                    joined: true
                }
                addToCart(product)
                setRegisterLoading(true)
                setTimeout(() => {
                    const newDomainTitular = {
                        nif: nif,
                        nome: name,
                        endereco: address,
                        pais: country,
                        domain: `${verifDomain}${selectedExtension.tipo}`,
                        extensionId: selectedExtension.id,
                        new: true,
                        to: 'hospedagem'
                    }
                    Cookies.set('newDomainTitular', JSON.stringify(newDomainTitular))
                    toast.success('Dominio registado com sucesso!')
                    setRegisterLoading(false)
                    setModalRegister(false)
                    setIsOpened(false)
                    setProcessComplete(true)
                }, 1000)
            }
        }
    }

    const [loadingAdd, setLoadingAdd] = useState(false)
    const [openedExit, setOpenedExit] = useState(false)


    function add() {
        if (domainMode === 1) {
            Cookies.remove('newDomainTitular')
        }
        setLoadingAdd(true)
        const product = {
            id: (cartLenght).toString(),
            name: `${plan.titulo}`,
            price: plan.preco * ciclo.ciclo.multiplicador,
            planId: plan.id,
            domain: domainMode === 1 ? reusedDomain : `${verifDomain}${selectedExtension.tipo}`,
            cicle: ciclo.ciclo.multiplicador,
            cicleId: ciclo.cicloId,
            newDomain: domainMode === 1 ? false : true,
            entensionId: selectedExtension.id,
            type: "hosting"
        }
        addToCart(product)
        setTimeout(() => {
            toast.success('Adicionado ao carrinho!')
            setOpenedExit(true)
            setLoadingAdd(false)
            setOpened(false)
        }, 1000)
    }

    useEffect(() => {
        if (plans && plans[planIndex]) {
            setPlan(plans[planIndex])
        }
    }, [plans, opened])

    useEffect(() => {
        if (plan && plan.ciclos && plan.ciclos[0]) {
            setCiclo(plan.ciclos[0])
        }
    }, [plan])

    useEffect(() => {
        if (domainExtensions && domainExtensions[0]) {
            setSelectedExtension(domainExtensions[0])
        }
    }, [domainExtensions])


    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault()
            }
        })
    }, [])

    const [openedStatus, setOpenedStatus] = useState(false)

    return (
        <>
            <Dialog open={opened} >
                <DialogContent className="sm:max-w-[425px] bg-white">
                    <DialogHeader>
                        <DialogTitle className="text-black">Adicionar ao carrinho</DialogTitle>
                        <DialogDescription className="text-black">
                            Informe as informações do cliente.
                        </DialogDescription>
                    </DialogHeader>
                    <form className="flex flex-col gap-2">
                        <Select defaultValue={(plans && plans[planIndex]) && plans[planIndex].id.toString()} onValueChange={(value) => {
                            const selectedItem = plans.find(item => item.id === value);
                            if (selectedItem) {
                                setPlan(selectedItem);
                            }
                        }}>
                            <SelectTrigger className="w-[100%]">
                                <SelectValue placeholder="Selecione o seu plano de hospedagem" />
                            </SelectTrigger>
                            <SelectContent>
                                {
                                    plans && plans.map((item, _index) => (
                                        <SelectItem key={_index} value={item.id}>{item.titulo}</SelectItem>
                                    ))
                                }
                            </SelectContent>
                        </Select>
                        <div className="">
                            <Label htmlFor="name" className="text-right">
                                Selecione o ciclo do plano selecionado
                            </Label>
                            <div className="flex items-center justify-center gap-3">
                                <p className="text-[2.3rem] font-bold mt-4 text-gradient">{formatMoney(total)}</p>
                            </div>
                            <div className="flex items-center justify-center gap-3 mt-4">
                                {
                                    plan && plan.ciclos.map((item, _index) => (
                                        <Button style={{ background: ciclo.cicloId === item.cicloId ? "#aaaaff44" : "#fff" }} key={_index} onClick={() => setCiclo(item)} variant={"outline"} type="button">{item.ciclo.nome}</Button>
                                    ))
                                }
                            </div>
                        </div>
                        <Select onValueChange={(value) => {
                            setDomainMode(parseInt(value))
                            setProcessComplete(false)
                        }}>
                            <SelectTrigger className="w-[100%]">
                                <SelectValue placeholder="Já tem um domínio?" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">Já tenho um domínio</SelectItem>
                                <SelectItem value="2">Ainda não tenho um domínio</SelectItem>
                            </SelectContent>
                        </Select>
                        {(domainMode && domainMode === 1) && <div className="">
                            {!processComplete && <><Label htmlFor="username" className="text-right">
                                Domínio
                            </Label>
                                <Input id="username" value={reusedDomain} onChange={(e) => setReusedDomain(e.target.value)} placeholder="Insira o seu domínio" className="col-span-3" />
                            </>}
                        </div>}

                        {(domainMode && domainMode === 2) && <div className="">
                            {processComplete && <><Label htmlFor="username" className="text-right">
                                Domínio
                            </Label>
                                <Input id="username" value={currentDomain} readOnly className="col-span-3" />
                            </>}
                        </div>}
                        <div className="flex gap-3 items-center justif-center">
                            <Button className="w-1/2" onClick={() => setOpened(false)} variant={"outline"} type="button">Cancelar</Button>
                            <Button onClick={() => add()} disabled={domainMode === 1 ? (!domainRegex.test(reusedDomain) || total === 0 || loadingAdd) : (!processComplete || total === 0) || loadingAdd} className="w-1/2 bg-[var(--primary)] hover:bg-[var(--primary)] flex items-center justify-center gap-2" type="button">{loadingAdd ? <TailSpin color="#fff" width={20} /> : <>Adicionar ao carrinho</>}</Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>

            <Dialog open={isOpened} >
                <DialogContent className="sm:max-w-[425px] bg-white">
                    <DialogHeader>
                        <DialogTitle className="text-black">Verificar disponibilidade</DialogTitle>
                        <DialogDescription className="text-black">
                            Insira as informações do domínio.
                        </DialogDescription>
                    </DialogHeader>
                    <form className="flex flex-col gap-2">
                        <div>
                            <Label htmlFor="username" className="text-right">
                                Domínio
                            </Label>
                            <div className="flex gap-2">
                                <Input id="username" value={verifDomain} onChange={(e) => setVerifDomain(e.target.value)} placeholder="seudominio" className="inputVerifyDomain w-[70%]" />
                                <Select defaultValue={(domainExtensions && domainExtensions[0]) && domainExtensions[0].id.toString()} onValueChange={(value) => {
                                    const selected = domainExtensions.find(item => item.id.toString() === value);
                                    setSelectedExtension(selected as IDomainExtension);
                                }}>
                                    <SelectTrigger className="w-[30%]" defaultValue={"1"}>
                                        <SelectValue placeholder="Extensão" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {domainExtensions && domainExtensions.map((item, _index) => (
                                            <SelectItem key={_index} value={item.id.toString()}>{item.tipo}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <Button type="button" onClick={() => setIsOpened(false)} variant={'outline'}>Cancelar</Button>
                        <Button onClick={(verifyDomain)} disabled={verifDomain.length < 3 || loaderLoading || selectedExtension.id === 0 || verifDomain.includes('.') || verifDomain.includes('@' || verifDomain.includes('#'))} className="w-full bg-[var(--primary)] hover:bg-[var(--primary)] flex items*center justify-center gap-2 ">{loaderLoading ? <TailSpin color="#fff" width={20} /> : <>Verificar disponibilidade <Search width={18} type="button" /></>}</Button>
                    </form>
                </DialogContent>
            </Dialog>

            <Dialog open={modalRegister} >
                <DialogContent className="sm:max-w-[425px] bg-white">
                    <DialogHeader>
                        <DialogTitle className="text-black">Titularidade do domínio</DialogTitle>
                        <DialogDescription className="text-black">
                            Insira as informações de titularidade do domínio.
                        </DialogDescription>
                    </DialogHeader>
                    <form className="flex flex-col gap-2">
                        <div>
                            <Label className="text-right">
                                NIF | BI
                            </Label>
                            <div className="flex gap-2">
                                <Input value={nif} onChange={(e) => setNif(e.target.value)} placeholder="Insira o NIF ou BI" className="inputVerifyDomain w-full" />
                                {(!isNIFLoaded && !isBILoaded) && <Button type="button" className="w-max px-3" onClick={verifyNif} disabled={loadingVerify} variant={'outline'}>{loadingVerify ? <TailSpin width={20} color="#222" /> : 'Verificar'}</Button>} </div>
                        </div>
                        {(isNIFLoaded || isBILoaded) && <><div>
                            <Label className="text-right">
                                Titular
                            </Label>
                            <div className="flex gap-2">
                                <Input value={clientLoadedInfo.name} className="inputVerifyDomain w-full" />
                            </div>
                        </div>
                            <div>
                                <Label className="text-right">
                                    País
                                </Label>
                                <div className="flex gap-2">
                                    <Input placeholder="País" value={country} onChange={(e) => setCountry(e.target.value)} className="inputVerifyDomain w-full" />
                                </div>
                            </div>
                            <div>
                                <Label className="text-right">
                                    Endereço
                                </Label>
                                <div className="flex gap-2">
                                    <Input placeholder="Endereço" value={address} onChange={(e) => setAddress(e.target.value)} className="inputVerifyDomain w-full" />
                                </div>
                            </div> </>}
                        <div className="w-full flex items-center justify-center gap-2">
                            <Button type="button" className="w-1/2" onClick={() => {
                                setModalRegister(false)
                                setIsBILoaded(false)
                                setIsNIFLoaded(false)
                                setClientLoadedInfo({ name: "" })
                            }} variant={'outline'}>Cancelar</Button>
                            {
                                (isNIFLoaded || isBILoaded) && (
                                    <Button type="button" className="w-1/2 bg-zinc-900 hover:bg-zinc-950" onClick={registerTitular} disabled={registerLoading} variant={'default'}>{registerLoading ? <TailSpin width={20} color="#fff" /> : 'Confirmar'}</Button>
                                )
                            }
                        </div>
                    </form>
                </DialogContent>
            </Dialog>

            <Dialog open={openedStatus} >
                <DialogContent className="sm:max-w-[325px] bg-white">
                    <DialogHeader>
                        <DialogTitle className="text-[#000]">{currentDomain}</DialogTitle>
                        <DialogDescription className="text-[#000]">
                        <>Domínio disponível para registro ao preço de <span className="bg-[#12753A11] text-[#12753A] py-1.5 px-3">{formatMoney((currentDomain.split('.')[0].length === 3  && (selectedExtension.tipo === '.ao' || selectedExtension.tipo === '.co.ao')) ? 300000 : selectedExtension.preco)}</span></>
                        </DialogDescription>
                    </DialogHeader>
                    <div className="w-full flex flex-col items-center justify-center">
                        <h1 className="text-2xl font-bold" style={{ color: "#096909"}}>Domínio disponível</h1>
                        <div className="flex items-center justify-center gap-2 mt-6 w-full">
                            <Button className="bg-[#fff] hover:bg-[#fff]" type="button" onClick={() => setOpenedStatus(false)} variant={'outline'}>Verificar outro</Button>
                            <Button className="bg-[#012f01] w-1/2 hover:bg-[#012f01]" type="button" onClick={() => {
                                setOpenedStatus(false)
                                setModalRegister(true)
                            }}>Registar</Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            <ExitModal openedExit={openedExit} setOpenedExit={setOpenedExit} />
        </>
    )
}
