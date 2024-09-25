import "./hospedagem-windows.css"
import { AccordionPetrohost } from "../../components/Accordion/Accordion"
import { Footer } from "../../components/footer"
import NavbarFull from "../../components/nav/nav"
import { LOGOBRANCO } from "../../../../utils/logos"
import { FaWindows } from "react-icons/fa";
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import { PricingCard } from "../../components/card-plano"

const HospedagemWindows = () => {

    const planos = [
        {
            title: 'Plano W3',
            price: '87.990,00',
            cicle: 'kz/ano',
            descricao: "Tudo que você precisa para criar seu site",
            link_plano: "https://cliente.petrohost.ao/pedindo-agora/hosting/150",
            features: [
                '5 Domínios',
                'Certificado SSL grátis',
                'Espaço em disco ilimitado',
                'Transferência de dados ilimitada',
                'Contas de e-mail ilimitadas',
                'Plesk grátis',
            ],
            plano_m: true

        },
        {
            title: 'Plano W2',
            price: '149.440,00',
            cicle: 'kz/ano',
            descricao: "Suba de nível com mais potência e recursos aprimorados",
            link_plano: "https://cliente.petrohost.ao/pedindo-agora/hosting/151",
            features: [
                '10 Domínios',
                'Certificado SSL grátis',
                'Espaço em disco ilimitado',
                'Transferência de dados ilimitada',
                'Contas de e-mail ilimitadas',
                'Plesk grátis',
            ],
            plano_m: false
        },
        {
            title: 'Plano W1',
            price: '69.990,00',
            cicle: 'kz/ano',
            descricao: "Desfrute de desempenho otimizado e recursos poderosos",
            link_plano: "https://cliente.petrohost.ao/pedindo-agora/hosting/152",
            features: [
                'Domínio único',
                'Certificado SSL grátis',
                'Espaço em disco ilimitado',
                'Transferência de dados ilimitada',
                'Contas de e-mail ilimitadas',
                'Plesk grátis',
            ],
            plano_m: false
        },
    ];

    return (
        <>

            <Helmet>
                <title>Hospedagem De Sites -  Hospedagem De Sites com recursos para qualquer Site</title>
            </Helmet>
            <NavbarFull logo={LOGOBRANCO} color="#ffff" />
            <div className="container-hospedagem">
                <div className="container-hospedagem-wordpress"  >
                    <div className="content-hospedagem-wordpress-left">
                        <div className="content-info" >
                            <h3>HOSPEDAGEM DE WINDOWS</h3>
                            <h2>Dê o primeiro passo para o sucesso com a Hospedagem Windows</h2>
                            <p>& conquiste seus objetivos sem limites!</p>
                        </div>
                        <div className="planos-button-flex" >
                            <Link to={"/hospedagem-de-sites"} className="plans-button">Ver planos</Link>
                            <div className="price-info">
                                <span>a partir de </span>
                                <span className="price">69.990,00 kz/anual*</span>
                                <span> Planos com até 5 domínios grátis</span>
                            </div>

                        </div>
                    </div>
                    <div className="content-hospedagem-wordpress-rigth" >
                        <FaWindows color="#fff" size={200} />
                    </div>
                </div>
            </div>
            <div className="planos-hospedagems-windows" >
                <div className="plano-title"  >
                    <h2>Escolhe o seu pacote de Hospedagem</h2>
                    <p>Pacotes de hospedogem com recursos para suportor qualquer tipo de website</p>
                </div>

                <div className="planos-hospedagems-windows-cards" >
                    {planos.map((plan, index) => (
                        <PricingCard link={()=>{console.log("Teste")}} key={index} cicle={plan.cicle} descontos={0} descricao={plan.descricao} id={index.toString()} planoPopular={plan.plano_m} preco={parseInt(plan.price)} precoComDesconto={parseInt(plan.price) - 1000} recursos={plan.features} titulo={plan.title} info={"lorem ipsum dolor teste beta"} />
                    ))}
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


export default HospedagemWindows;