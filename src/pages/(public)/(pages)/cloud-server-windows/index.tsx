import "./email-office-365.css"
import { AccordionPetrohost } from "../../components/Accordion/Accordion"
import { Footer } from "../../components/footer"
import NavbarFull from "../../components/nav/nav"
import { LOGOBRANCO } from "../../../../utils/logos"
import { FaMicrosoft } from "react-icons/fa";
import { Helmet } from "react-helmet"
import { useEffect, useState } from "react"
// import { BuyEmailModal } from "../../components/buyEmailModal"
// import api from "@/services/api"
// import { toast } from "sonner"
import { RejectModal } from "../../components/rejectModal"
import ProductCardCloudServer from "./components/card-plano"

interface Product {
  id: number;
  title: string;
  price: number;
  cores: number;
  ram: string;
  storage: string;
  snapshots: number;
  traffic: string;
}

// interface Email {
//     id: number;
//     tipo: string;
//     preco: number;
//     desconto: number;
//     precoComDesconto: number;
//     recursos: string[];
//     criadoEm: string;
//     atualizadoEm: string;
// }

// interface ApiResponse {
//     success: boolean;
//     data: Email[];
// }

const PaginaEmailOffice365 = () => {

    // const [opened, setOpened] = useState(false)
    // const [emailPlans, setEmailPlans] = useState<Email[]>()
    const [opendedReject, setOpendedReject] = useState(false)
    // const [planIndex, setPlanIndex] = useState(0)
    // const { cartLenght } = useCart()

  

    // function openModal(index: number) {
    //     if (cartLenght >= 1) {
    //         setOpendedReject(true)
    //     }
    //     else {
    //         setPlanIndex(index)
    //         setOpened(true)
    //     }
    // }

    // async function getEmails() {
    //     const response: ApiResponse = await (await api.get("/planosEmails")).data
    //     if (response.success) {
    //         setEmailPlans(response.data)
    //     }
    //     else {
    //         toast.error("Erro ao obter planos de E-Mail")
    //     }
    // }

    useEffect(() => {
        // getEmails()
    }, [])




    const products: Product[] = [
      {
        id: 1,
        title: "CLOUD VPS 1",
        price: 14.50,
        cores: 4,
        ram: "6 GB RAM",
        storage: "100 GB NVMe or 400 GB SSD",
        snapshots: 1,
        traffic: "32 TB Traffic* Unlimited Incoming",
      },
      {
        id: 2,
        title: "CLOUD VPS 2",
        price: 30.50,
        cores: 6,
        ram: "16 GB RAM",
        storage: "200 GB NVMe or 400 GB SSD",
        snapshots: 2,
        traffic: "32 TB Traffic* Unlimited Incoming",
      },
      // Add more products as needed
    ];
    

    return (
        <>
            <Helmet>
                <title>E-mail Corporativo - Aumente a credibilidade da sua empresa</title>
                <h1>Encontre o melhor plano do Microsoft 365 para a sua empresa
                </h1>
            </Helmet>
            <NavbarFull logo={LOGOBRANCO} color="#ffff" />
            <div>
                <div className="container-hospedagem">
                    <div className="container-hospedagem-wordpress" >
                        <div className="content-hospedagem-wordpress-left">
                            <div className="content-info" >
                                <h3>Microsoft 365</h3>
                                <h2>Escolha entre planos com e sem o Microsoft Teams</h2>
                                <p><strong>Credibilidade e Confiabilidade</strong>, Poupe 16% ao pagar anualmente</p>
                            </div>
                            {/* <div className="planos-button-flex" >
                                <Link to={"/hospedagem-de-sites"} className="plans-button">Ver planos</Link>

                                <div className="price-info">
                                    <span>a partir de </span>
                                    <span className="price">3.500 kz/anual*</span>

                                </div>

                            </div> */}
                            {/* <a href="#blog-petrohost" className="why-hostgator">Por que escolher a Petrohost</a> */}
                        </div>
                        <div className="content-hospedagem-wordpress-rigth" >
                            <FaMicrosoft  color="#fff" size={200} />
                        </div>
                    </div>


                </div>
            </div>
            <div className="plano-title"  >
                <h2>Garanta já o seu email profissional e destaque-se no mercado!</h2>
                <p>Angohost - Sua Solução Completa em Serviços de Email</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
      {products.map((product) => (
        <ProductCardCloudServer key={product.id} product={product} />
      ))}
    </div>
            {/* <div className="planos-word-press" >
                {
                    emailPlans && emailPlans.map((plan, index) => (
                        <PricingCard key={index} cicle={"Anual"} descontos={0} descricao={""} id={plan.id.toString()} planoPopular={false} preco={plan.preco} precoComDesconto={plan.preco - 1000} link={() => openModal(index)} recursos={plan.recursos ? plan.recursos : []} titulo={plan.tipo} info={"lorem ipsum dolor teste beta"} />
                    ))
                }

            </div> */}

            <div className="container-acordion" >
                <div className="container-acordion-width" >
                    <AccordionPetrohost />
                </div>
            </div>
            <Footer />
            {/* <BuyEmailModal opened={opened} planIndex={planIndex} setOpened={setOpened} plans={emailPlans  || []} /> */}
            <RejectModal openedReject={opendedReject} setOpenedReject={setOpendedReject} />
        </>
    )
}


export default PaginaEmailOffice365;