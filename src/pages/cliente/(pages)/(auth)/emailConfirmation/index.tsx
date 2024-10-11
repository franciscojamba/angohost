
import "../../../styles/globals.css";
import "../../../styles/particularLogin.css";
import logo from '@/assets/images/ANGOHOST-02.png'
import { Helmet } from "react-helmet";
import useRecoverCredentials from "@/hooks/useRecoverCredentials";
import icon from "../../../../../assets/images/mailbox.svg"
import { useEffect, useState } from "react";
import { toast, Toaster } from "sonner";
import { TailSpin } from "react-loader-spinner";
import api from "@/services/api";

export default function EmailConfirm() {

    const { loading } = useRecoverCredentials()
    const [isLoading, setIsLoading] = useState(false)
    const [timer, setTimer] = useState(59)
    let interval: NodeJS.Timeout

    function startInterval() {
        let i = 59
        interval = setInterval(() => {
            setTimer((prev) => prev - 1)
            i--;
            if (i === 0) {
                clearInterval(interval)
            }

        }, 1000)
    }

    useEffect(() => {
        startInterval()
    }, [])

    const clientRef: string = localStorage.getItem("clientRefReset") ?? ""

    async function resendEmail() {

        const form = {
            email: "",
            telefone: ""
        }
        if (clientRef.includes('@')) {
            form.email = clientRef
        }
        else {
            form.telefone = clientRef
        }
        setIsLoading(true)

        try {

            const response = await (await api.post<{ success: boolean, message: string }>("/clienteServico/recuperarSenha", form)).data
            if (response.success) {
                toast.success("E-mail de recuperação reenviado para a sua caixa de entrada!")
                setTimer(59)
                startInterval()
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

    function restartInterval() {
        resendEmail()
    }

    if (loading) {
        return <div className='w-full h-[100vh] bg-white flex items-center justify-center' >
            <h1>ANGOHOST</h1>
        </div>
    }

    return (
        <>
            <Helmet><title>Recuperação de credenciais</title></Helmet>
            <div className="home_main empresa particular" style={{ height: 'calc(100vh' }}>
                <div className="home_body">
                    <div className="left empresa email relative" >
                        <img src={logo} alt="login" className="absolute w-[200px] bottom-[180px] left-[50px]" />
                        <h1>{clientRef.includes('@') ? "Verifique o seu e-mail" : "Verifique o seu telemóvel"}</h1>
                        <p className="mb-[30px]">{clientRef.includes('@') ? "Um e-mail foi enviando para a sua caixa de entrada" : "Uma sms foi enviada para o seu terminal"}</p>
                    </div>
                    <div className="right bg-[#edf3f8] relative">
                        <form className="login_form">
                            <div className="header_form">
                                <h1 style={{ lineHeight: '30px' }} className="text-slate-700">{clientRef.includes('@') ? "Verifique a sua caixa de entrada" : "Verifique a sua caixa de mensagens"}</h1>
                                <p>{clientRef.includes('@') ? "Um e-mail foi enviando para a sua caixa de entrada" : "Uma sms foi enviada para o seu terminal"}</p>
                            </div>
                            <img src={icon} className="w-[250px] my-4 mt-8" />
                            <button type="button" onClick={restartInterval} disabled={timer != 0 || isLoading} className="border-solid transition-colors duration-300 disabled:bg-transparent flex items-center justify-center bg-slate-800 disabled:text-slate-800 text-white border-[1px] border-slate-800 w-full h-[45px] text-[0.9rem] mt-4 rounded-[12px]">{isLoading ? <TailSpin color="#222" width={20} /> : (timer != 0 ? <>Reenvie em {timer}</> : "Reenviar ")}</button>
                        </form>
                        <p className="basic_text not_found_footer text-gray-600">
                            {`
                            
                            © ${new Date().getFullYear()} ANGOHOST, LDA. Todos os direitos reservados
                            `}
                        </p>
                    </div>
                </div>
            </div>
            <Toaster position="top-right" />
        </>
    );
}