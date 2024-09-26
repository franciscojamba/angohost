import "./styles.css"
import imagem_banner from "@/assets/images/capa-home-angohost.png"
import CountdownClock from "../relogio/relogio"
import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import api from "../../../../services/api"
import { TailSpin } from "react-loader-spinner"
import { GoArrowRight } from "react-icons/go"
import { Link } from "react-router-dom"
import { Check } from "lucide-react"
import useTempo from "@/hooks/useTempo"

// interface typeTempo{
//     id:string
//     tempo:string
// }

export const BannerHome =  () => {
     
    // const targetDate = "2024-07-22T23:59:59";
    // const [targetDate,setTargetDate]=useState<string>("2024-09-30T23:59:59")

    const {tempoPromo}=useTempo()

    const buscarTempo=async (id:string)=>{
        const tempo=await api.get(`/tempo/${id}`)
        .then((response)=>response.data)
        return tempo
    }
    const {data,isLoading}=useQuery({
        queryKey:["tempo-promo","id"],
        queryFn:()=>buscarTempo("c967c40b-a0d9-4e07-b792-2584a9c2d5e4")
    })

    // async function tempoPub(){
    //     const tempo:typeTempo= await data
    //     setTargetDate(tempo.tempo)
    // }
    useEffect(()=>{
    //    tempoPub()
    //     console.log(targetDate)
    },[data])

    return (
        <div className="banner-home"  >
            <div className="banner-home-flex">
                <div className="banner-home-left" >
                    <div className="banner-home-left-info" >
                    <span className="text-zinc-600 text-[0.8rem] sm:text-[1.1rem]">Com Angohost, seu projeto online está em boas mãos.</span>
                        <h2 className="text-3xl">Transfira seu domínio .co.ao ou .ao


                        para nós e desfruta de 1 ano de e-mail corporativo
                        </h2>
                        <h2 className="text-3xl"></h2>
                        <p  className=" text-zinc-600 text-[0.8rem] sm:text-[1.1rem]" >
                        Angohost, levando sua marca ao mundo digital com facilidade
                        </p>
                        <ul className="mb-3">
                            <li className="flex justify-start items-center  text-zinc-600 gap-1  " > <Check width={24} color="#00B090" />Domínio grátis</li>
                            <li className="flex justify-start items-center  text-zinc-600 gap-1  " > <Check width={24} color="#00B090" />Migração de sites grátis</li>
                            <li className="flex justify-start items-center  text-zinc-600 gap-1  " > <Check width={24} color="#00B090" />Suporte ao cliente 24h</li>

                        </ul>
                        <h4 className="banner-home-left-info-h4 text-red-500 text-2xl font-semibold ">Oferta por tempo limitado corra!</h4>
                        <div className="banner-home-left-info-button_container  " >
                           {isLoading?<TailSpin color="red" width={20} />: <CountdownClock targetDate={tempoPromo} />}
                           <Link className="h-[45px] ml-2 px-3 rounded-lg flex items-center justify-center hover:text-white" style={{ textDecoration: "none", background: 'linear-gradient(-90deg, rgb(43 6 67 / 85%), rgb(120 3 121), rgb(2, 18, 31))' }} to={"/Email-profissional"}>Começa agora <GoArrowRight /> </Link>
                        </div>
                       
                    </div>
                </div>
                <div className="banner-home-rigth" >
                    <div className="banner-home-image-capa" >
                        <img src={imagem_banner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}