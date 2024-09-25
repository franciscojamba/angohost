import "./hospedagem-wordpress.css"
import { AccordionPetrohost } from "../../components/Accordion/Accordion"
import { Footer } from "../../components/footer"
import NavbarFull from "../../components/nav/nav"
import { LOGOBRANCO } from "../../../../utils/logos"
import { FaMailBulk } from "react-icons/fa";
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import { PricingCard } from "../../components/card-plano"
import { useEffect, useState } from "react"
import { BuyEmailModal } from "../../components/buyEmailModal"
import api from "@/services/api"
import { toast } from "sonner"
import { RejectModal } from "../../components/rejectModal"
import useCart from "@/hooks/useCart"

interface Email {
    id: number;
    tipo: string;
    preco: number;
    desconto: number;
    precoComDesconto: number;
    recursos: string[];
    criadoEm: string;
    atualizadoEm: string;
}

interface ApiResponse {
    success: boolean;
    data: Email[];
}

const EmailPagePlano = () => {

    const [opened, setOpened] = useState(false)
    const [emailPlans, setEmailPlans] = useState<Email[]>()
    const [opendedReject, setOpendedReject] = useState(false)
    const [planIndex, setPlanIndex] = useState(0)
    const { cartLenght } = useCart()

    function openModal(index: number) {
        if (cartLenght >= 1) {
            setOpendedReject(true)
        }
        else {
            setPlanIndex(index)
            setOpened(true)
        }
    }

    async function getEmails() {
        const response: ApiResponse = await (await api.get("/planosEmails")).data
        if (response.success) {
            setEmailPlans(response.data)
        }
        else {
            toast.error("Erro ao obter planos de E-Mail")
        }
    }

    useEffect(() => {
        getEmails()
    }, [])

    return (
        <>
            <Helmet>
                <title>E-mail Corporativo - Aumente a credibilidade da sua empresa</title>
                <h1>E-mail Corporativo - Aumente a credibilidade da sua empresa</h1>
            </Helmet>
            <NavbarFull logo={LOGOBRANCO} color="#ffff" />
            <div>
                <div className="container-hospedagem">
                    <div className="container-hospedagem-wordpress" >
                        <div className="content-hospedagem-wordpress-left">
                            <div className="content-info" >
                                <h3>E-mail</h3>
                                <h2>Crie Seu Email Profissional com a Angohost!</h2>
                                <p><strong>Credibilidade e Confiabilidade</strong>, Tenha um endereço de email personalizado que inspira confiança.</p>
                            </div>
                            <div className="planos-button-flex" >
                                <Link to={"/hospedagem-de-sites"} className="plans-button">Ver planos</Link>

                                <div className="price-info">
                                    <span>a partir de </span>
                                    <span className="price">3.500 kz/anual*</span>

                                </div>

                            </div>
                            {/* <a href="#blog-petrohost" className="why-hostgator">Por que escolher a Petrohost</a> */}
                        </div>
                        <div className="content-hospedagem-wordpress-rigth" >
                            <FaMailBulk color="#fff" size={200} />
                        </div>
                    </div>


                </div>
            </div>
            <div className="plano-title"  >
                <h2>Garanta já o seu email profissional e destaque-se no mercado!</h2>
                <p>Angohost - Sua Solução Completa em Serviços de Email</p>
            </div>
            <div className="planos-word-press" >
                {
                    emailPlans && emailPlans.map((plan, index) => (
                        <PricingCard key={index} cicle={"Anual"} descontos={0} descricao={""} id={plan.id.toString()} planoPopular={false} preco={plan.preco} precoComDesconto={plan.preco - 1000} link={() => openModal(index)} recursos={plan.recursos ? plan.recursos : []} titulo={plan.tipo} info={"lorem ipsum dolor teste beta"} />
                    ))
                }

            </div>

            <div className="container-acordion" >
                <div className="container-acordion-width" >
                    <AccordionPetrohost />
                </div>
            </div>
            <Footer />
            <BuyEmailModal opened={opened} planIndex={planIndex} setOpened={setOpened} plans={emailPlans  || []} />
            <RejectModal openedReject={opendedReject} setOpenedReject={setOpendedReject} />
        </>
    )
}


export default EmailPagePlano;