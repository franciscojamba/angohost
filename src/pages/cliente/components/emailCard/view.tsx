import useClientStore from '@/contexts/clientStore';
import { IServicoEmail } from '@/interfaces/email.interface';
import useUtils from '@/utils/useutils';
import { BsGear } from 'react-icons/bs';
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { TbRestore } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

interface EMailCardModel {
    service: IServicoEmail
}

const red = "#AA2523";
const green = "#12753A";
const yellow = "#F2CB67";
const gray = "#777";

const redFore = "#9C25231";
const greenFore = "#12753A11";
const yellowFore = "#F2CB6711";
const grayFore = "#ebebeb";

export default function EmailCard({ service }: EMailCardModel) {

    const { formatDate } = useUtils()
    const { actions: {
        setCurrentEmailService
    } } = useClientStore()
    const router = useNavigate() 

    return (
        <div className="w-full h-[70px] bg-[#fff] rounded-[12px] flex items-center justify-start p-4 border-[1px] border-[#22222211] border-solid cursor-pointer duration-300 transition-all ">
            <div className="p-[10px] rounded-full w-max" style={{ background: service.status === "ATIVO" ? greenFore : service.status === "SUSPENSO" ? redFore : service.status === "CANCELADO" ? grayFore : yellowFore }}>
                <MdOutlineAlternateEmail color={service.status === "ATIVO" ? green : service.status === "SUSPENSO" ? red : service.status === "CANCELADO" ? gray : yellow} size={20} />
            </div>
            <div className="w-max h-max ml-4">
                <h1 className="font-[Rubik] opacity-80 text-[1rem] font-semibold" style={{ lineHeight: '15px' }}>Plano de E-Mail</h1>
                <div className="flex gap-2 items-center justify-start">
                    <p className="font-[Rubik] text-[0.8rem] opacity-50 mt-1">{service.dominio}</p>
                    <p className="font-[Rubik] text-[0.8rem] py-[1px] px-2 rounded-sm" style={{ background: service.status === "ATIVO" ? greenFore : service.status === "SUSPENSO" ? redFore : service.status === "CANCELADO" ? grayFore : yellowFore, color: service.status === "ATIVO" ? green : service.status === "SUSPENSO" ? red : service.status === "CANCELADO" ? gray : yellow }}>{service.status.toLowerCase()}</p>
                </div>
            </div>
            <div className="w-max h-max ml-[100px] flex flex-col items-center justify-center">
                <p className="font-[Rubik] opacity-80 text-[0.8rem] font-regular">Início</p>
                <p className="font-[Rubik] text-[0.8rem] opacity-50 mt-1">{service.atualizadoEm ? formatDate(service.atualizadoEm) : "Pendente"}</p>
            </div>
            <div className="w-max h-max ml-[100px] flex flex-col items-center justify-center">
                <p className="font-[Rubik] opacity-80 text-[0.8rem] font-regular">Fim</p>
                <p className="font-[Rubik] text-[0.8rem] opacity-50 mt-1">{service.expiraEm ? formatDate(service.expiraEm) : "Pendente"}</p>
            </div>
            <div className="h-full flex items-center justify-end" style={{ flex: '1' }}>
                {service.status === "ATIVO" && (
                    <button onClick={() => {
                        setCurrentEmailService(service);
                        router(`/cliente/painel/email/gerir/${service.id}`);
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
