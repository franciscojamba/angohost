import styled from "styled-components";

interface propsPricingCard{
    
    plano_m:boolean 
}

export const ContainerPlano=styled.div<propsPricingCard>`
//border: ${({plano_m})=>plano_m?"3px solid #494eff":""}

`

export const Button=styled.a<propsPricingCard>`
background-color:${({plano_m})=>plano_m?"#0e3f7b":"transparent"} ;
  color: ${({plano_m})=>plano_m?"#fff":"#0e3f7b"};
  border: 2px solid #0e3f7b ;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 600;
  margin-bottom: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover{
    background-color: ${({plano_m})=>plano_m?"#09519f":"#b3ebff"};
  }
`