import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { RxDashboard } from "react-icons/rx";
import { IoExitOutline } from "react-icons/io5";
import useAuth from "../../../../hooks/useAuth";

const ContainerModalHospedagem = styled.div`
top: 60px;
display: flex;
flex-direction: column;
position: absolute;
padding: 10px;
justify-content: center;
align-items: center;
margin-left: 150px;
z-index: 2;
box-shadow: 0px 2px 4px rgba(0,0,0,0.4);
background: #ffffff;
border-radius: 10px;
`

const ContainerFlex = styled(Link)`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
height: 60px;
border-radius: 8px;
text-decoration: none;
cursor: pointer;
padding: 10px;
gap: 10px;


&:hover{
    background: #30486522;
    text-decoration: none;
}


`
const Icon = styled.div`
width: 30px;
height: 30px;
display: flex;
align-items: center;
justify-content: center;

svg{
    width: 100%;
    height: 100%;
    color: #304865;
}
`
const Descricao = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
height: 100%;
margin-top: 0px;

h3{
    font-size: 0.9rem;
    margin: 15px 0px 0px 0px;
    color: #304865;
    line-height: 20px;
    font-family: Poppins;
    margin-bottom: 0px;
}
p{
    font-size: 12px;
    line-height: 15px;
    maargin-top: 10px;
    color: #30486599
    ;
}
`

export const ModalLogado = () => {

    const { signOut } = useAuth()
    const router = useNavigate()

    return (
        <ContainerModalHospedagem>
            <ContainerFlex style={{textDecoration:"none"}}   to={"/cliente/painel"}  >
                <Icon>
                    <RxDashboard />
                </Icon>
                <Descricao>
                    <h3>Painel</h3>
                    <p>Aceda ao painel da sua conta</p>
                </Descricao>
            </ContainerFlex>
            <ContainerFlex style={{textDecoration:"none"}}  to={"/"} onClick={()=>{
                signOut()
                router('/', { replace: true })
            }}>
                <Icon>
                    <IoExitOutline/>
                </Icon>
                <Descricao>
                    <h3>Sair</h3>
                    <p>Encerre as suas atividades</p>
                </Descricao>
            </ContainerFlex>
        </ContainerModalHospedagem>
    )
}