import { useEffect, useRef, useState } from "react";
import "../../../styles/particularLogin.css";
import "../../../styles/authentication.css";
import { TailSpin } from 'react-loader-spinner'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from '../../../../../../public/PETROHOST-02.png'
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Authentication() {

    const [loading] = useState(false);
    const router = useNavigate()

    const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
    const [currentInput, setCurrentInput] = useState(0);


    async function resendEmail() {
        //
    }

    const focusNextInput = () => {
        const nextInput = inputRefs.current[currentInput + 1];
        if (nextInput) {
            nextInput.focus();
        }
    };

    const focusPreviousInput = () => {
        const previousInput = inputRefs.current[currentInput - 1];
        if (previousInput) {
            previousInput.focus();
        }
    };

    const handleInputChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(index)
        if (e.target.value.length > 0) {
            setCurrentInput((prev) => prev + 1);
            focusNextInput();
        } else {
            setCurrentInput((prev) => prev - 1);
            focusPreviousInput();
        }

        // Verifica se todos os campos estão preenchidos
        if (currentInput === 5) {
            const values = inputRefs.current.map((ref) => ref?.value || "").join("");
            alert('bateu' + values)
        }
    };

    useEffect(() => {
        const tokenEmpresa = Cookies.get('tokenEmpresa')
        const tokenParticular = Cookies.get('tokenParticular')
        if (!tokenEmpresa && !tokenParticular) {
            router("/cliente/painel")
        }
    }, [router])

    return (
        <div className="home_main empresa particular auth">
            <div className="home_body">
                <div className="left empresa auth">
                    <img src={logo} alt="login" className="absolute w-[200px] bottom-[150px] left-[50px]" />
                    <h1>Autenticação de dois fatores</h1>
                    <p>Enviamos um código de verificação para a sua caixa de entrada.</p>
                </div>
                <div className="right bg-[#edf3f8]">
                    <form className="login_form">
                        <div className="header_form">
                            <h1>Autenticação de dois fatores</h1>
                            <p>
                                O código de verificação foi enviado para o seu telefone, introduza-o abaixo para concluir a autenticação. <Link to="/" onClick={(e) => {
                                    e.preventDefault()
                                    router(-1)
                                }}>Voltar</Link>
                            </p>
                        </div>
                        <div className="body_form">
                            <div className="fragments_container">
                                {[1, 2, 3, 4, 5, 6].map((index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        maxLength={1}
                                        id={`value${index}`}
                                        className="phone_fragment"
                                        ref={(el) => {
                                            if (el) {
                                                inputRefs.current[index - 1] = el;
                                            }
                                        }}
                                        onChange={(e) => handleInputChange(index - 1, e)}
                                    />
                                ))}
                            </div>
                            <button
                                type="button"
                                disabled={loading || currentInput !== 6}
                                className="button_auth"

                            >
                                {loading ? (
                                    <TailSpin
                                        height="25"
                                        width="25"
                                        color="#fff"
                                        ariaLabel="tail-spin-loading"
                                        radius="1"
                                        visible={true}
                                    />
                                ) : (
                                    <>Entrar <FaArrowRightLong style={{ marginLeft: "10px" }} /></>
                                )}
                            </button>
                            <div className="terms">
                                {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                                <p style={{ color: "var(--color-focus)", textDecoration: "underline", cursor: "pointer" }} onClick={resendEmail}>Reenviar código</p>
                            </div>
                        </div>
                    </form>
                    <p className="basic_text not_found_footer">
                        © 2024 Banco de Fomento Angola
                    </p>
                </div>
            </div>
        </div>
    );
}