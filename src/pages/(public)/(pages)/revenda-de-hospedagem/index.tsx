import "./hospedagem-wordpress.css"
import { AccordionPetrohost } from "../../components/Accordion/Accordion"
import { Footer } from "../../components/footer"
import NavbarFull from "../../components/nav/nav"
import { LOGOBRANCO } from "../../../../utils/logos"
import { FaCpanel } from "react-icons/fa6";
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import { PricingCard } from "../../components/card-plano"

const RevendaHospedangem = () => {

    const planos = [
        {
            title: 'RH 3',
            price: '585600',
            descricao: "Seja parceiro da Petrohost",
            cicle: '/ano',
            link_plano: "https://cliente.petrohost.ao/pedindo-agora/hosting/142",
            features: [
                '500GB SSD',
                'Crie até 85 cPanel/clientes',
                'Email ilimitado',
                'Crie seus pacotes personalizados',
                'Migração grátis',
                'Suporte 24/7/365 via chat e email',
                'Inclui WHMCS'
            ],
            plano_m: false

        },
        {
            title: 'RH 2',
            price: '318000',
            cicle: '/ano',
            descricao: "Suba de nível com mais potência e recursos aprimorados",
            link_plano: "https://cliente.petrohost.ao/pedindo-agora/hosting/141",
            features: [
                '300GB SSD',
                'Crie até 50 cPanel/clientes',
                'Email ilimitado',
                'Crie seus pacotes personalizados',
                'Migração grátis',
                'Suporte 24/7/365 via chat e email',
                'Inclui WHMCS'
            ],
            plano_m: true
        },
        {
            title: 'RH 1',
            price: '186000',
            cicle: '/ano',
            descricao: "Desfrute de desempenho otimizado e recursos poderosos",
            link_plano: "https://cliente.petrohost.ao/pedindo-agora/hosting/140",
            features: [
                '100GB SSD',
                'Crie até 40 cPanel/clientes',
                'Email ilimitado',
                'Crie seus pacotes personalizados',
                'Migração grátis',
                'Suporte 24/7/365 via chat e email'
            ],
            plano_m: false
        },
    ];

    return (
        <>
            <Helmet>
                <title>Revenda de Hospedagem - Revenda de Hospedagem com Recurso inovadoras.</title>
            </Helmet>
            <NavbarFull logo={LOGOBRANCO} color="#ffff" />
            <div>
                <div className="container-hospedagem">
                    <div className="container-hospedagem-wordpress" >
                        <div className="content-hospedagem-wordpress-left">
                            <div className="content-info" >
                                <h3>Revenda de Hospedagem</h3>
                                <h2>Conheça a Revenda de Hospedagem da Angohost </h2>
                                <p>com painel de controle personalizados, administração de clientes e cobranças</p>
                            </div>

                            <div className="planos-button-flex" >
                                <Link to={"/hospedagem-de-sites"} className="plans-button">Ver planos</Link>

                                <div className="price-info">
                                    <span>a partir de </span>
                                    <span className="price">186.000 kz/anual*</span>

                                </div>

                            </div>
                            {/* <a href="#blog-petrohost" className="why-hostgator">Por que escolher a Petrohost</a> */}
                        </div>
                        <div className="content-hospedagem-wordpress-rigth" >
                            <FaCpanel color="#fff" size={200} />
                        </div>
                    </div>


                </div>
            </div>
            <div className="plano-title"  >
                <h2>Revenda de Hospedagem</h2>
                <p>Aproveite armazenamento ilimitado, sites ilimitados e transferência de dados sem limites.</p>
            </div>
            <div className="planos-word-press" >
                {
                    planos.map((plan, index) => (
                        <PricingCard link={()=>{}} key={index} cicle={plan.cicle} descontos={0} descricao={plan.descricao} id={index.toString()} planoPopular={plan.plano_m} preco={parseInt(plan.price)} precoComDesconto={parseInt(plan.price) - 1000} recursos={plan.features} titulo={plan.title} info={"lorem ipsum dolor teste beta"}  />
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


export default RevendaHospedangem;