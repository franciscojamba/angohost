import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import useUtils from '../utils/useutils';
import useAuth from './useAuth';

const formSchema = z.object({
    client_ref: z.string().min(1, "Insira o seu telefone ou email"),
    password: z.string().min(1, "Insira a sua senha")
})

type formType = z.infer<typeof formSchema>

export default function useCorporativeLogin() {
    const router = useNavigate()
    const { isAuthenticated } = useUtils()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        if (isAuthenticated()) {
            router("/cliente/painel/dashboard");
        } else {
            setLoading(false);
        }
    }, [router]);


    const { register, handleSubmit, formState: { errors } } = useForm<formType>({
        resolver: zodResolver(formSchema)
    })

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { signIn } = useAuth()

    async function loginCoporative(data: formType) {
        setIsLoading(true)
        const form = {
            telefone: '',
            senha: data.password,
            email: '',
            tipo: 'Empresa'
        }
        if (data.client_ref.includes('@')) {
            form.email = data.client_ref
        }
        else {
            form.telefone = data.client_ref
        }
        try {
            const response = await signIn(form)
            if (response.success) {
                toast.success('Bem vindo!')
                setIsLoading(false)
                router('/cliente/painel/dashboard')
            }
            else {
                toast.error('Verifique as usas credenciais.')
            }
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setIsLoading(false)
        }
    }

    return { isLoading, register, loginCoporative, handleSubmit, loading, errors }
}