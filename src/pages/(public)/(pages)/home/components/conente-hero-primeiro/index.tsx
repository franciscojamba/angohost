import { FaArrowRight, FaCheck } from "react-icons/fa";
import "./style.css"
import { EQUIPA_PETROHOST } from "../../../../../../utils/banner";

const data = [
    {
        title: "Blog da Angohost",
        description: "Dicas e insights para você criar, divulgar e ter sucesso com seu site, blog ou loja",
        to: "#"
    },
    {
        title: "Qual é coisa, qual é ela?",
        description: "Termos sobre programação, hospedagem de sites, marketing digital e muito mais...",
        to: "#"
    },
    {
        title: "Tutorias Especiais Angohost",
        description: "Conceitos, práticas e tudo o que você precisa saber sobre hospedagem de sites",
        to: "#"
    },
    {
        title: "Angohost Academy",
        description: "Cursos online elaborados para te ajudar a ter sucesso na internet",
        to: "#"
    }
]


export const ContentHero = () => {

    return (
        <div className="contente-hero-primeiro" >

            <div className="content-hero-pub-news">
                <div className="contente-hero-flex">
                    <div className="content-hero-left">
                        <img className="content-hero-left-img"
                            src={EQUIPA_PETROHOST}
                            alt="petrohost-equipa" />
                    </div>
                    <div className="content-hero-rigth">
                        <div className="content-hero-title">
                            <h2>Hospedagem de sites com especialistas angolanos</h2>
                        </div>

                        <div className="content-hero-paragrafo">
                            <p>Você sabia que mais de 2,5 mil sites são criados todos os dias? Conte com a Angohost para se
                                destacar no meio de tudo isso. Junte-se a milhares de clientes e tenha uma experiência completa
                                e
                                apoio no que você precisar.</p>
                        </div>
                        <div className="content-hero-paragrafo-flex-container">
                            <div className="content-hero-paragrafo-flex">
                                <FaCheck style={{ color: "#00b090" }} />
                                <p>Infraestrutura, serviços e muita informação</p>
                            </div>
                            <div className="content-hero-paragrafo-flex">
                                <FaCheck style={{ color: "#00b090" }} />
                                <p>Seu site preparado para crescer, engajar e converter mais clientes
                                </p>
                            </div>
                            <div className="content-hero-paragrafo-flex">
                                <FaCheck style={{ color: "#00b090" }} />

                                <p>Suporte via e-mail, chat, ticket, telefone,whatsapp 24h/7
                                </p>
                            </div>
                            <div className="content-hero-paragrafo-flex">
                                <FaCheck style={{ color: "#00b090" }} />

                                <p>Aquele suporte humanizado e sempre presente
                                </p>
                            </div>
                            <div className="content-hero-paragrafo-flex">
                                <FaCheck style={{ color: "#00b090" }} />
                                <p>E muito mais...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="list-cards-flex">
                {data.map((item, _index) => (
                    <div key={_index} className="card-hero-new-service border-[1px] border-solid rounded-[12px] hover:border-[#23679a33] px-4 mb-4 hover:bg-[#23679a11] hover:-translate-y-3 cursor-pointer transition-all duration-300">
                        <div className="card-hero-title">
                            <h2>{item.title}</h2>
                        </div>
                        <div className="card-content-paragrafo">
                            <p>
                                {item.description}
                            </p>
                        </div>
                        <button className="card-hero-btn-saiba-mais mb-4">
                            <a href={item.to}>Saiba mais</a>
                            <FaArrowRight color="#0e3f7b" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}