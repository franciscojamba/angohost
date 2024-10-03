
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import usePayStore from "@/contexts/payStore"
import useCart from "@/hooks/useCart"
//import proxy from "@/services/proxy"
import { Dispatch, SetStateAction, useState } from "react"
import { TailSpin } from "react-loader-spinner"
import { toast } from "sonner"
import Cookies from "js-cookie"
import { RejectModal } from "../rejectModal"
// import axios from "axios"
// import proxy from "@/services/proxy"
import axios from "axios"
import { NIF_RESPONSE } from "../buyHostingModal"

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

// interface IEdgarResponse {
//     data: {
//         success: boolean,
//         nome: string,
//         numero_contacto: string,
//         endereco: string,
//     }
// }

//  export interface IPlenoResponse {
//     data: {
//         status: "success"|"error",
//         nomeContribuinte: string,
//         message: string,
//     }
// }



const NIF_REGEX = /^[0-9]{10}$/
const BI_REGEX = /^[0-9]{9}[a-zA-Z]{2}[0-9]{3}$/

export function TransferDomainModal({ opened, setOpened, eppKey }: { opened: boolean, setOpened: Dispatch<SetStateAction<boolean>>, eppKey: string }) {

    const [nif, setNif] = useState("")
    const [loadingVerify, setLoadingVerify] = useState(false)
    const { cartLenght, addToCart } = useCart()
    const { currentDomain, currentDomainExtension } = usePayStore()
    const [registerLoading, setRegisterLoading] = useState(false)
    const [country, setCountry] = useState("")
    const [address, setAddress] = useState("")
    const [rejectModal, setRejectModal] = useState(false)

    const { isBILoaded, isNIFLoaded, clientLoadedInfo, actions: {
        setClientNIF,
        setIsNIFLoaded,
        setIsBILoaded,
        setClientLoadedInfo
    } } = usePayStore()

    async function verifyNif() {
        setClientNIF(nif)
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
           console.log(response)


         
         
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
        }
        catch {
            toast.error('Ocorreu um erro ao processar a sua solicitação!')
        }
        finally {
            setLoadingVerify(false)
        }
    }

    function registerTitular() {
        console.log(currentDomainExtension.tipo)
        console.log(currentDomain.length)
        if ((currentDomainExtension.tipo === ".co.ao" || currentDomainExtension.tipo === ".ao") && currentDomain.split(".")[0].length === 3) {
        
            const product = {
                id: (cartLenght + 1).toString(),
                name: `Transferência de Domínio Premium ${currentDomain}`,
                price: 300000,
                domainName: `${currentDomain}`,
                newDomain: true,
                extensionId: currentDomainExtension.id,
                type: "domain",
                eppKey: eppKey,
                joined: false
            }
            addToCart(product)
            setRegisterLoading(true)
            setTimeout(() => {
                const newDomainTitular = {
                    nif: nif,
                    nome: name,
                    endereco: address,
                    pais: country,
                    domain: `${currentDomain}`,
                    extensionId: currentDomainExtension.id,
                    new: true,
                    to: 'hospedagem'
                }
                Cookies.set('newDomainTitular', JSON.stringify(newDomainTitular))
                toast.success('Dominio premium registado com sucesso!')
                setRegisterLoading(false)
                setOpened(false)
                setRejectModal(true)
            }, 1000)
        }
        else {
            const product = {
                id: (cartLenght + 1).toString(),
                name: `Transferência de Domínio ${currentDomain}`,
                price: currentDomainExtension.preco,
                domainName: `${currentDomain}`,
                newDomain: true,
                extensionId: currentDomainExtension.id,
                type: "domain",
                eppKey: eppKey,
                joined: false
            }
            addToCart(product)
            setRegisterLoading(true)
            setTimeout(() => {
                const newDomainTitular = {
                    nif: nif,
                    nome: clientLoadedInfo.name,
                    endereco: address,
                    pais: country,
                    domain: `${currentDomain}`,
                    extensionId: currentDomainExtension.id,
                    new: true,
                    to: 'domain'
                }
                Cookies.set('newDomainTitular', JSON.stringify(newDomainTitular))
                toast.success('Dominio registado com sucesso!')
                setRegisterLoading(false)
                setOpened(false)
                setRejectModal(true)
            }, 1000)
        }
    }

    return (
        <>
            <Dialog open={opened} >
                <DialogContent className="sm:max-w-[425px] bg-white">
                    <DialogHeader>
                        <DialogTitle className="text-black">Transferência de Domínio</DialogTitle>
                        <DialogDescription className="text-black">
                            Insira as informações do titular do domínio
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
                            <Button type="button" className="w-1/2" onClick={() => setOpened(false)} variant={'outline'}>Cancelar</Button>
                            {
                                (isNIFLoaded || isBILoaded) && (
                                    <Button type="button" className="w-1/2 bg-zinc-900 hover:bg-zinc-950" onClick={registerTitular} variant={'default'}>{registerLoading ? <TailSpin width={20} color="#fff" /> : 'Confirmar'}</Button>
                                )
                            }
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
            <RejectModal openedReject={rejectModal} setOpenedReject={setRejectModal} />
        </>
    )
}
