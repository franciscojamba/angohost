import { AccordionPetrohost } from "../Accordion/Accordion";
import "./style-petrohost-banner.css"

export const PetrohostBanner = () => {
    return (
        <div className="petrohost-banner-2-flex" >
            <div className="petrohost-banner-2">
                <div className="text-section">
                    <div className="text-section-title" >
                        <h2>Comece com a Angohost</h2>
                        {/* <h2> & cresça com a Petrohost</h2> */}
                    </div>
                    <ul className="text-section-info"  >
                        <li>Instale o WordPress e aproveite milhares de temas e plugins</li>
                        <li>Garantia de 99,9% de disponibilidade para seu site</li>
                        <li>Servidores seguros e estáveis com infraestrutura de ponta</li>
                        <li>Migração grátis do seu site de outro provedor para a Angohost</li>
                        <li>Suporte 24h por dia com Selo RA 1000</li>
                    </ul>
                </div>
                <div className="petrohost-iframe-video">
                    <iframe style={{ border: "none", borderRadius: '10px'}} width="560" height="315" src="https://www.youtube.com/embed/Kgb4rb32E8I" title="HOSPEDAGEM DE SITE" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
            <AccordionPetrohost />
        </div>
    );
}