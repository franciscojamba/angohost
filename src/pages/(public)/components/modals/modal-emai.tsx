import { Link } from "react-router-dom"
import styled from "styled-components"


const ContainerModalHospedagem = styled.div`
top: 45px;
display: flex;
flex-direction: column;
position: absolute;
width: 350px ;
height: max-content;
justify-content: center;
align-items: center;
margin-left: 170px;
z-index: 2;
box-shadow: 0px 2px 4px rgba(0,0,0,0.4);
background: #ffffff;
border-radius: 8px;
padding: 10px;
`
const ContainerFlex = styled(Link)`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
height: 70px;
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
max-width: 40px;
max-height: 40px;
display: flex;
align-items: center;
justify-content: center;

img{
    width: 100%;
}
`
const Descricao = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: start;
height: 100%;
margin-top: 0px;
margin-left: 10px;

h3{
    font-size: 0.9rem;
    margin: 0px 0px 0px 0px;
    color: #304865;
    line-height: 20px;
    font-family: Poppins;
    margin-bottom: 0px;
}
p{
    font-size: 12px;
    line-height: 15px;
    margin: 5px 0px 0px 0px;
    color: #30486599
    ;
}
`

export const ModalEmail = () => {
    return (
        <ContainerModalHospedagem>
            <ContainerFlex  to={"/Email-profissional"} style={{textDecoration:"none"}}  >
                <Icon>
                    <img src="https://www.squarebrothers.com/images/icon/email-hosting.svg" alt="" />
                </Icon>
                <Descricao> 
                    <h3>eMail</h3>
                    <p>
                    Melhor hospedagem de e-mail empresarial acessível.
                    </p>
                </Descricao>
            </ContainerFlex>
            <ContainerFlex to={"/ssl"} style={{textDecoration:"none"}}   >
                <Icon>
                    <img src="https://www.squarebrothers.com/images/icon/google-workspace.svg" alt="" />
                </Icon>
                <Descricao>
                    <h3>Google Workspace</h3>
                    <p>
                    Colabore mais facilmente com e-mail, Drive, Documentos e muito mais.
                    </p>
                </Descricao>
            </ContainerFlex>
          
        </ContainerModalHospedagem>
    )
}