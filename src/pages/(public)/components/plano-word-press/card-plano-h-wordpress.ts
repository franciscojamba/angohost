import styled from "styled-components";

interface propsPricingCard{
    
    plano_m:boolean 
}

export const ContainerPlano=styled.div<propsPricingCard>`
//border: ${({plano_m})=>plano_m?"3px solid #494eff":""}

`

export const Button=styled.a<propsPricingCard>`
background-color:${({plano_m})=>plano_m?"#eee":"transparent"} ;
  color: ${({plano_m})=>plano_m?"#0e3f7b":"#0e3f7b"};
  border: 2px solid ${({plano_m})=> plano_m ? "transparent" : "#0e3f7b"} ;
  padding: 10px 80px;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color .3s ease;

  &:hover{
    background-color: ${({plano_m})=>plano_m?"#b3ebff":"#b3ebff"};
  }
`