import LoginFormSchema, { LoginFormType } from "@/pages/admin/models/loginForm.model";
import api from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import useUtils from "@/utils/useutils";

interface IAdminSignInResponse {
    token: {
        token: string,
        idFuncionario: string,
        role: string
    }
}

export default function useAuthAdmin() {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const { isAdminAuthenticated } = useUtils()
    const router = useNavigate()
    

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormType>({
        resolver: zodResolver(LoginFormSchema)
    });
 
    useEffect(() => {
        setLoading(true)
        if (isAdminAuthenticated()) {
            router('/security/admin')
        }
        else {
            setLoading(false)
        }
    }, [router])

    const signIn = async (data: LoginFormType) => {
        setIsLoading(true);
        try {
            const response: IAdminSignInResponse = await (await api.post('/auth/login', data)).data;

            toast.success('Bem vindo!');
            Cookies.set('adminSession', JSON.stringify({
                token: response.token.token,
                userId: response.token.idFuncionario,
                role: response.token.role
            }), {
                secure: true,
                expires: 1 / 24,
                sameSite: 'Strict'
            })
            setTimeout(() => {
                router('/security/admin/dashboard')
            }, 1000)

        } catch {
            toast.error('Email ou senha inválidos!');
        } finally {
            setIsLoading(false);
        }
    };

    async function signOut() {
        setIsLoading(true)
        setTimeout(() => {
            Cookies.remove('adminSession')
            setIsLoading(false)
            router('/security/login')
        }, 2000)
    }

    return { register, handleSubmit, errors, signIn, isLoading, signOut, loading };
}