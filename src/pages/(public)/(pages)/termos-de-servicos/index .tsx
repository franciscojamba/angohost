import "./termos-de-servicos.css"
import { Footer } from "../../components/footer"
import NavbarFull from "../../components/nav/nav"
import { LOGOBRANCO } from "../../../../utils/logos"
import { TbAlignBoxCenterMiddleFilled } from "react-icons/tb";
import { useEffect, useState } from "react"
import TermsServicos from "./components/termo-servicos/termo-servicos"
import TermsPrivacidade from "./components/termo-privacidade/termo-privacidade"
import TermsMigracao from "./components/termo-migracao/termo-migracao"

const TermosPetrohost = () => {

    const [termo, setTermo] = useState(0)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>

            <NavbarFull logo={LOGOBRANCO} color="#ffff" />
            <div>
                <div className="container-hospedagem">
                    <div className="container-hospedagem-wordpress" >
                        <div className="content-hospedagem-wordpress-left">
                            <div className="content-info" >
                                <h3>TERMOS DA ANGOHOST</h3>
                                <h2>Termos de serviço</h2>
                                <p>Saiba sobre os termos da ANGOHOST!</p>
                            </div>


                            {/* <a href="#blog-petrohost" className="why-hostgator">Por que escolher a Petrohost</a> */}
                        </div>
                        <div className="content-hospedagem-wordpress-rigth" >
                            <TbAlignBoxCenterMiddleFilled color="#fff" size={200} />
                        </div>
                    </div>


                </div>
            </div>
            <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center", marginTop: 20, boxShadow: "rgba(0, 0, 0, 0.05) 0px 7px 7px", }}  >
                <div style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center", gap: 56, padding: 10 }}   >
                    <div>
                        <button onClick={() => setTermo(0)} style={{ borderBottom: termo === 0 ? "2px solid #0056b3" : "" }} disabled={termo === 0 ? true : false} >Termos de serviços</button>
                    </div>
                    <div>
                        <button onClick={() => setTermo(1)} style={{ borderBottom: termo === 1 ? "2px solid #0056b3" : "" }} disabled={termo === 1 ? true : false} >Politica de privacidade</button>
                    </div>
                    <div>
                        <button onClick={() => setTermo(2)} style={{ borderBottom: termo === 2 ? "2px solid #0056b3" : "" }} disabled={termo === 2 ? true : false} >Termos de migração</button>
                    </div>
                </div>
            </div>

            <div>

                {
                    termo === 0 && <TermsServicos />
                }
                {
                    termo === 1 && <TermsPrivacidade />
                }
                {
                    termo === 2 && <TermsMigracao />
                }

            </div>



            {/* <div className="container-acordion" >
        <div className="container-acordion-width" >
          <AccordionPetrohost />
        </div>
      </div> */}
            <Footer />
        </>
    )
}


export default TermosPetrohost;