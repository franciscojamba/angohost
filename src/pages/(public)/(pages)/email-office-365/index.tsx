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
import { CardPlanoMicrosoft } from "./components/card-plano"
// import CardMicrosoftOffice from "../../components/cards-angohost/card-microsoft-office-360"

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




  const plans = [
    {
      title: 'Exchange 365 Basic',
      price: 24700,
      priceDetail: 'utilizador/mês',
      buttonLabel: 'Comprar agora',
      link: '#',
      features: [
        '4 vCPU Cores',
        'Gestão de identidade e acesso para até 50 colaboradores',
        'E-mail empresarial personalizado',
        'SSD 400GB  de armazenamento na nuvem',
        '6GB RAM do Servidor',
        'Filtragem de spam e malware automática',
        'Suporte por telefone e na Web',
        'Permite até 50 usuário'
      ],
    },
    {
      title: 'Exchange 365 Premium',
      price: 28000,
      priceDetail: 'utilizador/mês',
      buttonLabel: 'Comprar agora',
      link: '#',
      features: [
        '6 vCPU Cores',
        'Gestão de identidade e acesso para até 100 colaboradores',
        'Versões para computador do Word, Excel, PowerPoint e Outlook',
        'Webinars com registo de participantes e relatórios',
        'SSD 600GB  de armazenamento na nuvem',
        '16GB RAM do Servidor',
        'Áreas de trabalho colaborativas',
        'Permite até 100 usuário'
      ],
    },
    {
      title: 'Exchange 365 Empresas',
      price: 24000,
      priceDetail: 'utilizador/mês',
      buttonLabel: 'Comprar agora',
      link: '#',
      features: [
        '8 vCPU Cores',
        'Gestão de identidade e acesso para até 100 colaboradores',
        'Gestão de identidade e acesso avançada',
        'Proteção contra vírus e ataques de phishing',
        'SSD 1.2 TB  de armazenamento na nuvem',
        '24 GB RAM do Servidor',
        'Proteção de pontos finais empresariais',
      ],
    },
    {
      title: 'Exchange 365 Plus',
      price: 20000,
      priceDetail: 'utilizador/mês',
      buttonLabel: 'Comprar agora',
      link: '#',
      features: [
        '12 vCPU Cores',
        'Versões para computador do Word, Excel, PowerPoint & Outlook',
        '1.6 TB SSD de armazenamento na nuvem por utilizador',
        '48 GB RAM do Servidor',
        'Suporte por telefone e na Web em qualquer altura',
      ],
    },
  ];


  // const servicesCard1 = [
  //   { name: "Exchange", icon: "/microsoft-icons/BP-Exchange_RE46TV5.webp", link: "#" },
  //   { name: "OneDrive", icon: "/microsoft-icons/OneDrive_260px_RE4oUAF.webp", link: "#" },
  //   { name: "SharePoint", icon: "/microsoft-icons/Sharepoint_260px_RE4oH1F.webp", link: "#" },
  //   { name: "Word", icon: "/microsoft-icons/Icon_Word_2x_RE2Xmzs.webp", link: "#" },
  //   { name: "Excel", icon: "/microsoft-icons/Icon_Excel_2x_RE2Xztz.webp", link: "#" },
  //   { name: "PowerPoint", icon: "/microsoft-icons/Icon_PowerPoint_2x_RE2Xmzm.webp", link: "#" },
  //   { name: "Outlook", icon: "/microsoft-icons/BP-Outlook_RE47eLs.webp", link: "#" },
  //   { name: "OneDrive", icon: "/microsoft-icons/OneDrive_260px_RE4oUAF.webp", link: "#" },
  //   { name: "SharePoint", icon: "/microsoft-icons/Sharepoint_260px_RE4oH1F.webp", link: "#" },
  // ];





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
              <FaMicrosoft color="#fff" size={200} />
            </div>
          </div>


        </div>
      </div>
      <div className="plano-title"  >
        <h2>Garanta já o seu email profissional e destaque-se no mercado!</h2>
        <p>Angohost - Sua Solução Completa em Serviços de Email</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-8">
      {plans.map((plan, index) => (
        <CardPlanoMicrosoft
          key={index}
          title={plan.title}
          price={plan.price}
          priceDetail={plan.priceDetail}
          description={[]}
          buttonLabel={plan.buttonLabel}
          link={plan.link}
          features={plan.features}
        />
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