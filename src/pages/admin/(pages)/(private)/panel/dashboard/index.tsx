import useClientStore from "../../../../../../contexts/clientStore";
import '../../../../styles/globals.css'
import useUtils from "../../../../../../utils/useutils";
import hero from '../../../../../../assets/images/hero2.png'
import { ArrowRight, Cloud, FilePenLine, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import ClientInfoFiled from "./components/clientSkeletonField";
import { useEffect } from "react";

export default function DashboardAdminView() {

    const { client } = useClientStore()
    const { getAuthenticatedUser } = useUtils()

    useEffect(() => {
        console.log(client)
    }, [])

    return (
        <div className="flex w-full h-full overflow-y-scroll pb-6">
            <div className="w-full">
                <div className="flex items-center justify-between w-full h-[80px] my-[15px]">
                    <div className="flex flex-col items-start justify-center">
                        <h1 className="text-[#3d3d3d] font-[400] text-[2rem] font-[Rubik]" style={{ lineHeight: 1 }}>Bem vindo,</h1>
                        <p className="font-[Rubik] mt-2 opacity-70">Veja o resumo das suas atividades.</p>
                    </div>
                    <div>
                       <ClientInfoFiled clientName={client?.nome} autheticatedUserType={getAuthenticatedUser()}/>
                    </div>
                </div>
                <div className="w-full pt-6 px-[50px]" style={{ height: 'calc(100vh - 185px)' }}>
                    <div className="w-full h-[370px] mx-auto flex  items-center border-solid rounded-[30px] pr-[50px] bg-white">
                        <div className="w-[40%] h-full relative">
                            <img className="w-[350px] absolute bottom-[0px] pointer-events-none" src={hero} alt="branca" />
                        </div>
                        <div style={{ width: 'calc(100% - 420px' }} className="flex max-w-[500px] items-center justify-center flex-col ml-[50px]">
                            <div>
                                <h1 style={{ lineHeight: '35px' }} className="text-gradient text-[1.4rem] text-center items-center justify-center gap-2 font-semibold">Impulsione a Visibilidade da Sua Marca! <Rocket color="#006db0" strokeWidth={2.2} className="inline" /></h1>
                                <p className="w-[90%] text-[0.9rem] text-left">Desenvolvimento de Sites Personalizados para o Sucesso do Seu Negócio</p>
                                <p className="text-[0.75rem] opacity-70 mx-auto text-center bg-blue-100 w-max py-2 px-4 rounded-full font-semibold text-cyan-700">Obtenha o seu site em 15 dias úteis</p>
                                <button className="w-full h-[45px] text-white text-[0.9rem] rounded-[8px] mt-3 mb-1.5" style={{ background: 'linear-gradient(122deg, rgba(1,38,83,1) 12%, rgba(0,109,176,1) 100%)' }}>Solicitar orçamento</button>
                                {/* <p className="text-[0.75rem] opacity-70">O plano é renovado por 12 mêses</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="flex bg-white w-full h-[190px] p-3 gap-3 items-center justify-center rounded-[30px] mt-3">
                        <Link to={'/hospedagem-de-sites'} className="w-1/2 h-full hover:border-[#4e93e23f] duration-300 border-solid border-[#edf3f8] border-[1px] bg-[#edf3f8] rounded-[20px] flex flex-col items-center justify-center px-12">
                            <div className="w-full flex items-center justify-start gap-2">
                                <Cloud size={50} color="#135183" strokeWidth={1.3} /><p className="text-[1.1rem] text-[#135183] font-semibold">Adquirir Plano de Hospedagem</p>
                            </div>
                            <p className="text-[0.8rem] text-[#0e324f8b]">Soluções de hospedagem robustas com o uso de <span className='bg-[#13518322] py-0.5 px-2'>SSD</span> projetadas para suportar qualquer tipo de site <ArrowRight className="inline ml-2" size={18} /></p>
                        </Link>
                        <Link to={'/dominios'} className="w-1/2 hover:border-[#4e93e23f] duration-300 border-solid border-[#edf3f8] border-[1px] h-full bg-[#edf3f8] rounded-[20px] flex flex-col items-center justify-center px-12">
                            <div className="w-full flex items-center justify-start gap-2">
                                <FilePenLine size={40} color="#135183" strokeWidth={1.3} /><p className="text-[1.1rem] text-[#135183] font-semibold">Registar domínio</p>
                            </div>
                            <p className="text-[0.8rem] text-[#0e324f8b]">Proteja sua marca registrando domínios nas principais extensões: <span className='bg-[#13518322] py-0.5 px-2'>.com</span> <span className='bg-[#13518322] py-0.5 px-2'>.ao</span> <span className='bg-[#13518322] py-0.5 px-2'>.co.ao</span> <ArrowRight className="inline ml-2" size={18} /></p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}