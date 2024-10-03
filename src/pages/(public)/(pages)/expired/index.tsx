import { Link } from "react-router-dom"
import logo from '../../../../assets/images/PETROHOST-02.png'
import { Home } from "lucide-react"

export default function Expired() {
    return (
        <main style={{background: 'linear-gradient(90deg, #2160ad, #082140)'}} className="w-full h-[100vh] flex-col sm:flex-row flex items-center justify-center realtive">
            <img src={logo} alt="logo" className="w-[170px] absolute top-6 left-8"/>
            <p className="text-white font-[Rubik] text-[3.2rem]">OPA!</p>
            <div className="opacity-20 bg-white  w-[130px] sm:w-[4px] rounded-lg ml-3 h-[4px] sm:h-[77px]" />
            <div className="flex flex-col items-center sm:items-start ml-2 justify-center">
                <p  className="text-white font-[Rubik] text-[1.2rem] mb-1">Link expirado</p>
                <Link className="w-max px-3 rounded bg-[#ffffff22] hover:text-[#ffffff99] transition-colors duration-300 flex items-center justify-center gap-2 text-[#ffffff77] font-[Rubik] h-[44px] text-[0.8rem] " to={'/'}>Voltar para a Home <Home strokeWidth={2} size={15}/></Link>
            </div>
        </main>
    )
} 