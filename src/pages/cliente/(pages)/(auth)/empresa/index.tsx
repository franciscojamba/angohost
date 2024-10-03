import { Link } from "react-router-dom";
import "../../../styles/globals.css";
import "../../../styles/particularLogin.css";
import logo from '/ANGOHOST-02.png'
import { Helmet } from "react-helmet";
import LoaderComponent from "../../../components/loader/view";
import useCorporativeLogin from "../../../../../hooks/useCorporativeLogin";

export default function Login() {

    const { errors, handleSubmit, isLoading, loginCoporative, register, loading } = useCorporativeLogin()

    if (loading) {
        return <div className='w-full h-[100vh] bg-white flex items-center justify-center' >
            <h1>ANGOHOST</h1>
        </div>
    }

    return (
        <>
            <Helmet><title>Login Coporativo</title></Helmet>
            <div className="home_main empresa" style={{ height: 'calc(100vh' }}>
                <div className="home_body">
                    <div className="left empresa relative" >
                        <img src={logo} alt="login" className="absolute w-[200px] bottom-[150px] left-[50px]" />
                        <h1>Cliente Empresa</h1>
                        <p className="">Acesse o seu portal de empresa e faça a gestão dos seus serviços</p>
                    </div>
                    <div className="right bg-[#222] relative">
                        <form onSubmit={handleSubmit(loginCoporative)} className="login_form empresa">
                            <div className="header_form">
                                <h1 className="text-white">Entre na sua conta</h1>
                            </div>
                            <div className="body_form empresa">
                                <div className="input_field empresa">
                                    <label id="LLMN" htmlFor="membership_number" style={{ color: errors.client_ref ? "red" : "#fff" }}>Telefone ou Email *</label>
                                    <input
                                        placeholder="Insira o Nº de Telefone ou Email"
                                        style={{ borderColor: errors.client_ref ? "red" : "#333" }}
                                        {...register('client_ref')}
                                    />
                                    {errors.client_ref && <p className="text-[#ff0000] w-full text-left">{errors.client_ref.message}</p>}
                                </div>
                                <div className="input_field empresa">
                                    <label id="LLCA" htmlFor="membership_number" style={{ color: errors.password ? "red" : "#fff" }}>Senha *</label>
                                    <input
                                        type="password"
                                        placeholder="Insira a sua senha "
                                        style={{ borderColor: errors.password ? "red" : "#333" }}
                                        {...register('password')}
                                    />
                                    {errors.password && <p className="text-[#ff0000] w-full text-left">{errors.password.message}</p>}
                                </div>
                                <div className="w-full flex items-center justify-end mb-3">
                                    <Link to={"/cliente/recuperacao"} className="text-[#7b8a9c] text-[0.9rem]">Esqueci a minha senha</Link>
                                </div>
                                <button type="submit" disabled={isLoading} className="button_auth" style={{ background: 'background: linear-gradient(180deg, #2160ad, #082140);' }}>
                                    {isLoading ? <LoaderComponent color="#fff" /> : "Entrar"}
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
                        <p className="basic_text not_found_footer text-gray-400">
                            © 2024 ANGOHOST, LDA. Todos os direitos reservados
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}