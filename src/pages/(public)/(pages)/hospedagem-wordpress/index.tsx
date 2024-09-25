import "./hospedagem-wordpress.css"
import { AccordionPetrohost } from "../../components/Accordion/Accordion"
import { Footer } from "../../components/footer"
import NavbarFull from "../../components/nav/nav"
import { LOGOBRANCO } from "../../../../utils/logos"
import { FaWordpressSimple } from "react-icons/fa6";
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import { PricingCard } from "../../components/card-plano"

const HospedagemWordPress = () => {

    const planos = [
        {
            title: 'WP 1',
            price: '47990',
            cicle: 'kz/ano',
            descricao: "Tudo que você precisa para criar seu site",
            link_plano: "https://cliente.petrohost.ao/pedindo-agora/hosting/160",
            features: [
                '10GB Espaço SSD',
                'SSL ilimitado grátis',
                '15 contas de e-mail (5 GB cada)',
                '1 Site',
                '1 usuário FTP',
                '10 bancos de dados',
                'Backup diário',
                'Criador de Sites grátis',
                'Instalador de aplicativos',
                'Restore mensal',
                'Transferência ilimitada'
            ],
            plano_m: false

        },
        {
            title: 'WP2',
            price: '68400',
            cicle: 'kz/ano',
            descricao: "Suba de nível com mais potência e recursos aprimorados",
            link_plano: "https://cliente.petrohost.ao/pedindo-agora/hosting/161",
            features: [
                '20GB Espaço SSD',
                'SSL ilimitado grátis',
                '25 contas de e-mail (5 GB cada)',
                '2 Site',
                '4 usuário FTP',
                '10 bancos de dados',
                'Backup diário',
                'Criador de Sites grátis',
                'Instalador de aplicativos',
                'Restore mensal',
                'Transferência ilimitada'
            ],
            plano_m: true
        },
        {
            title: 'Plano W1',
            price: '99600',
            cicle: 'kz/ano',
            descricao: "Desfrute de desempenho otimizado e recursos poderosos",
            link_plano: "https://cliente.petrohost.ao/pedindo-agora/hosting/162",
            features: [
                '35GB Espaço SSD',
                'SSL ilimitado grátis',
                '30 contas de e-mail (5 GB cada)',
                '4 Sites',
                '10 usuários FTP',
                '10 bancos de dados',
                'Backup diário',
                'Criador de Sites grátis',
                'Instalador de aplicativos',
                'Restore mensal',
                'Transferência ilimitada'
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
            <div>
                <div className="container-hospedagem">
                    <div className="container-hospedagem-wordpress" >
                        <div className="content-hospedagem-wordpress-left">
                            <div className="content-info" >
                                <h3>HOSPEDAGEM DE WORDPRESS</h3>
                                <h2>Seu site WordPress voando alto com a ANGOHOST</h2>
                                <p>Liberdade para criar: explore todo o potencial do seu WordPress com a gente.</p>
                            </div>

                            <div className="planos-button-flex" >
                                <Link to={"/hospedagem-de-sites"} className="plans-button">Ver planos</Link>

                                <div className="price-info">
                                    <span>a partir de </span>
                                    <span className="price">47.990,00 kz/anual*</span>

                                </div>

                            </div>
                            {/* <a href="#blog-petrohost" className="why-hostgator">Por que escolher a Petrohost</a> */}
                        </div>
                        <div className="content-hospedagem-wordpress-rigth" >
                            <FaWordpressSimple color="#fff" size={200} />
                        </div>
                    </div>


                </div>
            </div>
            <div className="plano-title"  >
                <h2>Torne seu site mais atrativo com nossa Hospedagem WordPress.</h2>
                <p>Aproveite armazenamento ilimitado, sites ilimitados e transferência de dados sem limites.</p>
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


export default HospedagemWordPress;