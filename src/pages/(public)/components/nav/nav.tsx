import styled from "styled-components"
import { HomeNavBarTop } from "../navbar/homeNavBarTop"
import { NavMenu } from "../navbar-top"

const ContainerNav=styled.div`
width: 100%;
padding: 0px 20px;
background: linear-gradient(122deg, rgba(1,38,83,1) 12%, rgba(0,109,176,1) 100%);
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
            <NavMenu/>
        </ContainerNav>
    )
}

export default NavbarFull;