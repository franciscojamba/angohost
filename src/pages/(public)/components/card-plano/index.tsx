import useUtils from "../../../../utils/useutils";
import "./styel.css"

import { FaCheck } from "react-icons/fa";
import { CardContainer } from "@/components/ui/3d-card";

interface Plano {
  id:string,
  titulo:string, 
  preco: number,
  info?: string,
  cicle: string,
  recursos:string[],
  planoPopular:boolean,
  descricao:string,
  descontos:number,
  precoComDesconto:number,
  link: () => void
}

export const PricingCard = ({ planoPopular, preco,  recursos,titulo , cicle,descricao, info , link}:Plano) => {

    const { formatMoney } = useUtils()

    return (
      <CardContainer>

      <div 
      
      className={planoPopular
        ? "pricing-card pricing-card-m hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
        : "pricing-card hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out  cursor-pointer"}
    >
        <h3  className="pricing-card-title" >{titulo}</h3>
        <div className="pricing-card-description-container">
          <p className="pricing-card-description">{descricao}</p>
        </div>
        {/* <div className="descontos" >
            <p className="descontos-economize-valor" >{precoComDesconto} kz</p>
            <p className="descontos-economize" >ECONOMIZE {descontos}%</p>
        </div> */}
       <div  className="price-plano" >
       <p>{formatMoney(preco)}<span>{cicle}</span></p>
       </div>
       <p className="price-plane-info">{info}</p>
        <button className="w-full h-[45px] rounded-[12px] bg-[#fff]"  style={{textDecoration:"none", color: planoPopular ? "" :"#fff", background: planoPopular ? "" : "linear-gradient(90deg, #450153 12%, #3e00b0 90%)"}} onClick={link}>Selecionar plano</button>
        <div className="separator"/>
        <ul className="list-feature"  >
          {recursos.map((recurso, index) => (
            <li key={index}> 
                <FaCheck style={{color: "#00b090"}}/>
              {recurso}</li>
          ))}
        </ul>
        
      </div>
      </CardContainer>
    );
  };