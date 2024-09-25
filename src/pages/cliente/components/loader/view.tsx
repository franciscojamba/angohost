import { TailSpin } from "react-loader-spinner";

export default function LoaderComponent({color}: {color: string}) {
    return <TailSpin color={color} width={20}/>
}