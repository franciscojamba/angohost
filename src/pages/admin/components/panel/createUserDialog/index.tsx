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
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import useAuth from "@/hooks/useAuth"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"
import { TailSpin } from "react-loader-spinner"
import useAdminStore from "@/pages/admin/contexts/adminStore"


interface ICreateModalProps {
    opened: boolean,
    setOpened: Dispatch<SetStateAction<boolean>>,
}

const formSchema = z.object({
    nome: z.string().min(3, ''),
    email: z.string().email().min(1, ''),
    telefone: z.string().min(1, ''),
    nif: z.string().min(1, ''),
    role: z.string(),
    pais: z.string().min(1, ''),
    provincia: z.string().min(1, ''),
    endereco: z.string().min(1, ''),
    senha: z.string().min(1, '')                                                                        ,
})

type formType = z.infer<typeof formSchema>

export function CreateUserModal({ opened, setOpened }: ICreateModalProps) {

    const [loading, setLoading] = useState(false)

    const { handleSubmit, register, setValue, formState: { errors } } = useForm<formType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            role: 'Particular',
        }
    })

    const { actions: {
        getClientsList
    } } = useAdminStore()

    const { register: reg } = useAuth()
    const router = useNavigate()

    useEffect(() => {
        if (errors.nif) {
            toast.error('NIF inválido!')
        }
        if (errors.telefone) {
            toast.error('Telefone inválido!')
        }
        if (errors.email) {
            toast.error('E-mail inválido!')
        }  
        if (errors.nome) {
            toast.error('Nome inválido!')
        }
        if (errors.senha) {
            toast.error('Senha inválida!')
        }
        if (errors.role) {
            toast.error('Tipo de cliente inválido!')
        }
        if (errors.pais) {
            toast.error('País inválido!')
        }
        if (errors.provincia) {
            toast.error('Província inválida!')
        }
        if (errors.endereco) {
            toast.error('Endereço inválido!')
        }


    }, [errors])

    async function createAccount(data: formType) {
        setLoading(true)
        console.log('teste')
        try {
            const form = {
                nif: data.nif,
                nome: data.nome,
                email: data.email,
                telefone: data.telefone,
                senha: data.senha,
                role: data.role,
                endereco: {
                    pais: data.pais,
                    provincia: data.provincia,
                    endereco: data.endereco
                }
            }
            const response = await reg(form)
            if (response.success) {
                await getClientsList()
                toast.success('Cliente cadastrado com sucesso!')
                setOpened(false)
                router('/security/admin/clients/list', { replace: true })
            }
            else {
                toast.error("E-mail ou telefone já cadastrado.", {
                    description: 'Por favor, verifique os dados e tente novamente.'
                })
            }
        }
        catch {
            toast.error('Ocorreu um erro ao processar a sua solicitacao!!!')
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <Dialog open={opened} >
            <DialogContent className="sm:max-w-[425px] bg-white">
                <DialogHeader>
                    <DialogTitle className="text-black">Criar cliente</DialogTitle>
                    <DialogDescription className="text-black">
                        Informe as informações do cliente.
                    </DialogDescription>
                </DialogHeader>
                <form className="flex flex-col gap-2" onSubmit={handleSubmit(createAccount)}>
                    <div className="">
                        <Label htmlFor="name" className="text-right">
                            Nome
                        </Label>
                        <Input id="name" {...register('nome')} placeholder="John Doe" className="col-span-3" />
                    </div>
                    <div className="">
                        <Label htmlFor="username" className="text-right">
                            Email
                        </Label>
                        <Input id="username"  {...register('email')} placeholder="Johnoe@domain.extension" className="col-span-3" />
                    </div>
                    <div className="">
                        <Label htmlFor="username" className="text-right">
                            Telefone
                        </Label>
                        <Input id="username"  {...register('telefone')} placeholder="(244) 912345678" className="col-span-3" />
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="">
                            <Label className="text-right">
                                NIF
                            </Label>
                            <Input id="username"  {...register('nif')} placeholder="NIF ou BI" className="col-span-3" />
                        </div>
                        <div className="">
                            <Label className="text-right">
                                Tipo de cliente
                            </Label>
                            <Select defaultValue="Particular" onValueChange={(value) => {
                                setValue('role', value)
                                console.log(value)
                            }} {...register('role')}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Tipo de cliente" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Empresa">Empresa</SelectItem>
                                    <SelectItem value="Particular">Particular</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="">
                            <Label className="text-right">
                                País
                            </Label>
                            <Input  {...register('pais')} placeholder="USA" className="col-span-3" />
                        </div>
                        <div className="">
                            <Label className="text-right">
                                Provincia
                            </Label>
                            <Input  {...register('provincia')} placeholder="North Carolina" className="col-span-3" />
                        </div>
                    </div>
                    <div className="">
                        <Label className="text-right">
                            Endereço
                        </Label>
                        <Input  {...register('endereco')} placeholder="Us Middleware" className="col-span-3" />
                    </div>
                    <div className="">
                        <Label className="text-right">
                            Senha
                        </Label>
                        <Input  {...register('senha')} placeholder="*********" type="password" className="col-span-3" />
                    </div>
                    <Button onClick={() => setOpened(false)} variant={"outline"} type="button">Cancelar</Button>
                    <Button disabled={loading} className="bg-[var(--primary)] hover:bg-[var(--primary)]" type="submit">{loading ? <TailSpin color="#fff" width={20} /> : <>Cadastrar</>}</Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
