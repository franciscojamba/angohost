import { ContainerPlano,Button } from "./card-plano-h-windows";
import { FcOk } from "react-icons/fc";

import "./plano-h-windows.css"

interface propsPricingCard{
    title:string, 
    price:string, 
    features:string[],
    plano_m:boolean,
    descricao:string,
    link_plano:string
}


const PlanoHospedagemWindows=({descricao,features,plano_m,price,title,link_plano}:propsPricingCard)=>{



    return(
        <ContainerPlano className="pricing-card-h-windows" plano_m={plano_m}  >

        <div className="pricing-card-title-h-windows"  >
        <h3  >{title}</h3>
        <p>{descricao}</p>
        </div>

        {/* <div className="descontos" >
            
            <p className="descontos-economize-valor" >13.000,00 kz</p>
         
            
            <p className="descontos-economize" >ECONOMIZE 75%</p>
          
        </div> */}

       <div  className="price-plano" >
       <p>{price}</p>
       </div>
       <div className="btn-links" >
       <Button style={{textDecoration:"none"}}  href={link_plano}  plano_m={plano_m} >Selecionar plano</Button>
       </div>
        <ul className="list-feature--h-windows"  >
          {features.map((feature, index) => (
            <li key={index}> 
                <FcOk />
              {feature}</li>
          ))}
        </ul>
        
      </ContainerPlano>
    )
}

export default PlanoHospedagemWindows;
