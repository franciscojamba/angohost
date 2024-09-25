import "./style.css"
import { FaWhatsapp } from "react-icons/fa";
import { CiChat1 } from "react-icons/ci";
import { LogoAzul } from "../logo-azul";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { SlEarphonesAlt } from "react-icons/sl";
import { Link } from "react-router-dom";

export const Footer = () => {

    const data = new Date()

    return (
        <>
            <div className="container-footer-foo">
                <div className="newsletter-container">
                    <div className="newsletter-text">
                        <h2>Receba nossas novidades</h2>
                        <p>Fique por dentro dos últimos conteúdos que preparamos para você!</p>
                    </div>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Digite seu melhor email" />
                        <button>Assinar</button>
                    </div>
                </div>

                <div className="content-flex" >
                    <div className="content-footer">

                        <div className="column">
                            <h3>Contrate sua Hospedagem</h3>
                            <ul>
                                <li>Hospedagem de Sites</li>
                                <li>Hospedagem WordPress</li>
                                <li>Hospedagem Cloud</li>
                                <li>Hospedagem Java</li>
                                <li>Hospedagem NodeJS</li>
                                <li>Revenda de Hospedagem</li>
                                <li>Migre para a Angohost</li>
                                <li>Tenha um negócio digital</li>
                            </ul>
                            <h3>Fale com a gente</h3>
                            <ul>
                                <li>Atendimento via Chat</li>
                                <li>Canais de Atendimento</li>
                            </ul>
                        </div>
                        <div className="column">
                            <h3>Soluções de Email</h3>
                            <ul>
                                <li>Email Profissional</li>
                                <li>SMTP Transacional</li>
                            </ul>
                            <h3>Ferramentas e Adicionais</h3>
                            <ul>
                                <li>Registro de domínios</li>
                                <li>Transferência de domínio</li>
                                <li>Criador de Sites Grátis</li>
                                <li>SEO Certo</li>
                                <li>Certificado SSL</li>
                            </ul>
                        </div>
                        <div className="column">
                            <h3>Projeto na Nuvem</h3>
                            <ul>
                                <li>Hospedagem Cloud</li>
                                <li>Servidor VPS</li>
                                <li>Migre para a Nuvem</li>
                            </ul>
                            <h3>Seja um Angohoster er</h3>
                            <ul>
                                <li>Trabalhe conosco</li>
                            </ul>
                            <h3>Conteúdo para Evoluir</h3>
                            <ul>
                                <li>Blog</li>
                                <li>Materiais Educativos</li>
                                <li>Conteúdos em Vídeo</li>
                            </ul>
                        </div>
                    </div>

                    <div className="top-bar">

                        <div className="top-bar-contactos" >

                            <SlEarphonesAlt color="#fff" size={65} fontWeight={500} />


                            <div className="top-bar-call">
                                <a href="tel:+244942090108" style={{ fontWeight: 600, fontSize: 20, color: "#fff" }} >+244 942 090 108</a>
                                <a href="tel:+244226430401" style={{ fontWeight: 600, fontSize: 20, color: "#fff" }} >+244 226 430 401</a>
                            </div>

                        </div>
                        <div className="content-fale-connosco" >

                            <div>
                                <p style={{ fontWeight: 300, color: "#fff" }}  >Se tiver dúvidas ou precisar de assistência, fale conosco! Nosso suporte está disponível 24 horas por dia, 7 dias por semana.</p>
                            </div>
                        </div>
                        <div className="contact-buttons">
                            <a href="#" >
                                <CiChat1 />
                                <span> Falar via Chat</span>
                            </a >

                            <a href="#" >
                                <FaWhatsapp />
                                <span>WhatsApp</span>
                            </a >
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="footer-left">
                        <LogoAzul />
                    </div>

                    <div className="footer-right">
                        <a href="//www.dmca.com/Protection/Status.aspx?ID=ef746d01-45b4-4696-a244-c48a443a92d1" title="DMCA.com Protection Status" className="dmca-badge"> <img src="https://images.dmca.com/Badges/dmca-badge-w100-5x1-01.png?ID=ef746d01-45b4-4696-a244-c48a443a92d1" alt="DMCA.com Protection Status" /></a>

                        <a href="https://www.facebook.com/angohost">
                            <FaFacebookSquare size={32} color="#0e3f7b" />
                        </a>
                        <a href="https://www.instagram.com/angohost/">
                            <FaInstagram size={32} color="#0e3f7b" />
                        </a>
                        <a href="https://www.youtube.com/@angohost">
                            <FaYoutube size={32} color="#0e3f7b" />
                        </a>
                        <a href="https://www.linkedin.com/company/angohost/">
                            <FaLinkedin size={32} color="#0e3f7b" />
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="copy"  >
                        <a href="angohost.ao" >ANGOHOST  Copyright © 2015 - {data.getFullYear()}</a>
                    </div>
                    <div className="contrato-politica" >
                        <Link to={"/contratos-e-políticas"} >Contratos e Políticas</Link>
                    </div>
                </div>
            </div>
        </>
    )
}