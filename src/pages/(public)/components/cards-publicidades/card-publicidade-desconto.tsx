import { ContainerPublicade } from "./style"
import publicidade from "../../../../assets/publicade-desconto-1.png"

export const CardDesconto = () => {
    return (
        <ContainerPublicade href="#"  >
            <img src={publicidade} />
        </ContainerPublicade>
    )
}