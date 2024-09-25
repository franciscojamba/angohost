import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import LoaderComponent from "../../../../cliente/components/loader/view"
import useAuth from "../../../../../hooks/useAuth"
import usePayStore from "../../../../../contexts/payStore"
import {toast} from "sonner"

const formSchema = z.object({
    client_ref: z.string().min(1, "Insira o seu telefone ou email"),
    password: z.string().min(1, "Insira a sua senha")
})

type formType = z.infer<typeof formSchema>

export default function SignInForm() {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { signIn } = useAuth()
    const { signInMode, actions: {
        setFormStep
    } } = usePayStore()

    const { register, handleSubmit, formState: { errors } } = useForm<formType>({
        resolver: zodResolver(formSchema)
    })

    async function handleLogin(data: formType) {
        setIsLoading(true)
        const form = {
            senha: data.password,
            tipo: signInMode === 1 ? 'particular' : 'empresa',
            email: '',
            telefone: ''
        };

        if (data.client_ref.includes('@')) {
            form.email = data.client_ref;
        } else {
            form.telefone = data.client_ref;
        }
        try {
            const response: { success: boolean; message: string; } = await signIn(form)
            if (response.success) {
                toast.success(response.message)
                setFormStep(4)
            }
            else {
                toast.error(response.message)
            }
        }
        catch (error) {
            console.log(`Ocorreu um erro ao realizar o login: ${error}`)
        }
        finally {
            setIsLoading(false)
        }
    }

    return (
        <form id='login' className="w-full sm:w-max" onSubmit={handleSubmit(handleLogin)}>
            <div className='flex flex-col sm:flex-row gap-3 mt-[20px] w-full sm:w-max sm:px-0'>
                <div className='flex flex-col w-full sm:w-max h-max'>
                    <label htmlFor="" style={{ color: errors.client_ref ? "#f00" : "#222" }} className='font-semibold text-[0.9rem]'>Telefone ou E-Mail*</label>
                    <input type="text" {...register('client_ref')} style={{ borderColor: errors.client_ref ? "#f00" : "#ddd" }} placeholder='Insira o seu telefone ou email' className='w-full sm:w-[300px] h-[49px] rounded-[12px] bg-white border-[1px] border-solid px-4' />
                    {errors.client_ref && <p className='w-full text-left text-red-500 mt-1'>{errors.client_ref.message}</p>}
                </div>
                <div className='flex flex-col w-full sm:w-max h-max'>
                    <label htmlFor="" style={{ color: errors.password ? "#f00" : "#222" }} className='font-semibold text-[0.9rem]'>Senha*</label>
                    <input type="password" {...register('password')} style={{ borderColor: errors.password ? "#f00" : "#ddd" }} placeholder='Insira a sua senha' className='w-full sm:w-[300px] h-[49px] rounded-[12px] bg-white border-[1px] border-solid px-4' />
                    {errors.password && <p className='w-full text-left text-red-500 mt-1'>{errors.password.message}</p>}
                </div>
            </div>
            <div className='flex w-full sm:w-max h-max sm:px-0'>
                <button disabled={isLoading} className='w-full sm:w-[617px] mt-4 h-[49px] rounded-[12px] border-[1px] border-solid px-4 text-white flex items-center justify-center' style={{ background: 'linear-gradient(90deg, #2160ad, #082140)' }}>{isLoading ? <LoaderComponent color="#fff" /> : "Entrar"}</button>
            </div>
        </form>
    )
}