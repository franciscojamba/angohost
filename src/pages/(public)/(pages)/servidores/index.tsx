import "./style-servidores.css"
import { AccordionPetrohost } from "../../components/Accordion/Accordion"
import { Footer } from "../../components/footer"
import NavbarFull from "../../components/nav/nav"
import { LOGOBRANCO } from "../../../../utils/logos"
import { FaServer } from "react-icons/fa6";
import { Helmet } from "react-helmet"
import { PricingCard } from "../../components/card-plano"

const Servidores = () => {

    const planos = [
        {
            title: 'VPS R1 - SSD',
            price: '8900',
            descricao: "Seja parceiro da Petrohost",
            cicle: 'kz/ano',
            link_plano: "https://cliente.petrohost.ao/pedindo-agora/server/154",
            features: [
                '2 Cores',
                '2 GB RAM',
                'Email ilimitado',
                '30 GB SSD',
                'Ilimitado',
                '1 IP',
            ],
            plano_m: false

        },
        {
            title: 'VPS RH2 - SSD',
            price: '19500',
            cicle: 'kz/ano',
            descricao: "Suba de nível com mais potência e recursos aprimorados",
            link_plano: "https://cliente.petrohost.ao/pedindo-agora/server/155",
            features: [
                '4 Cores',
                '4 GB RAM',
                'Email ilimitado',
                '60 GB SSD',
                'Ilimitado',
                '1 IP',
            ],
            plano_m: true
        },
        {
            title: 'VPS RH4 - SSD',
            price: '93600',
            cicle: 'kz/ano',
            descricao: "Suba de nível com mais potência e recursos aprimorados",
            link_plano: "https://cliente.petrohost.ao/pedindo-agora/server/156",
            features: [
                '8 Cores',
                '12 GB RAM',
                'Email ilimitado',
                '2000 GB SSD',
                'Ilimitado',
                '1 IP',
            ],
            plano_m: false
        },

    ];



    return (
        <>
            <Helmet>
                <title>Servidores VPS super rápido equipado com SSD</title>
            </Helmet>
            <NavbarFull logo={LOGOBRANCO} color="#ffff" />
            <div>
                <div className="container-hospedagem">
                    <div className="container-hospedagem-wordpress" >
                        <div className="content-hospedagem-wordpress-left">
                            <div className="content-info" >
                                <h3>SERVIDORES</h3>
                                <h2>Desempenho e Flexibilidade com nossos Servidores VPS!</h2>
                                <p>Hospedagem com Uptime Garantido de 99,9% e Suporte Especializado 24/7!</p>
                            </div>

                            <div className="planos-button-flex" >
                                <a href={"#planos-vps"} style={{ textDecoration: "none" }} className="plans-button">Ver planos</a>

                                <div className="price-info">
                                    <span>a partir de </span>
                                    <span className="price">8.900 kz/ mês</span>

                                </div>

                            </div>
                            {/* <a href="#blog-petrohost" className="why-hostgator">Por que escolher a Petrohost</a> */}
                        </div>
                        <div className="content-hospedagem-wordpress-rigth" >
                            <FaServer color="#fff" size={200} />
                        </div>
                    </div>


                </div>
            </div>
            <div id="planos-vps" className="plano-title"  >
                <h2>Hospedagem VPS</h2>
                <p>Aproveite armazenamento ilimitado, sites ilimitados e transferência de dados sem limites. Desempenho superior e flexibilidade total para o seu negócio!".</p>
            </div>
            <div className="planos-word-press" >
                {
                    planos.map((plan, index) => (
                        <PricingCard link={()=>{}} key={index} cicle={plan.cicle} descontos={0} descricao={plan.descricao} id={index.toString()} planoPopular={plan.plano_m} preco={parseInt(plan.price)} precoComDesconto={parseInt(plan.price) - 1000} recursos={plan.features} titulo={plan.title} info={"lorem ipsum dolor teste beta"} />
                    ))}

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


export default Servidores;