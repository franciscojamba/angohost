import { CardContainer } from '@/components/ui/3d-card';
import CardMicrosoftOffice from '@/pages/(public)/components/cards-angohost/card-microsoft-office-360';
import useUtils from '@/utils/useutils';
import React from 'react';

interface CardProps {
  title: string;
  price: number;
  priceDetail: string;
  description: string[];
  buttonLabel: string;
  link: string;
  features: string[];
}

export const CardPlanoMicrosoft: React.FC<CardProps> = ({
  title,
  price,
  priceDetail,
  buttonLabel,
  link,
  features,
}) => {

    const {formatMoney}=useUtils()

    // const servicesCard1 = [
    //   { name: "Exchange", icon: "/microsoft-icons/BP-Exchange_RE46TV5.webp", link: "#" },
    //   { name: "OneDrive", icon: "/microsoft-icons/OneDrive_260px_RE4oUAF.webp", link: "#" },
    //   { name: "SharePoint", icon: "/microsoft-icons/Sharepoint_260px_RE4oH1F.webp", link: "#" }
    // ];
  
    // const appsCard1 = [
    //   { name: "Word", icon: "/microsoft-icons/Icon_Word_2x_RE2Xmzs.webp", link: "#" },
    //   { name: "Excel", icon: "/microsoft-icons/Icon_Excel_2x_RE2Xztz.webp", link: "#" },
    //   { name: "PowerPoint", icon: "/microsoft-icons/Icon_PowerPoint_2x_RE2Xmzm.webp", link: "#" },
    //   { name: "Outlook", icon: "/microsoft-icons/BP-Outlook_RE47eLs.webp", link: "#" },
    // ];

    const servicesCard1 = [
      { name: "Exchange", icon: "/microsoft-icons/BP-Exchange_RE46TV5.webp", link: "#" },
      { name: "OneDrive", icon: "/microsoft-icons/OneDrive_260px_RE4oUAF.webp", link: "#" },
      { name: "SharePoint", icon: "/microsoft-icons/Sharepoint_260px_RE4oH1F.webp", link: "#" },
      { name: "Word", icon: "/microsoft-icons/Icon_Word_2x_RE2Xmzs.webp", link: "#" },
      { name: "Excel", icon: "/microsoft-icons/Icon_Excel_2x_RE2Xztz.webp", link: "#" },
      { name: "PowerPoint", icon: "/microsoft-icons/Icon_PowerPoint_2x_RE2Xmzm.webp", link: "#" },
      { name: "Outlook", icon: "/microsoft-icons/BP-Outlook_RE47eLs.webp", link: "#" },
      { name: "Microsoft Loop", icon: "/microsoft-icons/logo_msft_loop_36x36.webp", link: "#" },
      { name: "Clipchamp", icon: "/microsoft-icons/Icon-Clipchamp-25x25.webp", link: "#" },
     
    ];
  
    const appsCard1 = [
      { name: "Word", icon: "/microsoft-icons/Icon_Word_2x_RE2Xmzs.webp", link: "#" },
      { name: "Excel", icon: "/microsoft-icons/Icon_Excel_2x_RE2Xztz.webp", link: "#" },
      { name: "PowerPoint", icon: "/microsoft-icons/Icon_PowerPoint_2x_RE2Xmzm.webp", link: "#" },
      { name: "Outlook", icon: "/microsoft-icons/BP-Outlook_RE47eLs.webp", link: "#" },
    
    ];
  
  
  

  return (
    <CardContainer>
    <div className=" cursor-pointer border p-6 rounded-lg shadow-lg max-w-sm mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <div className="text-3xl font-bold text-blue-600">{formatMoney(price)}</div>
      <div className="text-sm text-gray-500">{priceDetail}</div>
      <div className="my-4">
        <a
          href={link}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          {buttonLabel}
        </a>
     
      </div>
      <ul className="text-gray-700 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <CardMicrosoftOffice title="Plano 1" services={servicesCard1} apps={appsCard1} />

    </div>
    </CardContainer>
  );
};

// const PricingSection = () => {
//   const plans = [
//     {
//       title: 'Microsoft 365 Empresas Basic',
//       price: '5,60 €',
//       priceDetail: 'utilizador/mês',
//       buttonLabel: 'Comprar agora',
//       link: '#',
//       features: [
//         'Gestão de identidade e acesso para até 300 colaboradores',
//         'E-mail empresarial personalizado',
//         '1 TB de armazenamento na nuvem',
//         'Filtragem de spam e malware automática',
//         'Suporte por telefone e na Web',
//       ],
//     },
//     {
//       title: 'Microsoft 365 Empresas',
//       price: '11,70 €',
//       priceDetail: 'utilizador/mês',
//       buttonLabel: 'Comprar agora',
//       link: '#',
//       features: [
//         'Versões para computador do Word, Excel, PowerPoint e Outlook',
//         'Webinars com registo de participantes e relatórios',
//         'Áreas de trabalho colaborativas',
//       ],
//     },
//     {
//       title: 'Microsoft 365 Empresas Premium',
//       price: '20,60 €',
//       priceDetail: 'utilizador/mês',
//       buttonLabel: 'Comprar agora',
//       link: '#',
//       features: [
//         'Gestão de identidade e acesso avançada',
//         'Proteção contra vírus e ataques de phishing',
//         'Proteção de pontos finais empresariais',
//       ],
//     },
//     {
//       title: 'Microsoft 365 Apps para Pequenas e Médias Empresas',
//       price: '9,80 €',
//       priceDetail: 'utilizador/mês',
//       buttonLabel: 'Comprar agora',
//       link: '#',
//       features: [
//         'Versões para computador do Word, Excel, PowerPoint & Outlook',
//         '1 TB de armazenamento na nuvem por utilizador',
//         'Suporte por telefone e na Web em qualquer altura',
//       ],
//     },
//   ];

//   return (
//     <div className="flex flex-wrap justify-center gap-6 mt-8">
//       {plans.map((plan, index) => (
//         <PricingCard
//           key={index}
//           title={plan.title}
//           price={plan.price}
//           priceDetail={plan.priceDetail}
//           description={[]}
//           buttonLabel={plan.buttonLabel}
//           link={plan.link}
//           features={plan.features}
//         />
//       ))}
//     </div>
//   );
// };

// export default PricingSection;
