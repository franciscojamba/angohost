import { useState } from "react"
import api from "../services/api"
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"

interface ISignInProps {
    email?: string,
    telefone?: string,
    senha: string,
    tipo?: string
}

interface ISignInResponse {
    token: {
        token: string,
        idCliente: string
    }
}

interface IRegisterProps {
    nif: string,
    nome: string,
    email: string,
    telefone: string,
    senha: string,
    role: string,
    endereco: {
        pais: string,
        provincia: string,
        endereco: string,
    }
}

interface IRegisterResponse {
    success: boolean,
    message: string
}

export default function useAuth() {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const router = useNavigate()

    async function signIn(data: ISignInProps): Promise<{ success: boolean, message: string, clientID: string }> {

        const form = {
            email: data.email,
            telefone: data.telefone,
            senha: data.senha
        }

        setIsLoading(true)

        try {
            const signInResponse: ISignInResponse = await (await api.post(`/cliente/entrar/${data.tipo}`, form)).data
            console.log(signInResponse)
            Cookies.set('session', JSON.stringify({
                token: signInResponse.token.token,
                clientId: signInResponse.token.idCliente,
                clientType: data.tipo
            }), {
                secure: true,
                expires: 1 / 24,
                sameSite: 'Strict'
            })

            return { success: true, message: "Login sucedido com sucesso!", clientID: signInResponse.token.idCliente }
        }
        catch (error) {

            console.log(`Ocorreu um erro ao realizar o login: ${error}`)
            return { success: false, message: "Verifique as suas credenciais!", clientID: '' }

        }
        finally {
            setIsLoading(false)
        }
    }

    async function signOut() {
        setIsLoading(true)
        setTimeout(() => {
            Cookies.remove('session')
            setIsLoading(false)
            router('/')
        }, 2000)
    }

    async function register(data: IRegisterProps): Promise<{ success: boolean, message: string }> {

        setIsLoading(true)

        try {
            const registerResponse: IRegisterResponse = await api.post('/cliente/registar', data)
            console.log(registerResponse)
            return { success: true, message: registerResponse.message }
        }
        catch (error) {
            return { success: false, message: "Verifique as suas credenciais!" }
        }
        finally {
            setIsLoading(false)
        }
    }

    return { signIn, signOut, register, isLoading }

}