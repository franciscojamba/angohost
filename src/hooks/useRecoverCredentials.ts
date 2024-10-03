import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import useUtils from '../utils/useutils';
import api from '@/services/api';

const formSchema = z.object({
    client_ref: z.string().min(1, "Insira o seu telefone ou email"),
})

type formType = z.infer<typeof formSchema>

export default function useRecoverCredentials() {
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

    async function sendMain(data: formType) {
        setIsLoading(true)
        const form = {
            email: "",
            telefone: ""
        }
        if (data.client_ref.includes('@')) {
            form.email = data.client_ref
        }
        else {
            form.telefone = data.client_ref
        }
        try {
            localStorage.setItem("clientRefReset", data.client_ref)
            const response = await (await api.post<{success: boolean, message: string}>("/clienteServico/recuperarSenha",form)).data
            if (response.success) {
                toast.success("E-mail de recuperação enviado para a sua caixa de entrada!")
                router('/cliente/confirmacao/')
            }
            else {
                toast.error('Cliente não encontrado.')
            }
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setIsLoading(false)
        }
    }

    return { isLoading, register, sendMain, handleSubmit, loading, errors }
}