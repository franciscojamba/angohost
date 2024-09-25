import { BsGear } from 'react-icons/bs'
import { IoCloudDoneOutline } from 'react-icons/io5'
import { TbRestore } from 'react-icons/tb'
import useUtils from '../../../../utils/useutils'
import { useNavigate } from 'react-router-dom'
import { IServicoPlano } from '../../../../interfaces/servico.interface'
import useClientStore from '../../../../contexts/clientStore'

interface HostCardModel {
    service: IServicoPlano
}

const red = "#AA2523";
const green = "#12753A";
const yellow = "#F2CB67";
const gray = "#777";

const redFore = "#9C25231";
const greenFore = "#12753A11";
const yellowFore = "#F2CB6711";
const grayFore = "#ebebeb";

export default function HostCard({ service }: HostCardModel) {

    const { formatDate, formatMoney } = useUtils()
    const { actions: {
        setCurrentPlan
    } } = useClientStore()
    const router = useNavigate()

    return (
        <div className="w-full h-[80px] bg-[#ffffff] rounded-[12px] flex items-center justify-between p-4" style={{ boxShadow: "0 2px 2px rgba(0, 0, 0, 0.014)" }}>
            <div className="p-[13px] rounded-full w-max" style={{ background: service.status === "ATIVO" ? greenFore : service.status === "SUSPENSO" ? redFore : service.status === "CANCELADO" ? grayFore : yellowFore }}>
                <IoCloudDoneOutline color={service.status === "ATIVO" ? green : service.status === "SUSPENSO" ? red : service.status === "CANCELADO" ? gray : yellow} size={20} />
            </div>
            <div className="h-max flex-1 ml-7">
                <h1 className="font-[Rubik] opacity-80 text-[1rem] font-semibold" style={{ lineHeight: '15px' }}>{service.Plano.titulo}</h1>
                <div className="flex gap-2 items-center justify-start">
                    <p className="font-[Rubik] text-[0.8rem] opacity-50 mt-1">{service.dominio}</p>
                    <p className="font-[Rubik] text-[0.8rem] py-[1px] px-2 rounded-sm" style={{ background: service.status === "ATIVO" ? greenFore : service.status === "SUSPENSO" ? redFore : service.status === "CANCELADO" ? grayFore : yellowFore, color: service.status === "ATIVO" ? green : service.status === "SUSPENSO" ? red : service.status === "CANCELADO" ? gray : yellow }}>{service.status.toLowerCase()}</p>
                </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
                <p className="font-[Rubik] opacity-80 text-[0.8rem] font-regular">Data de início</p>
                <p className="font-[Rubik] text-[0.8rem] opacity-50 mt-1">{service.status === "PENDENTE" ? "Pendente" : formatDate(service.atualizadoEm)}</p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
                <p className="font-[Rubik] opacity-80 text-[0.8rem] font-regular">Data de vencimento</p>
                <p className="font-[Rubik] text-[0.8rem] opacity-50 mt-1">{service.status === "PENDENTE" ? "Pendente" : formatDate(service.expiraEm as string)}</p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
                <p className="font-[Rubik] opacity-80 text-[0.8rem] font-regular">Duração</p>
                <p className="font-[Rubik] text-[0.8rem] opacity-50 mt-1">{service.ciclo.duracao}</p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
                <p className="font-[Rubik] opacity-80 text-[0.8rem] font-regular">Preço</p>
                <p className="font-[Rubik] text-[0.8rem] opacity-50 mt-1">{formatMoney(service.Plano.preco * service.ciclo.multiplicador)}</p>
            </div>
            <div className="h-full flex items-center justify-end flex-1">
                {service.status === "ATIVO" && (
                    <button
                        onClick={() => {
                            setCurrentPlan(service);
                            router(`/cliente/painel/hospedagem/gerir/${service.id}`);
                        }}
                        className="flex flex-row-reverse items-center justify-center gap-2 h-[38px] text-[0.8rem] px-3 rounded-[8px] text-cyan-800 font-[Rubik] border-[1px] border-solid border-[#305b83]"
                    >
                        Gerir <BsGear size={14} color="rgb(21 94 117)" />
                    </button>
                )}
                {service.status === "SUSPENSO" && (
                    <button
                        disabled
                        className="flex flex-row-reverse items-center justify-center gap-2 h-[38px] text-[0.8rem] px-3 rounded-[8px] text-cyan-800 font-[Rubik] border-[1px] border-solid border-[#305b83] cursor-not-allowed"
                    >
                        Renovar <TbRestore size={14} color="rgb(21 94 117)" />
                    </button>
                )}
                {service.status === "PENDENTE" && (
                    <button
                        disabled
                        className="flex flex-row-reverse items-center justify-center gap-2 h-[38px] text-[0.8rem] px-3 rounded-[8px] text-cyan-800 font-[Rubik] border-[1px] border-solid border-[#305b83] cursor-not-allowed"
                    >
                        Ativação pendente <TbRestore size={14} color="rgb(21 94 117)" />
                    </button>
                )}
            </div>
        </div>

    )
}
