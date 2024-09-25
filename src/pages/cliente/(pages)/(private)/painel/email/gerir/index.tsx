import { ArrowLeft, ArrowRight, Ban,  GlobeLock, Network, RefreshCcw, ServerCog, Trash } from "lucide-react";
import "react-toggle/style.css"
import Toggle from 'react-toggle'
import CPanelCredentialsModal from "../../../../../components/CPanelCredentialsModal/view";
import useModalsStore from "../../../../../../../contexts/useModals";
import DNSModal from "../../../../../components/DNSModal/view";
import IPModal from "../../../../../components/IPModal/view";
import { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import useClientStore from "../../../../../../../contexts/clientStore";
import useUtils from "../../../../../../../utils/useutils";

export default function EmailManageView() {

    const { id } = useParams()
    const { openCPanelModal, openDNSModal, openIPModal } = useModalsStore()
    const [loading, setLoading] = useState(false)
    const router = useNavigate()
    const { currentEmailService } = useClientStore()
    const { formatDate, getSessionToken } = useUtils()

    const { getClientID } = useUtils()

    const { actions: {
        getCredentials
    } } = useClientStore()

    useEffect(() => {
        const service = { id: id as string, type: "Dominio" }
        getCredentials(getClientID(), service, getSessionToken())
    }, [])

    // const { id } = useParams()
    return (
        <div className="w-full h-full overflow-y-scroll">
            <div className="flex items-center justify-between w-full h-[80px] my-[15px]">
                <div className="flex flex-col items-start justify-center">
                    <h1 className="text-[#616161] font-[400] text-[2rem] font-[Rubik]" style={{ lineHeight: 1 }}>Serviço de e-Mail </h1>
                    <p className="font-[Rubik] mt-2 opacity-70"><span className='bg-[#12753A11] py-1.5 px-2.5 text-[0.8rem] rounded-full text-[#12753A]'>Ativo</span></p>
                </div>
            </div>
            <div className="flex items-center justify-between w-full h-[80px]">
                <div className="flex items-center justify-center gap-2">
                    <div className="p-2 bg-[#12753A11] text-[#12753A] rounded-[12px] border-[1px] border-solid border-[#12753A] border-opacity-30">
                        <GlobeLock strokeWidth={1.5} size={30} />
                    </div>
                    <div>
                        <p style={{ lineHeight: '10px' }} className="font-[Rubik] mt-2 opacity-90 text-[1.2rem]">Domínio: {currentEmailService.dominio}</p>
                        <p className="font-[Rubik] mt-2 opacity-70 text-[0.8rem]">ID do Serviço: {currentEmailService.id}</p>
                    </div>
                </div>
                <div className="flex items-center w-max h-max justify-center">
                    <div >
                        <p style={{ lineHeight: '13px' }} className="font-[Rubik] mt-2 opacity-70 text-[0.8rem]">Inicio: {formatDate(currentEmailService.atualizadoEm)}</p>
                        <p style={{ lineHeight: '13px' }} className="font-[Rubik] mt-2 opacity-70 text-[0.8rem]">Termino: {formatDate(currentEmailService.expiraEm as string)}</p>
                    </div>
                    <button disabled className="flex items-center justify-center gap-2 h-[40px] text-white rounded-[5px] px-3 ml-3" style={{ background: 'linear-gradient(90deg, #2160ad, #082140)' }}>Renovar <RefreshCcw strokeWidth={1.5} size={16} /></button>
                    <div className="h-[50px] w-[1px] bg-[#222] opacity-10 ml-3" />
                    <Toggle disabled id='cheese-status' className="ml-3" size={30} width={10} icons={{
                        checked: null,
                        unchecked: null,
                    }}/>
                    <label className=" ml-2 font-[Rubik] opacity-70 text-[0.8rem]" htmlFor='cheese-status'>Auto-renovação</label>
                </div>
            </div>
            <div className="w-full h-[1px] bg-[#222] opacity-10" />
            <div className="w-full flex gap-[30px] items-start pt-[30px] justify-center" style={{ height: 'calc(100vh - 250px)' }}>
                <div style={{ width: 'calc(100% - 300px)' }}>
                    <div className="h-max bg-white flex flex-col gap-4 rounded-[18px] border-solid border-[1px] p-12 items-center justfy-center" >
                        <div className="w-full h-max flex gap-4">
                            <div className="w-full bg-[#edf3f8] rounded-[20px] flex items-center justify-center px-2">
                                <div className="flex flex-col py-2 items-center justify-center ">
                                    <GlobeLock size={30} className="mt-3" color="#135183" strokeWidth={1.3} />
                                    <div className="w-full flex flex-col pb-2 items-start justify-center mt-1 gap-2">
                                        <h1 style={{ lineHeight: '20px' }} className="text-[1rem] text-center text-[#135183] font-semibold">Gerenciar Domínio</h1>
                                        <button onClick={()=>{
                                             setLoading(true)
                                             const link = document.createElement('a')
                                             link.href = 'https://particulares.phpanel.net:2083/'
                                             link.target = '_blank'
                                             link.rel = 'external'
                                             setTimeout(()=>{
                                                 setLoading(false)
                                                 link.click()
                                             }, 2000)
                                        }} disabled={loading} className="h-[33px] w-[160px] mx-auto text-[#0e324f8b] rounded-[8px] bg-[#0d528022] flex items-center gap-1 justify-center text-white text-[0.8rem]"style={{background: 'linear-gradient(90deg, #2160ad, #082140)'}}>{loading ? <TailSpin color="#fff" width={12}/> : <>Entrar no CPanel <ArrowRight className="inline" size={17} strokeWidth={1.4}/></>}</button>
                                        <button onClick={openCPanelModal}  style={{ lineHeight: '0px' }} className="text-[0.8rem] mx-auto mt-1.5 text-[#0e324f8b] my-2">Ver detalhes </button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full bg-[#edf3f8] rounded-[20px] flex items-center justify-center px-2">
                                <div className="flex flex-col py-2 items-center justify-center ">
                                    <Network size={30} color="#135183" strokeWidth={1.3} />
                                    <div className="w-full flex flex-col pb-3 items-start justify-center mt-2 gap-1">
                                        <h1 style={{ lineHeight: '20px' }} className="text-[1rem] mx-auto text-center text-[#135183] font-semibold">IPs Dedicados</h1>
                                        <p style={{ lineHeight: '0px' }} className="text-[0.8rem] mx-auto text-[#0e324f8b]"><p className='bg-[#0d528022] py-2.5 px-2'>0 IPs</p></p>
                                        <div className="flex items-center justify-center gap-2">
                                            <button onClick={openIPModal} style={{ lineHeight: '0px' }} className="text-[0.8rem] mx-auto mt-1.5 text-[#07528fea]">Adicionar</button> 
                                            <div className="w-[1px] h-[15px] mt-1 bg-[#222] opacity-10"/>
                                            <button style={{ lineHeight: '0px' }} className="text-[0.8rem] mx-auto mt-1.5 text-[#494949ea]">Remover</button> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full bg-[#edf3f8] rounded-[20px] flex items-center justify-center px-2">
                                <div className="flex flex-col py-2 items-center justify-center ">
                                    <ServerCog size={30} color="#135183" strokeWidth={1.3} />
                                    <div className="w-full flex flex-col items-start justify-center mt-2 ml-3 gap-1">
                                        <h1 style={{ lineHeight: '20px' }} className="text-[1rem] text-center text-[#135183] font-semibold">Name Servers (DNS)</h1>
                                        <button onClick={openDNSModal} style={{ lineHeight: '0px' }} className="text-[0.8rem] mx-auto text-[#0e324f8b]">Ver detalhes <ArrowRight className="inline ml-2" size={18} /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-start gap-2 mt-2">
                        <button onClick={()=>{router('/cliente/painel/email/servicos')}} className="py-2 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 mb-2 px-3 rounded-md bg-white text-gray-600 text-[0.8rem] flex items-center justify-center gap-2 font-medium"><ArrowLeft size={14} /> Ver outros serviços </button>
                        <button disabled className="py-2 mb-2 px-3 rounded-md bg-white text-gray-600 text-[0.8rem] hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 font-medium"><Ban size={14} /> Suspender</button>
                        <button disabled className="py-2 px-3 rounded-md bg-red-100 mb-2 text-red-600 text-[0.8rem] hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 font-medium"><Trash strokeWidth={1.4} size={14} />Deletar</button>
                    </div>
                </div>
                <div className="w-[270px]">
                    <p className="font-[Rubik] mt-2 opacity-70 text-[1rem]">Resumo das atividades</p>
                    <div className="flex w-full h-[500px]">
                        <div className="w-[30px] flex flex-col items-center justify-start ">
                            <div className="w-[1px] h-[50px] bg-[#222] opacity-20" />
                            <div className="w-[15px] h-[15px] border-[1px] border-[#2222224b] border-solid rounded-full" />
                            <div className="w-[1px] h-[40px] bg-[#222] opacity-20" />
                            <div className="w-[15px] h-[15px] border-[1px] border-[#2222224b] border-solid rounded-full" />
                            <div className="w-[1px] h-[50px] bg-[#222] opacity-20" />
                        </div>
                        <div className=" " style={{ width: 'calc(100% - 30px)' }}>
                            <p style={{ lineHeight: '0px' }} className="font-[Rubik] mt-3 opacity-50 text-[0.7rem]">19 de Julho de 2024</p>
                            <p className="font-[Rubik] mt-2 opacity-60 text-[0.8rem]">Alteração de credenciais</p>
                            <p style={{ lineHeight: '0px' }} className="font-[Rubik] mt-[30px] opacity-50 text-[0.7rem]">19 de Julho de 2024</p>
                            <p className="font-[Rubik] mt-2 opacity-60 text-[0.8rem]">Alteração de credenciais</p>
                            <p style={{ lineHeight: '0px' }} className="font-[Rubik] mt-[30px] opacity-50 text-[0.7rem]">19 de Julho de 2024</p>
                            <p className="font-[Rubik] mt-2 opacity-60 text-[0.8rem]">Alteração de credenciais</p>
                        </div>
                    </div>
                </div>
            </div>
            <CPanelCredentialsModal/>
            <DNSModal/>
            <IPModal/>
        </div>
    )
}