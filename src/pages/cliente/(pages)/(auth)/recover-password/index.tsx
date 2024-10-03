import { Link } from "react-router-dom";
import "../../../styles/globals.css";
import "../../../styles/particularLogin.css";
import logo from '@/assets/images/ANGOHOST-02.png'
import { Helmet } from "react-helmet";
import LoaderComponent from "../../../components/loader/view";
import useRecoverCredentials from "@/hooks/useRecoverCredentials";

export default function RecoverCredentials() {

    const { errors, handleSubmit, isLoading, sendMain, register, loading } = useRecoverCredentials()

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
                    <div className="left empresa recovery relative" >
                        <img src={logo} alt="login" className="absolute w-[200px] bottom-[180px] left-[50px]" />
                        <h1>Esqueceu a senha?</h1>
                        <p className="mb-[30px]">Não faça pranto. Recupere em simples passos</p>
                    </div>
                    <div className="right bg-[#edf3f8] relative">
                    <form onSubmit={handleSubmit(sendMain)} className="login_form">
                            <div className="header_form mb-6">
                                <h1 style={{lineHeight: '30px'}} className="text-slate-700">Recuperação</h1>
                                <p className="mb-[30px]">Um e-mail foi enviando para a sua caixa de entrada</p>
                            </div>
                            <div className="body_form">
                                <div className="input_field particular">
                                    <label id="LLMN" htmlFor="membership_number" style={{ color: errors.client_ref ? "red" : "#222" }}>Email</label>
                                    <input
                                        placeholder="Insira o Nº de Telefone ou Email"
                                        style={{ borderColor: errors.client_ref ? "red" : "#aaa" }}
                                        {...register('client_ref')}
                                    />
                                    {errors.client_ref && <p className="text-[#ff0000] w-full text-left">{errors.client_ref.message}</p>}
                                </div>
                                <button type="submit" disabled={isLoading} className="button_auth" style={{ background: 'background: linear-gradient(180deg, #2160ad, #082140);' }}>
                                    {isLoading ? <LoaderComponent color="#fff" /> : "Recuperar"}
                                </button>
                                <div className="terms">
                                    <p className="text-white">
                                        {" "}
                                        <Link className="" to="/privacy-policies">Políticas de Privacidade</Link>{" "}
                                        são aplicáveis.
                                    </p>
                                </div>
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