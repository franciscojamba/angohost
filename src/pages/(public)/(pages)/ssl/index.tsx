import "./style.css"
import { AccordionPetrohost } from "../../components/Accordion/Accordion"
import { Footer } from "../../components/footer"
import NavbarFull from "../../components/nav/nav"
import { LOGOBRANCO } from "../../../../utils/logos"
import { FaLock } from "react-icons/fa6";
import { Link } from "react-router-dom"
import { PricingCard } from "../../components/card-plano"
import { Helmet } from "react-helmet"

const SSL = () => {

    const planos = [
        {
            title: 'Positive SSL Wildcard',
            price: '289910',
            cicle: '/ano',
            descricao: "Tudo que você precisa para criar seu site",
            link_plano: "https://cliente.petrohost.ao/pedindo-agora/special/145",
            features: [
                'Validação do Domínio',
                'Sub-domínios ilimitados',
                'Licenças de servidores adicionais grátis',
                'Emitido até 2 anos'
            ],
            plano_m: true

        },
        {
            title: 'EV SSL',
            price: '478000',
            cicle: '/ano',
            descricao: "Suba de nível com mais potência e recursos aprimorados",
            link_plano: "https://cliente.petrohost.ao/pedindo-agora/special/144",
            features: [
                'Extended-validation',
                '1 domínio',
                'Licenças de servidores adicionais grátis',
                'Trusted Green address bar',

            ],
            plano_m: false
        },
        {
            title: 'Comodo SSL',
            price: '176990',
            cicle: '/ano',
            descricao: "Desfrute de desempenho otimizado e recursos poderosos",
            link_plano: "https://cliente.petrohost.ao/pedindo-agora/hosting/162",
            features: [
                'Validação do Domínio',
                '1 domínio',
                'Licenças de servidores adicionais grátis',
                'Emitido até 2 anos',

            ],
            plano_m: false
        },
    ];



    return (
        <>
            <Helmet>
                <title>Certificado SSL - De mais confianças aos seus clientes e visitantes</title>
            </Helmet>

            <NavbarFull logo={LOGOBRANCO} color="#ffff" />
            <div>
                <div className="container-hospedagem">
                    <div className="container-hospedagem-wordpress" >
                        <div className="content-hospedagem-wordpress-left">
                            <div className="content-info" >
                                <h3>SSL</h3>
                                <h2>Segurança Online com Certificado SSL da Angohost</h2>
                                <p>Não deixe seu site vulnerável! Adquira já o seu Certificado SSL com a Angohost e proteja-se contra ameaças online.</p>
                            </div>

                            <div className="planos-button-flex" >
                                <Link to={"/hospedagem-de-sites"} className="plans-button">Ver planos</Link>

                                <div className="price-info">
                                    <span>a partir de </span>
                                    <span className="price">176.990,00 kz/anual*</span>

                                </div>

                            </div>
                            {/* <a href="#blog-petrohost" className="why-hostgator">Por que escolher a Petrohost</a> */}
                        </div>
                        <div className="content-hospedagem-wordpress-rigth" >
                            <FaLock color="#fff" size={200} />
                        </div>
                    </div>


                </div>
            </div>
            <div className="plano-title"  >
                <h2>Não deixe seu site vulnerável! Adquira já o seu Certificado SSL com a Angohost</h2>
                <p>E proteja-se contra ameaças online.</p>
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


export default SSL;