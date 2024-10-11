import "../../../styles/globals.css";
import "../../../styles/particularLogin.css";
import logo from '../../../../../../public/ANGOHOST-AZUL.png'
import { Helmet } from "react-helmet";
import LoaderComponent from "../../../components/loader/view";
import { z } from "zod";
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import api from "@/services/api";

const formSchema = z.object({
    newPassword: z.string().min(6, "Crie uma senha com 6 caracteres"),
    repeatnewPassword: z.string().min(6, "Repita a senha criada"),
}).refine(data => data.newPassword === data.repeatnewPassword, {
    message: "As senhas deve ser iguais",
    path: ["repeatnewPassword"],
})

type formType = z.infer<typeof formSchema>

export default function ResetPassword() {

    const { token } = useParams()
    const [loadingVerify, setLoadingVerify] = useState(true)
    const [client, setClientId] = useState("")
    const router = useNavigate()

    useEffect(() => {

        async function verify() {
            setLoadingVerify(true)
            try {
                const response: { success: boolean, message: string, clientId: string } = await (await api.post(`/clienteServico/verificarToken`, { token: token })).data
                if (response.success) {
                    setLoadingVerify(false)
                    setClientId(response.clientId)
                }
                else {
                    router('/expired')
                }
            }
            catch {
                router('/expired')
                toast.error("Token inválido ou expirado!")
            }
            finally {
                setLoadingVerify(false)
            }
        }
        verify()
    }, [router])

    const [isLoading, setIsLoading] = useState(false)



    const { handleSubmit, register, formState: { errors } } = useForm<formType>({
        resolver: zodResolver(formSchema)
    })

    async function save(data: formType) {

        setIsLoading(true)

        try {

            const response: { success: boolean } = await (await api.patch(`/clienteServico/resetarSenha`, { newPassword: data.newPassword, clientId: client })).data
            if (response.success) {
                toast.success("Senha alterada com sucesso!")
                router('/cliente/particular')
            }
            else {
                toast.error("Ocorreu um erro ao processar a sua solicitação!", {
                    description: "Tente novamente mais tarde."
                })
            }
        }
        catch {
            toast.error("Ocorreu um erro ao processar a sua solicitação!", {
                description: "Tente novamente mais tarde."
            }
            )
        }
        finally {
            setIsLoading(false)
        }
    }

    if (loadingVerify) {
        return <div className="w-full h-full flex items-center justify-center bg-slate-100 gap-2"><p className="text-slate-800">Validando</p><TailSpin color="#222" width={20} /></div>
    }

    return (
        <>
            <Helmet><title>Redfinir senha | Angohost</title></Helmet>
            <div className="home_main empresa particular" style={{ height: 'calc(100vh' }}>
                <div className="home_body">
                    <div className="left empresa reset relative" >
                        <img src={logo} alt="login" className="absolute w-[200px] bottom-[180px] left-[50px]" />
                        <h1>Crie uma senha nova</h1>
                        <p className="mb-[30px]">Escolha uma senha forte para aprimorar a sua segurança</p>
                    </div>
                    <div className="right bg-[#edf3f8] relative">
                        <form onSubmit={handleSubmit(save)} className="login_form empresa">
                            <div className="header_form">
                                <h1 style={{ lineHeight: '30px' }} className="text-[#222]">Redefinição de senha</h1>
                                <p>Crie uma senha forte para aprimorar a sua segurança</p>
                            </div>
                            <div className="body_form empresa">
                                <div className="input_field empresa particular">
                                    <label id="LLMN" htmlFor="membership_number" className="text-[#202020]" style={{ color: errors.newPassword ? "red" : "#202020" }}>Nova senha</label>
                                    <input
                                        placeholder="Insira o Nº de Telefone ou Email"
                                        {...register("newPassword")}
                                        type="password"
                                    />
                                    {errors.newPassword && <p className="text-[#ff0000] w-full text-left">{errors.newPassword.message}</p>}
                                </div>
                                <div className="input_field empresa particular">
                                    <label id="LLCA" htmlFor="membership_number" style={{ color: errors.repeatnewPassword ? "red" : "#202020" }}>Repita a nova senha</label>
                                    <input
                                        type="password"
                                        placeholder="Insira a sua senha "
                                        {...register('repeatnewPassword')}
                                    />
                                    {errors.repeatnewPassword && <p className="text-[#ff0000] w-full text-left">{errors.repeatnewPassword.message}</p>}
                                </div>
                                <button disabled={isLoading} className="text-white w-full h-[49px] rounded-[12px] flex items-center justify-center bg-slate-800">
                                    {isLoading ? <LoaderComponent color="#fff" /> : "Salvar alteração"}
                                </button>
                            </div>
                        </form>
                        <p className="basic_text not_found_footer text-gray-600">
                            {`
                            
                            © ${new Date().getFullYear()} ANGOHOST, LDA. Todos os direitos reservados
                            `}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}