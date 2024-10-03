import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Dispatch, SetStateAction, useState } from "react"
import bai from "@/assets/images/bai-paga.png"
import paypal from "@/assets/images/PayPal-Logo.png"
import express from "@/assets/svgs/logo_multicaixa.svg"
import mcx from "@/assets/images/express.png"
import atl from "@/assets/images/atlantico.png"
import "./style.css"
import useCart from "@/hooks/useCart"
import { TailSpin } from "react-loader-spinner"
import usePayStore from "@/contexts/payStore"
import { LogIn, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { z } from "zod"
import SignInModeSelector from "../../(pages)/comprar-servico/components/signInModeSelector"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import useAuth from "@/hooks/useAuth"
import { toast } from "sonner"
//import proxy from "@/services/proxy"
import usePayHosting from "@/hooks/usePayHosting"
import api from "@/services/api"

import axios from "axios"
import { NIF_RESPONSE } from "../buyHostingModal"

interface Client {
    id: string;
    nome: string;
    email: string;
    telefone: string;
    nif: string;
    senha: string;
    enderecoId: string;
    role: string;
}

interface ApiRegisterResponse {
    success: boolean;
    message: string;
    client: Client;
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

// interface IEdgarResponse {
//     data: {
//         success: boolean,
//         nome: string,
//         numero_contacto: string,
//         endereco: string,
//     }
// }

interface IExitModalProps {
    openedExit: boolean,
    setOpenedExit: Dispatch<SetStateAction<boolean>>
}

const formSchema = z.object({
    clientRef: z.string().min(3, "Requerido!!"),
    password: z.string().min(6, "Requerido")
})

const registerSchema = z.object({
    email: z.string().email(),
    telefone: z.string().min(9, ""),
    endereco: z.string().min(1, ""),
    senha: z.string().min(6, ""),
    reSenha: z.string().min(6, "")
}).refine(data => data.senha === data.reSenha, {
    message: "As senhas não coincidem",
    path: ["reSenha"],
})

type registerType = z.infer<typeof registerSchema>

type formType = z.infer<typeof formSchema>

const NIF_REGEX = /^[0-9]{10}$/
const BI_REGEX = /^[0-9]{9}[a-zA-Z]{2}[0-9]{3}$/

export function PayModal({ openedExit, setOpenedExit }: IExitModalProps) {


    const [selectedBanc, setSelectedBanc] = useState(1)
    const [loadingVerify, setLoadingVerify] = useState(false)
    const [loadingEntrar, setLoadingEntrar] = useState(false)
    const [loadingCreate, setLoadingCreate] = useState(false)
    const [openCreateAccount, setOpenCreateAccount] = useState(false)
    const [nif, setNif] = useState("")
    const { signMode, signInMode, clientLoadedInfo, isBILoaded, actions: {
        setSignMode,
        setClientNIF,
        setIsNIFLoaded,
        setIsBILoaded,
        setClientLoadedInfo
    } } = usePayStore()
    const { signIn } = useAuth()
    const { location } = usePayHosting()

    const { pay, loading, openAccount, setOpenAccount, openTrans, setOpenTrans } = useCart()
    const { handleSubmit, register, formState: { errors } } = useForm<formType>({
        resolver: zodResolver(formSchema)
    })

    const { handleSubmit: registerSubmit, register: registerRegister, formState: { errors: registerErrors } } = useForm<registerType>({
        resolver: zodResolver(registerSchema)
    })

    async function entrar(data: formType) {
        setLoadingEntrar(true)
        const form = {
            email: '',
            telefone: '',
            tipo: (isBILoaded && signMode === 1) ? "Particular" : 
                    (!isBILoaded && signMode === 1) ? "Empresa" :
                    (signInMode === 1 && signMode === 2) ? "Particular" :
                    (signInMode === 2 && signMode === 2) ? "Empresa" : "",
            senha: data.password
        }
        console.log(signInMode);

        if (data.clientRef.includes('@')) {
            form.email = data.clientRef
        }
        else {
            form.telefone = data.clientRef
        }
        const response = await signIn(form)
        if (response.success) {
            toast.success("Bem vindo!")
            setOpenAccount(false)
            setLoadingEntrar(false)
        }
        else {
            toast.error("Verifique as suas credenciais")
            setLoadingEntrar(false)
        }
        setLoadingEntrar(false)
    }

    async function criarConta(data: registerType) {
        setLoadingCreate(true)
        try {
            const form = {
                nome: `${clientLoadedInfo.name}`,
                email: data.email,
                nif: nif,
                telefone: data.telefone,
                role: isBILoaded ? "Particular" : "Empresa",
                senha: data.senha,
                endereco: {
                    pais: location.pais,
                    provincia: location.provincia,
                    endereco: data.endereco
                }
            }
            const response: ApiRegisterResponse = await (await api.post('/cliente/registar', form)).data;
            if (response.success) {
                toast.success("Conta criada com sucesso!")
                await entrar({
                    clientRef: response.client.email,
                    password: data.senha
                })
                setOpenCreateAccount(false)
    
            }
            else {
                toast.error(response.message)
                setLoadingCreate(false)
                setOpenCreateAccount(false)
            }
            setLoadingCreate(false)
        }
        catch {
            toast.error('Email ou telefone já em utilização!')
        }
        finally {
            setLoadingCreate(false)
        }
    }

    // async function verifyNif() {
    //     setClientNIF(nif)
    //     setLoadingVerify(true)
    //     if (NIF_REGEX.test(nif)) {
    //         try {
    //             const response: IYabaduRespose = await (await proxy.get(`/yabaduu.ao/ao/actions/nif.ajcall.php?nif=${nif}`)).data
    //             if (response.sucess) {
    //                 toast.success('NIF verificado com sucesso!')
    //                 setIsNIFLoaded(true)
    //                 setIsBILoaded(false)
    //                 setLoadingVerify(false)
    //                 setOpenCreateAccount(true)
    //                 setClientLoadedInfo({
    //                     name: response.data.nome
    //                 })
    //             }
    //             else {
    //                 toast.error('NIF Invalido!')
    //             }
    //         }
    //         catch (error) {
    //             console.log(error)
    //         }
    //         finally {
    //             setLoadingVerify(false)
    //         }
    //     }
    //     else if (BI_REGEX.test(nif)) {
    //         setLoadingVerify(true)
    //         try {
    //             const resp: ApiResponse = await (await proxy.get(`/https://api.inagbe.gov.ao/api/v1/consultarBi?bi=${nif}`)).data
    //             toast.success('BI Verificado com sucesso!')
    //             setClientLoadedInfo({
    //                 name: `${resp.data.data.first_name} ${resp.data.data.last_name}`,
    //             })
    //             setOpenCreateAccount(true)
    //             setIsBILoaded(true)
    //             setIsNIFLoaded(false)
    //         }
    //         catch {
    //             toast.error('Ocorreu um erro ao processar a sua solicitação!')
    //         }
    //         finally {
    //             setLoadingVerify(false)
    //         }
    //     }
    //     else {
    //         toast.error('Valor inválido!')
    //         setLoadingVerify(false)
    //     }
    //     setLoadingVerify(false)
    // }

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
            console.log(response)
 
 
          
          
             if (response.success) {
                
                 setClientLoadedInfo({
                     name: response.data.gsmc
                 })
                 if (NIF_REGEX.test(nif)) {
                     setIsNIFLoaded(true)
                     setIsBILoaded(false)
                     toast.success('BI Verificado com sucesso!')
                 }
                 else if (BI_REGEX.test(nif)) {
                     setIsBILoaded(true)
                     setIsNIFLoaded(false)
                     toast.success('BI Verificado com sucesso!')
                 }
                 setOpenCreateAccount(true)
             }
         }
         catch {
             toast.error('Ocorreu um erro ao processar a sua solicitação!')
         }
        finally {
            setLoadingVerify(false)
        }
    }

    return (
        <>
            <Dialog open={openedExit} >
                <DialogContent className="sm:max-w-[425px] bg-white">
                    <DialogHeader>
                        <DialogTitle className="text-black">Pagamento <span style={{ letterSpacing: '1px' }} className="py-1.5 px-3 bg-red-50 text-red-600 font-[500] text-[0.9rem] mb-1 rounded-full ml-2">Mais métodos brevemente</span></DialogTitle>
                        <DialogDescription className="text-black mt-2">
                            Selecione o método de pagamento que lhe convier
                        </DialogDescription>
                    </DialogHeader>
                    <Button disabled variant={"outline"} onClick={() => setOpenedExit(false)} className="h-[50px] items-center justify-center p-0"><div className="w-2/5 flex items-center justify-start"><img src={bai} className="w-[100px]" alt="bai paga" /></div> <div className="w-1/2 items-center justify-start flex">BAI Paga</div></Button>
                    <Button disabled variant={"outline"} onClick={() => setOpenedExit(false)} className="h-[50px] items-center justify-center p-0"><div className="w-2/5 flex items-center justify-start"><img src={paypal} className="w-[100px]" alt="bai paga" /></div> <div className="w-1/2 items-center justify-start flex">PayPal</div></Button>
                    <Button disabled variant={"outline"} onClick={() => setOpenedExit(false)} className="h-[50px] items-center justify-center p-0"><div className="w-2/5 flex items-center justify-start"><img src={mcx} className="w-[120px]" alt="bai paga" /></div> <div className="w-1/2 items-center justify-start flex">GPO Express</div></Button>
                    <Button variant={"outline"} onClick={() => setOpenTrans(true)} className="h-[50px] items-center justify-center p-0"><div className="w-2/5 flex items-center justify-start"><img src={express} className="w-[130px]" alt="bai paga" /></div> <div className="w-1/2 items-center justify-start flex">Transferência bancária</div></Button>
                    <Button variant={"outline"} onClick={() => setOpenedExit(false)} className="h-[50px] items-center justify-center p-0">Cancelar</Button>
                </DialogContent>
            </Dialog>

            <Dialog open={openTrans} >
                <DialogContent className="sm:max-w-[425px] bg-white">
                    <DialogHeader>
                        <DialogTitle className="text-black">Coordenadas bancárias</DialogTitle>
                        <DialogDescription className="text-black mt-2">
                            Selecione o banco
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex gap-2  justify-center items-center">
                        {/* <Button variant={"outline"} onClick={() => setSelectedBanc(1)} className="banc w-1/2 h-[50px] items-center justify-center p-0" data-selected={selectedBanc === 1}><img src={bai2} className="w-[70px]" alt="bai paga" /></Button> */}
                        <Button variant={"outline"} onClick={() => setSelectedBanc(2)} className="banc w-1/2 h-[50px] items-center justify-center p-0" data-selected={selectedBanc === 2}><img src={atl} className="w-[120px]" alt="bai paga" /></Button>

                    </div>
                    <div>
                        <div className='mt-2 w-full'>
                            <label htmlFor="" className='font-semibold text-[0.9rem]'>IBAN </label>
                            <input type="text" disabled value={selectedBanc === 1 ? "0055 0000 3795 7135 1010 3" : "0055 0000 3795 7135 1010 3"} className='w-full text-center h-[30px] rounded-[12px] bg-white border-solid px-4' />
                        </div>
                        <div className='mt-2 w-full'>
                            <label htmlFor="" className='font-semibold text-[0.9rem]'>Conta </label>
                            <input type="text" disabled value={selectedBanc === 1 ? "137957135 10 001" : "137957135 10 001"} className='w-full text-center h-[30px] rounded-[12px] bg-white border-solid px-4' />
                        </div>
                        <div className='mt-2 w-full'>
                            <label htmlFor="" className='font-semibold text-[0.9rem]'>Titular </label>
                            <input type="text" disabled value="ANGOHOST PRESTACAO DE SERVICO LDA" className='w-full mb-3 text-center h-[30px] rounded-[12px] bg-white border-solid px-4' />
                        </div>
                    </div>
                    <div className="flex gap-2 items-center justify-center">
                        <Button variant={"outline"} onClick={() => setOpenTrans(false)} className="w-1/2 items-center justify-center p-0">Cancelar</Button>
                        <Button disabled={loading} onClick={pay} variant={"default"} className="w-1/2 bg-zinc-900 hover:bg-zinc-900 items-center justify-center p-0">{loading ? <TailSpin color="#fff" width={20} /> : <>Finaliza compra</>}</Button>
                    </div>
                </DialogContent>
            </Dialog>

            <Dialog open={openAccount} >
                <DialogContent className="sm:max-w-[425px] bg-white">
                    <DialogHeader>
                        <DialogTitle className="text-black">Autenticação</DialogTitle>
                        <DialogDescription className="text-black">
                            Entre na sua conta ou crie uma.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex gap-2">
                        <Button variant={"outline"} onClick={() => setSignMode(1)} className="banc w-1/2 items-center justify-center p-0" data-selected={signMode === 1}>Criar conta</Button>
                        <Button variant={"outline"} onClick={() => setSignMode(2)} className="banc w-1/2 items-center justify-center p-0" data-selected={signMode === 2}>Entrar</Button>
                    </div>
                    {signMode === 1 && <form className="flex flex-col gap-2">
                        <div>
                            <Label htmlFor="username" className="text-right">
                                NIF | BI *
                            </Label>
                            <div className="flex gap-2">
                                <Input type="text" autoFocus placeholder="Insira o seu NIF ou BI" onChange={(e) => setNif(e.target.value)} className="inputVerifyDomain w-full" />
                            </div>
                            <div className="w-full flex items-center justify-center gap-2 mt-2">
                                <Button type="button" onClick={() => setOpenAccount(false)} variant={'outline'} className="w-1/2">Cancelar</Button>
                                <Button type="button" onClick={verifyNif} disabled={nif.length < 10} className="w-1/2 bg-[var(--primary)] hover:bg-[var(--primary)] flex items*center justify-center gap-2">{loadingVerify ? <TailSpin color="#fff" width={20} /> : <>Verificar<Search width={18} /></>}</Button>
                            </div>
                        </div>
                    </form>}
                    {signMode === 2 && <form onSubmit={handleSubmit(entrar)} className="flex flex-col gap-2">
                        <SignInModeSelector />
                        <div >
                            <Label htmlFor="username" className="text-right">
                                Email ou Telefone
                            </Label>
                            <div className="flex gap-2">
                                <Input placeholder="(+244) 9012345678" {...register('clientRef')} className="inputVerifyDomain w-full mb-2" />
                            </div>
                            <Label htmlFor="username" className="text-right mt-2">
                                Senha
                            </Label>
                            <div className="flex gap-2">
                                <Input type="password" placeholder="**********" {...register('password')} className="inputVerifyDomain w-full" />
                            </div>
                            <div className="w-full flex items-center justify-center gap-2 mt-3">
                                <Button type="button" onClick={() => setOpenAccount(false)} variant={'outline'} className="w-1/2">Cancelar</Button>
                                <Button type="submit" disabled={loadingEntrar || !!errors.password || !!errors.clientRef} className="w-1/2 bg-[var(--primary)] hover:bg-[var(--primary)] flex items*center justify-center gap-2">{loadingEntrar ? <TailSpin color="#fff" width={20} /> : <>Entrar <LogIn width={18} /></>}</Button>
                            </div>
                        </div>
                    </form>}
                </DialogContent>
            </Dialog>

            <Dialog open={openCreateAccount} >
                <DialogContent className="sm:max-w-[425px] bg-white">
                    <DialogHeader>
                        <DialogTitle className="text-black">Criar conta</DialogTitle>
                        <DialogDescription className="text-black">
                            Insira os seus dados.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={registerSubmit(criarConta)} className="flex flex-col gap-2">
                        <div >
                            <Label htmlFor="username" className="text-right">
                                Nome
                            </Label>
                            <div className="flex gap-2">
                                <Input readOnly value={clientLoadedInfo.name} className="inputVerifyDomain w-full mb-2" />
                            </div>
                            <Label htmlFor="username" className="text-right mt-2">
                                Email
                            </Label>
                            <div className="flex gap-2">
                                <Input type="email" {...registerRegister("email")} placeholder="nome@email.com" className="inputVerifyDomain w-full" />
                            </div>
                            <Label htmlFor="username" className="text-right mt-2">
                                Telefone
                            </Label>
                            <div className="flex gap-2">
                                <Input type="text" {...registerRegister("telefone")} placeholder="923 456 789" className="inputVerifyDomain w-full" />
                            </div>
                            <Label htmlFor="username" className="text-right mt-2">
                                País
                            </Label>
                            <div className="flex gap-2">
                                <Input type="text" readOnly value={location.pais} placeholder="Angola" className="inputVerifyDomain w-full" />
                            </div>
                            <Label htmlFor="username" className="text-right mt-2">
                                Provincia
                            </Label>
                            <div className="flex gap-2">
                                <Input type="text" readOnly value={location.provincia} placeholder="Luanda" className="inputVerifyDomain w-full" />
                            </div>
                            <Label htmlFor="username" className="text-right mt-2">
                                Endereço
                            </Label>
                            <div className="flex gap-2">
                                <Input type="text" {...registerRegister("endereco")} placeholder="Av. Pedro de Castror, rua A2" className="inputVerifyDomain w-full" />
                            </div>
                            <Label htmlFor="username" className="text-right mt-2">
                                Senha
                            </Label>
                            <div className="flex gap-2">
                                <Input type="password" {...registerRegister("senha")} placeholder="********" className="inputVerifyDomain w-full" />
                            </div>
                            <Label htmlFor="username" className="text-right mt-2">
                                Confirme a senha
                            </Label>
                            <div className="flex gap-2">
                                <Input type="password" {...registerRegister("reSenha")} placeholder="********" className="inputVerifyDomain w-full" />
                            </div>
                            <div className="w-full flex items-center justify-center gap-2 mt-3">
                                <Button type="button" onClick={() => setOpenCreateAccount(false)} variant={'outline'} className="w-1/2">Cancelar</Button>
                                <Button type="submit" disabled={loadingCreate || !!registerErrors.email || !!registerErrors.endereco || !!registerErrors.reSenha || !!registerErrors.senha || !!registerErrors.telefone} className="w-1/2 bg-[var(--primary)] hover:bg-[var(--primary)] flex items*center justify-center gap-2">{loadingCreate ? <TailSpin color="#fff" width={20} /> : <>Criar conta <LogIn width={18} /></>}</Button>
                            </div>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}
