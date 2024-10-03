import styled from "styled-components"
import { HomeNavBarTop } from "../navbar/homeNavBarTop"
import { NavMenu } from "../navbar-top"

const ContainerNav=styled.div`
width: 100%;
padding: 0px 20px;
background: linear-gradient(-90deg, rgba(43, 6, 67, 0.85), rgb(120, 3, 121), rgb(2, 18, 31));
display: flex;
flex-direction: column;
`

interface propsNavBarTopColor{
  color:string
  logo: string
} 

const NavbarFull=({logo, color}:propsNavBarTopColor)=>{

    return(
        <ContainerNav>
            <HomeNavBarTop logo={logo} color={color}/>
            <hr  className="bg-white" />
            <NavMenu/>
            <hr  className="bg-white" />
        </ContainerNav>
    )
}

export default NavbarFull;