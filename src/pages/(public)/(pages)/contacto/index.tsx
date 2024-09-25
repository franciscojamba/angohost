import "./style.css"
import NavbarFull from "../../components/nav/nav";
import { LOGOBRANCO } from "../../../../utils/logos";
import { Footer } from "../../components/footer";
import ContactOptions from "./components/ContactOptions/contact-options";
import SocialConnect from "./components/SocialConnect";
import Location from "./components/Location";
import SupportContact from "./components/SupportContact";
import { Helmet } from "react-helmet";

export default function Contacto() {

    return (

        <>
            <Helmet>
                <title>Suporte - Entre em contacto conosco</title>
                <h1>Suporte - Entre em contacto conosco</h1>
            </Helmet>
            <div className="container-contacto-petrohost"  >
                <NavbarFull logo={LOGOBRANCO} color="#FFF" />
                {/* <div className="container-contacto-petrohost-banner" >
                    <div className="container-contacto-petrohost-banner-flex" >
                        <div className="container-contacto-petrohost-banner-info-left">
                                <h2 style={{color:"#fff",fontSize:32,fontWeight:100}}  >CONTATE NOSSA EQUIPE DE SUPORTE</h2>
                                <h3 style={{color:"#fff",fontSize:46,width:"68%",marginBottom:20}} >
                                Estamos aqui 24 horas por dia, 7 dias por semana
                                </h3>
               
                                <p style={{color:"#fff",fontSize:18,width:"80%",fontWeight:300}} >Entre em contato com suas dúvidas, preocupações e desafios.
                                 Ou apenas para dizer oi. Ficaremos felizes em conversar e ajudar.
                                 </p>
                            <div className="container-contacto-petrohost-banner-info" >

                                 <a style={{color:"#fff",padding:"20px 70px",backgroundColor:"#121212",fontWeight:"bold"}}   >Conversar Agora</a>
                                 <p  style={{color:"#fff"}} >Ligue agora para <a  style={{color:"#fff"}}  href="tel:+244923000143" >923000143</a> </p>
                                 <p>Ligue agora para <a  style={{color:"#fff"}} href="tel:+244923000143" >923000143</a> </p>
                                 <p>Taxas de chamadas internacionais podem ser aplicadas</p>
                            </div>
                        </div>
                        <div className="container-contacto-petrohost-banner-info-rigth" >
                            <div className="container-contacto-petrohost-banner-info-rigth-img" >
                                <img src="https://www.verangola.net/va/images/cms-image-000039458.jpg" />
                            </div>
                        </div>
                    </div>
                </div> */}
                <SupportContact />
                <ContactOptions />
                <SocialConnect />
                <Location />
                {/* <div className="container-contacto-petrohost-form-contacto" >
                    <div className="container-contacto-petrohost-form"  >
                        <div className="container-contacto-petrohost-form-left" >
                            <div className="container-contacto-petrohost-form-left-top-info" >
                                <h2>
                                    Entre em contato com a Petrohost e fique por dentro das nossas novidades e lançamentos.


                                </h2>
                            </div>
                            <Form />
                        </div>
                        <div className="container-contacto-petrohost-form-regth" >
                            <img src={capa} alt="capa petrohost" />
                        </div>
                    </div>
                </div> */}
                <Footer />
            </div>
        </>
    )

}