import { BsGear } from 'react-icons/bs'
import { TbRestore } from 'react-icons/tb'
import useUtils from '../../../../utils/useutils'
import { useNavigate } from 'react-router-dom'
import { IClienteDominio } from '../../../../interfaces/dominio.interface'
import useClientStore from '../../../../contexts/clientStore'
import { GlobeLock } from 'lucide-react'

interface HostCardModel {
    service: IClienteDominio
}

const red = "#AA2523";
const green = "#12753A";
const yellow = "#F2CB67";
const gray = "#777";

const redFore = "#9C25231";
const greenFore = "#12753A11";
const yellowFore = "#F2CB6711";
const grayFore = "#ebebeb";

export default function DomainCard({ service }: HostCardModel) {

    const { formatDate, formatMoney } = useUtils()
    const { actions: {
        setCurrentDomainService
    } } = useClientStore()
    const router = useNavigate()

    function verifyPremium(domain: string):boolean {
        const domainName = domain.split('.')
        if (domainName[0].length === 3 && (domainName[1] === 'co' || domainName[1] === 'ao')) {
            return true
        }
        return false
    }

    return (
        <div className="w-full h-[80px] bg-[#ffffff]  rounded-[12px] flex items-center justify-start p-4" style={{ boxShadow: " 0 2px 2px rgba(0, 0, 0, 0.014)" }}>
            <div className="p-[13px] rounded-full w-max " style={{ background: service.status === "ATIVO" ? greenFore : service.status === "SUSPENSO" ? redFore : service.status === "CANCELADO" ? grayFore : yellowFore }}>
                <GlobeLock color={service.status === "ATIVO" ? green : service.status === "SUSPENSO" ? red : service.status === "CANCELADO" ? gray : yellow} size={20} />
            </div>
            <div className="w-[100px] h-max ml-7">
                <h1 className="font-[Rubik] opacity-80 text-[1rem] font-semibold" style={{ lineHeight: '15px' }}>{service.Dominio.dominio}</h1>
                <div className="flex gap-2 items-center justify-start">
                    <p className="font-[Rubik] text-[0.8rem] opacity-50 mt-1">{service.Dominio.planoDominio.tipo}</p>
                    <p className="font-[Rubik] text-[0.8rem] py-[1px] px-2 rounded-sm" style={{ background: service.status === "ATIVO" ? greenFore : service.status === "SUSPENSO" ? redFore : service.status === "CANCELADO" ? grayFore : yellowFore, color: service.status === "ATIVO" ? green : service.status === "SUSPENSO" ? red : service.status === "CANCELADO" ? gray : yellow }}>{service.status.toLowerCase()}</p>
                </div>
            </div>
            <div className="w-max h-max ml-[200px] flex flex-col items-center justify-center">
                <p className="font-[Rubik] opacity-80 text-[0.8rem] font-regular" >Data de início</p>
                <p className="font-[Rubik] text-[0.8rem] opacity-50 mt-1">{service.status === "PENDENTE" ? "Pendente" : formatDate(service.atualizadoEm as string)}</p>
            </div>
            <div className="w-max h-max ml-16 flex flex-col items-center justify-center">
                <p className="font-[Rubik] opacity-80 text-[0.8rem] font-regular" >Data de vencimento</p>
                <p className="font-[Rubik] text-[0.8rem] opacity-50 mt-1">{service.status === "PENDENTE" ? "Pendente" : formatDate(service.expiraEm as string)}</p>
            </div>
            <div className="w-max h-max ml-16 flex flex-col items-center justify-center">
                <p className="font-[Rubik] opacity-80 text-[0.8rem] font-regular" >Duração</p>
                <p className="font-[Rubik] text-[0.8rem] opacity-50 mt-1">1 ano</p>
            </div>
            <div className="w-max h-max ml-16 flex flex-col items-center justify-center">
                <p className="font-[Rubik] opacity-80 text-[0.8rem] font-regular" >Preço</p>
                <p className="font-[Rubik] text-[0.8rem] opacity-50 mt-1">{formatMoney(verifyPremium(service.Dominio.dominio) ? 300000 : service.Dominio.planoDominio.preco)}</p>
            </div>
            <div className="h-full flex items-center justify-end" style={{ flex: '1' }}>
                {service.status === "ATIVO" && (
                    <button onClick={() => {
                        setCurrentDomainService(service);
                        router(`/cliente/painel/dominios/gerir/${service.id}`);
                    }} className="flex items-center justify-center gap-2 h-[38px] text-[0.8rem] px-3 rounded-[8px] text-cyan-800 font-[Rubik] border-[1px] border-solid border-[#305b83]">
                        <BsGear size={14} color="rgb(21 94 117)" />
                        Gerir serviço
                    </button>
                )}

                {/* Botão Renovar - Apenas SUSPENSO */}
                {service.status === "SUSPENSO" && (
                    <button disabled className="flex items-center justify-center gap-2 h-[38px] text-[0.8rem] px-3 rounded-[8px] text-cyan-800 font-[Rubik] border-[1px] border-solid border-[#305b83]">
                        Renovar
                        <TbRestore size={14} color="rgb(21 94 117)" />
                    </button>
                )}

                {/* Botão Ativação Pendente - Qualquer outro estado */}
                {service.status !== "ATIVO" && service.status !== "SUSPENSO" && (
                    <button disabled className="flex items-center justify-center gap-2 h-[38px] text-[0.8rem] px-3 rounded-[8px] text-cyan-800 font-[Rubik] border-[1px] border-solid border-[#305b83]">
                        Ativação pendente
                        <TbRestore size={14} color="rgb(21 94 117)" />
                    </button>
                )}
            </div>
        </div>
    )
}
