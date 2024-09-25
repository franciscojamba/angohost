import { RiStarSFill } from "react-icons/ri";
import dominio_icon from "../../../../assets/svgs/dominio.svg"
import "./dominio.css"
import ModalYoutube from "../../components/modals/modal-youtube";
import { useEffect, useState } from "react";
import { AccordionPetrohost } from "../../components/Accordion/Accordion";
import { Footer } from "../../components/footer";
import NavbarFull from "../../components/nav/nav";
import { LOGOBRANCO } from "../../../../utils/logos";
import { Helmet } from "react-helmet";
import useUtils from "../../../../utils/useutils";
import usePayStore from "../../../../contexts/payStore";
import CheckDomainAvailableForm from "../comprar-servico/components/checkDomainAvailableForm";

export const PagesDominios = () => {
    const [m, setM] = useState(false)
    const { formatMoney } = useUtils()

    const { domainExtensions, actions: {
        getDomainExtensions,
    } } = usePayStore()

    useEffect(() => {
        getDomainExtensions()
    }, [])

    return (
        <>
            <Helmet>
                <title>Domínios - Registro de domínio apartir de 5.0000kz</title>
            </Helmet>

            <NavbarFull logo={LOGOBRANCO} color="#ffff" />
            <div className="container-dominio">
                <header className="header-dominio">
                    <div className="header-dominio-start" >
                        <h1>Registro de domínio com até 25% OFF</h1>
                        <p>Registre seu domínio .ao por 1 anos e leve o primeiro ano por <span className="old-price">50.000,00 kz</span> 25.000,00 kz</p>
                    </div>
                </header>

                <div className="search-bar-dominio-center" >
                    <CheckDomainAvailableForm />
                </div>
                <div className="domain-options-center" >
                    <section className="domain-options">
                        <div className="domain-options-title"  >
                            <h2>Conheça os principais domínios para site:</h2>
                        </div>
                        {domainExtensions.slice(0, 4).map((domain, _index) => (
                            <div className="domain-option" key={_index}>
                                <span>{domain.tipo}</span><span className="price-domino">{formatMoney(domain.preco)}</span>
                            </div>
                        ))}
                    </section>
                </div>
            </div>
            <div className="container-afinal" >

                <div className="container-afinal-flex" >
                    <div className="container-afinal-left"  >
                        <div className="container-afinal-left-info" >
                            <h2>Afinal, por que registrar um domínio?</h2>
                            <p>Assim como no mundo offline, ter um bom endereço é muito importante para os negócios. Um bom nome de domínio garante que seus clientes encontrem sua empresa com mais facilidade na internet. Veja outras vantagens de registrar um domínio:
                            </p>
                            <div className="container-afinal-left-info-list"  >
                                <p><RiStarSFill color="#28b16c" />
                                    Aumenta a credibilidade do nome da sua empresa</p>
                                <p>
                                    <RiStarSFill color="#28b16c" />
                                    Unifica os pontos de contato da sua marca</p>
                                <p>
                                    <RiStarSFill color="#28b16c" />
                                    Sua empresa, loja virtual ou blog online 24h por dia</p>
                            </div>
                        </div>
                    </div>
                    <div className="container-afinal-rigth" >
                        <div onClick={() => setM(true)} className="oque-e-dominio"  >
                            <img src={dominio_icon} alt="" />
                        </div>
                        <ModalYoutube isOpen={m} onClose={() => setM(false)} />
                    </div>
                </div>
            </div>
            <div className="container-acordion" >
                <div className="container-acordion-width" >
                    <AccordionPetrohost />
                </div>
            </div>
            <Footer />
            
        </>
    )
}