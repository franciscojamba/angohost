import "./google-seo-sevices.css"
import { AccordionPetrohost } from "../../components/Accordion/Accordion"
import { Footer } from "../../components/footer"
import NavbarFull from "../../components/nav/nav"
import { LOGOBRANCO } from "../../../../utils/logos"
import { FaGoogle } from "react-icons/fa6";
import { Link } from "react-router-dom"

import PlanoGoogleSeo from "../../components/plano-google-seo/plano-hospedagem-wordpress"

const GoogleSEOServices = () => {

  const planos = [
    {
        title: 'Positive SSL Wildcard',
        price: '289.910 kz/anual',
        descricao:"Tudo que você precisa para criar seu site",
        link_plano:"https://cliente.petrohost.ao/pedindo-agora/special/145",
        features: [
          'Validação do Domínio',
    'Sub-domínios ilimitados',
    'Licenças de servidores adicionais grátis',
    'Emitido até 2 anos'
        ],
        plano_m:true

    },
    {
        title: 'EV SSL',
        price: '478.000 kz/anual',
        descricao:"Suba de nível com mais potência e recursos aprimorados",
        link_plano:"https://cliente.petrohost.ao/pedindo-agora/special/144",
        features: [
           'Extended-validation',
    '1 domínio',
    'Licenças de servidores adicionais grátis',
    'Trusted Green address bar',
   
        ],
        plano_m:false
    },
    {
        title: 'Comodo SSL',
        price: '176.990 kz/anual',
        descricao:"Desfrute de desempenho otimizado e recursos poderosos",
        link_plano:"https://cliente.petrohost.ao/pedindo-agora/hosting/162",
        features: [
            'Validação do Domínio',
    '1 domínio',
    'Licenças de servidores adicionais grátis',
    'Emitido até 2 anos',

        ],
        plano_m:false
    },
];



  return (
    <>

      <NavbarFull logo={LOGOBRANCO} color="#ffff" />
      <div>
        <div className="container-hospedagem">
          <div className="container-hospedagem-wordpress" >
            <div className="content-hospedagem-wordpress-left">
              <div className="content-info" >
                <h3>Google SEO Services</h3>
                <h2>Alcance novos patamares no Google com os serviços de SEO da ANGOHOST para sites WordPress.</h2>
                <p> Melhore seu ranking, aumente o tráfego e obtenha mais visibilidade online.</p>
              </div>

              <div className="planos-button-flex" >
                <Link to={"/hospedagem-de-sites"}  className="plans-button">Ver planos</Link>

                <div className="price-info">
                  <span>a partir de </span>
                  <span className="price">47.990,00 kz/anual*</span>
                
                </div>

              </div>
              {/* <a href="#blog-petrohost" className="why-hostgator">Por que escolher a Petrohost</a> */}
            </div>
            <div className="content-hospedagem-wordpress-rigth" >
             <FaGoogle color="#fff" size={200} />
            </div>
          </div>


        </div>
      </div>
      <div className="plano-title"  >
                    <h2>Otimize a visibilidade do seu site com nossos serviços de SEO para Google.</h2>
                    <p>Aproveite técnicas avançadas, aumento de tráfego e melhores rankings nos resultados de busca.</p>
      </div>
      <div className="planos-word-press" >
          {
          planos.map((plan, index) => (
            <PlanoGoogleSeo key={index} {...plan} />
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


export default GoogleSEOServices;