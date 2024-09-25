import { Link } from "react-router-dom"
import { AccordionPetrohost } from "../../components/Accordion/Accordion"
import { Footer } from "../../components/footer"
import NavbarFull from "../../components/nav/nav"
import { ListaDePlano } from "../../components/planos"
import { LOGOBRANCO } from "../../../../utils/logos"
import "./hospedagem-de-site.css"
import { FaCpanel } from "react-icons/fa6"
import { Helmet } from "react-helmet"

export const HospedagemDeSite = () => {

    return (
        <> <Helmet>
            <title>Hospedagem De Sites -  Hospedagem De Sites com recursos para qualquer Site</title>
            <h1>Hospedagem De Sites -  Hospedagem De Sites com recursos para qualquer Site</h1>
        </Helmet>
            <NavbarFull logo={LOGOBRANCO} color="#ffff" />
            <div className="container-hospedagem">
                <div className="container-hospedagem-wordpress"  >
                    <div className="content-hospedagem-wordpress-left">
                        <div className="content-info" >
                            <h3>HOSPEDAGEM DE SITE</h3>
                            <h2>Hospedagem de site especialista que cresce com você</h2>
                            <p>Todas as facilidades para transformar sua ideia em um projeto online de sucesso</p>
                        </div>
                        <div className="planos-button-flex" >
                            <Link to={"/hospedagem-de-sites"} style={{ textDecoration: "none" }} className="plans-button">Ver planos</Link>
                            <div className="price-info">
                                <span>a partir de </span>
                                <span className="price">55.300,00 kz/anual*</span>
                                <span> Planos com até 1 sites grátis</span>
                            </div>

                        </div>
                    </div>
                    <div className="content-hospedagem-wordpress-rigth" >
                        <FaCpanel color="#fff" size={300} />
                    </div>
                </div>
            </div>

            <ListaDePlano />
            <div className="container-acordion" >
                <div className="container-acordion-width" >
                    <AccordionPetrohost />
                </div>
            </div>
            <Footer />

        </>

    )
}