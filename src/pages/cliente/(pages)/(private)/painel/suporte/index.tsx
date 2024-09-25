import React, { useState } from 'react';
import useClientStore from '../../../../../../contexts/clientStore';
import { CiPaperplane } from 'react-icons/ci';
import '../../../../styles/suport.css'


interface Ticket {
    id: number;
    nome: string;
    email: string;
    assunto: string;
    mensagem: string;
    status: string;
}

const SupportPage = () => {

    const { client } = useClientStore()
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [ticketData, setTicketData] = useState({
        nome: client?.nome || "",
        email: client?.email || "",
        assunto: '',
        mensagem: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setTicketData({ ...ticketData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newTicket = { ...ticketData, id: Date.now(), status: 'Aberto' };
        setTickets([...tickets, newTicket]);
        setTicketData({ nome: '', email: '', assunto: '', mensagem: '' });
    };

    return (
        <div className="h-full flex items-center justify-center" style={{ flex: 1 }}>
            <div className='w-full h-full'>
                <div className="w-full">
                    <div className="flex items-center justify-between w-full h-[80px] my-[15px]">
                        <div className="flex flex-col items-start justify-center">
                            <h1 className="text-[#616161] font-[400] text-[2rem] font-[Rubik]" style={{ lineHeight: 1 }}>Suporte</h1>
                            <p className="font-[Rubik] mt-2 opacity-70">Ao seu lado sempre que precisar.</p>
                        </div>
                    </div>
                </div>
                <div className="support_container flex flex-wrap items-center justify-between w-full overflow-y-scroll gap-y-10" style={{ height: 'calc(100vh - 180px)' }}>

                    <div className="support_body">
                        <div className="channels w-[40%]">
                            <div className="image" />
                            <h1 className="title" style={{ color: "#3B3D4E" }}>Fale connosco</h1>
                            <p>
                                A nossa Linha de Atendimento está disponível 24h por dia. Se tem
                                dúvidas, sugestões ou reclamações, fale connosco.
                            </p>
                            <div>
                                <h1>Atendimento personalizado</h1>
                                <p>06h - 23h59</p>
                            </div>
                            <div className="separator" />
                            <h1>Como fazer</h1>
                            <div>
                                <p>1º Ligue</p>
                                <p>923 120 120</p>
                            </div>
                            <div>
                                <p>2º Esclareça as suas questões</p>
                                <p> </p>
                            </div>
                            <div className="separator" />
                            <h1>Custos</h1>
                            <p>
                                O curso de cada chamada para a Linha de atendimento Angohost depende da
                                tarifa em vigor de cada operador.
                            </p>
                        </div>
                        <div className="channels w-[58%]">
                            <h1 className="title" style={{ color: "#616161" }}>Solicitar suporte</h1>
                            <p>
                                Este é o espaço para se aproximar da Angohost. Envie-nos os seus
                                comentários, sugestões e reclamações, teremos o maior prazer em
                                responder.
                            </p>
                            <div className="separator" />
                            <form onSubmit={handleSubmit} className="w-full">
                                <div className='flex flex-col w-full h-max'>
                                    <label htmlFor="" className='font-semibold text-[0.9rem] font-[Rubik] text-[#222]'>Nome</label>
                                    <input type="text" onChange={handleChange} value={ticketData.nome} readOnly className='w-full text-[0.9rem] font-[Rubik] h-[49px] border-[#ddd] rounded-[12px] bg-white border-[1px] border-solid px-4' />
                                </div>
                                <div className='flex flex-col w-full h-max'>
                                    <label htmlFor="" className='font-semibold text-[0.9rem] font-[Rubik] text-[#222]'>Email</label>
                                    <input type="text" onChange={handleChange} value={ticketData.email} readOnly className='w-full text-[0.9rem] font-[Rubik] h-[49px] border-[#ddd] rounded-[12px] bg-white border-[1px] border-solid px-4' />
                                </div>
                                <div className='flex flex-col w-full h-max'>
                                    <label htmlFor="" className='font-semibold text-[0.9rem] font-[Rubik] text-[#222]'>Assunto</label>
                                    <input type="text" onChange={handleChange} className='w-full text-[0.9rem] font-[Rubik] h-[49px] border-[#ddd] rounded-[12px] bg-white border-[1px] border-solid px-4' />
                                </div>
                                <div className='flex flex-col w-full h-max'>
                                    <label htmlFor="" className='font-semibold text-[0.9rem] font-[Rubik] text-[#222]'>Mensagem</label>
                                    <textarea onChange={handleChange} className='w-full text-[0.9rem] font-[Rubik] max-h-[95px] min-h-[95px] h-[95px] border-[#ddd] rounded-[12px] bg-white border-[1px] border-solid px-4' />
                                </div>
                                <div className='w-full'>
                                    <button
                                        disabled
                                        type="submit"
                                        className="w-full h-[49px] flex items-center font-[Rubik] text-[0.9rem] justify-center gap-2 text-white rounded-[12px]"
                                        style={{ background: 'linear-gradient(122deg, rgba(1, 38, 83, 1) 12%, rgba(0, 109, 176, 1) 100%)' }}
                                    >
                                        Enviar Ticket (Brevemente) <CiPaperplane size={24} color='#fff' />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[400px] h-[96%] bg-white rounded-[12px] flex items-center justify-start flex-col p-[20px]'>
                <h1 className="font-[Rubik] text-[#616161] w-full font-[500] text-[1rem] text-left mt-2 h-[20px]" style={{ lineHeight: 0 }}>Tickets</h1>
                <div className="w-full bg-black opacity-5 h-[1px] mb-3" />
                <div className="w-full h-full overflow-y-scroll flex flex-col gap-3">
                    { tickets.length === 0 && <div className='w-full h-full flex items-center justify-center text-[0.8rem] font-[Rubik] opacity-50'>Sem tickets</div>}
                </div>
            </div>
        </div>
    );
};

export default SupportPage;
