import useClientStore from "@/contexts/clientStore";
import { Ban, Pen, Save, Server, Trash, Wallet } from "lucide-react";
import { useState } from "react";
import '../../../../styles/globals.css'

export default function AccountAdminView() {
    const { client } = useClientStore()
    const [email, setEmail] = useState(client?.email as string)
    const [name, setName] = useState(client?.nome as string)
    const [telefone, setTelefone] = useState(client?.telefone as string)
    const [pais, setPais] = useState(client?.endereco.pais)
    const [provincia, setProvincia] = useState(client?.endereco.provincia)
    const [endereco, setEndereco] = useState(client?.endereco.endereco)
    const [isSetEdit1, setIsSetEdit1] = useState(false)
    const [isSetEdit2, setIsSetEdit2] = useState(false)


    return (
        <div className="w-full h-full pb-6 px-3">
            <div className="w-full">
                <div className="flex items-center justify-between w-full h-[80px]">
                    <div className="flex flex-col items-start justify-center">
                        <h1 className="text-[#383838] font-[600] text-[1.5rem] font-[Rubik]" style={{ lineHeight: 1 }}>Editar perfil</h1>
                    </div>
                </div>
            </div>

            <div className="w-full gap-[20px] flex items-center justify-between" style={{ height: 'calc(100% - 80px)' }}>
                <div className="w-[700px] h-full bg-white rounded-[20px] border-solid border-[1px] flex items-start flex-col justify-start">
                    <div className="w-full h-[130px] border-b-[1px] flex border-b-solid">
                        <div className="w-max h-full flex items-center justify-center px-6"><img className="rounded-full h-[80px] w-[80px] border-solid border-[1px] border-[#ddd]" src={'https://media.licdn.com/dms/image/D5603AQH1gEfltfXq8Q/profile-displayphoto-shrink_200_200/0/1709706230113?e=2147483647&v=beta&t=RDm3C-LBcLHjma89LLJcvQ4Ewd_1ne7ypO0EhveZbjs'} alt="" /></div>
                        <div className="flex flex-col items-start justify-center">
                            <button className="w-max h-max py-2 px-4 border-solid border-[1px] font-[Rubik] font-regular bg-white rounded-[8px] text-[0.8rem]">Alterar foto</button>
                            <div className="mt-2">
                                <p style={{ lineHeight: '10px' }} className="font-[Rubik] text-[0.8rem] opacity-70">Pelo menos 800x800px recomendado.</p>
                                <p style={{ lineHeight: '10px' }} className="font-[Rubik] text-[0.8rem] opacity-70">JPG e PNG são permitidos</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-6 pt-6 overflow-y-scroll" style={{ height: 'calc(100% - 130px)' }}>
                        <div className="border-solid border-[1px] rounded-[20px] w-full h-max px-3 p-3">
                            <div className="flex items-center justify-between">
                                <h1 className="text-[#2e2e2e] font-[500] text-[1rem] font-[Rubik]" style={{ lineHeight: 1 }}>Dados pessoais</h1>
                                <button onClick={() => setIsSetEdit1(true)} className="w-max h-max py-2 px-3.5 border-solid font-[0.8rem] border-[1px] font-[Rubik] font-regular bg-white rounded-[10px] text-[0.8rem] flex items-center justify-center gap-2"><Pen size={13} /> Editar </button>
                            </div>
                            <div className="mt-2 flex items-start flex-col justify-start">
                                <label className="font-[Rubik] opacity-70 text-[0.75rem]">Nome</label>
                                <div className="w-full flex items-center justify-center gap-3">
                                    <input type="text" readOnly={!isSetEdit1} data-edit={isSetEdit1} className="flex-[1] transition-all duration-300 px-4 h-[40px] border-solid border-[1.6px] rounded-[12px] focus:border-[#006CAF] text-[0.8rem]" value={name} onChange={(e) => setName(e.target.value)} />
                                    <button style={{ width: client?.nome === name ? "0px" : "95px", color: client?.nome === name ? "transparent" : "white" }} className="h-[40px] transition-all duration-300 overflow-none bg-[#006CAF] text-white rounded-[12px] flex items-center justify-center gap-2 text-[0.8rem]"><Save size={14} strokeWidth={1.7} /> Salvar</button>
                                </div>
                            </div>
                            <div className="mt-2 flex items-start flex-col justify-start">
                                <label className="font-[Rubik] opacity-70 text-[0.75rem]">Email</label>
                                <div className="w-full flex items-center justify-center gap-3">
                                    <input type="text" readOnly={!isSetEdit1} data-edit={isSetEdit1} className="flex-[1] transition-all duration-300 px-4 h-[40px] border-solid border-[1.6px] rounded-[12px] focus:border-[#006CAF] text-[0.8rem]" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <button style={{ width: client?.email === email ? "0px" : "95px", color: client?.email === email ? "transparent" : "white" }} className="h-[40px] transition-all duration-300 bg-[#006CAF] text-white rounded-[12px] flex items-center justify-center gap-2 text-[0.8rem]"><Save size={14} strokeWidth={1.7} /> Salvar</button>
                                </div>
                            </div>
                            <div className="mt-2 flex items-start flex-col justify-start">
                                <label className="font-[Rubik] opacity-70 text-[0.75rem]">Telefone</label>
                                <div className="w-full flex items-center justify-center gap-3">
                                    <input type="text" readOnly={!isSetEdit1} data-edit={isSetEdit1} className="flex-[1] transition-all duration-300 h-[40px] px-4 border-solid border-[1.6px]  rounded-[12px] focus:border-[#006CAF] text-[0.8rem]" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                                    <button style={{ width: client?.telefone === telefone ? "0px" : "95px", color: client?.telefone === telefone ? "transparent" : "white" }} className="h-[40px] bg-[#006CAF] text-white rounded-[12px] flex items-center transition-all duration-300 justify-center gap-2 text-[0.8rem]"><Save size={14} strokeWidth={1.7} /> Salvar</button>
                                </div>
                            </div>
                        </div>
                        <div className="border-solid border-[1px] rounded-[20px] w-full h-[max] mb-6 px-3 p-3 mt-4">
                            <div className="flex items-center justify-between">
                                <h1 className="text-[#2e2e2e] font-[500] text-[1rem] font-[Rubik]" style={{ lineHeight: 1 }}>Endereço</h1>
                                <button onClick={() => setIsSetEdit2(true)} className="w-max h-max py-2 px-3.5 border-solid font-[0.8rem] border-[1px] font-[Rubik] font-regular bg-white rounded-[10px] text-[0.8rem] flex items-center justify-center gap-2"><Pen size={13} /> Editar </button>
                            </div>
                            <div className="w-full h-max flex items-center justify-center gap-3">
                                <div className="w-1/2 mt-2 flex items-start flex-col justify-start">
                                    <label className="font-[Rubik] opacity-70 text-[0.75rem]">País</label>
                                    <div className="w-full flex items-center justify-center gap-3">
                                        <input type="text" readOnly={!isSetEdit2} data-edit={isSetEdit2} className="flex-[1] px-4 h-[40px] border-solid border-[1.6px] rounded-[12px] transition-all duratio-300 focus:border-[#006CAF] text-[0.8rem]" value={pais} onChange={(e) => setPais(e.target.value)} />
                                    </div>
                                </div>
                                <div className="w-1/2 mt-2 flex items-start flex-col justify-start">
                                    <label className="font-[Rubik] opacity-70 text-[0.75rem]">Provincia</label>
                                    <div className="w-full flex items-center justify-center gap-3">
                                        <input type="text" readOnly={!isSetEdit2} data-edit={isSetEdit2} className="flex-[1] px-4 h-[40px] border-solid border-[1.6px] rounded-[12px] transition-all duratio-300 focus:border-[#006CAF] text-[0.8rem]" value={provincia} onChange={(e) => setProvincia(e.target.value)} />
                                    </div>
                                </div>
                                <button style={{ width: (client?.endereco.pais === pais || client?.endereco.provincia === provincia) ? "0px" : "120px", color: (client?.endereco.pais === pais || client?.endereco.provincia === provincia) ? "transparent" : "white" }} className="h-[40px] mt-6 bg-[#006CAF] text-white rounded-[12px] flex items-center justify-center gap-2 transition-all duratio-300 text-[0.8rem]"><Save size={14} strokeWidth={1.4} /> Salvar</button>
                            </div>
                            <div className="mt-2 flex items-start flex-col justify-start">
                                <label className="font-[Rubik] opacity-70 text-[0.75rem]">Endereço</label>
                                <div className="w-full flex items-center justify-center gap-3">
                                    <input type="text" readOnly={!isSetEdit2} data-edit={isSetEdit2} className="flex-[1] px-4 h-[40px] border-solid border-[1.6px] rounded-[12px] transition-all duratio-300 focus:border-[#006CAF] text-[0.8rem]" value={endereco} onChange={(e) => setEndereco(e.target.value)} />
                                    <button style={{ width: client?.endereco.endereco === endereco ? "0px" : "95px", color: client?.endereco.endereco === endereco ? "transparent" : "white" }} className="h-[40px] bg-[#006CAF] text-white rounded-[12px] flex items-center justify-center gap-2 transition-all duratio-300 text-[0.8rem]"><Save size={14} strokeWidth={1.4} /> Salvar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-[1] h-full bg-white rounded-[20px] border-solid border-[1px] p-6">
                    <div className="border-solid border-[1px] rounded-[20px] w-full h-max px-3 p-3">
                        <div className="flex items-center justify-between">
                            <h1 className="text-[#2e2e2e] pointer-events-none font-[500] text-[1rem] font-[Rubik]" style={{ lineHeight: 1 }}>Carteira PH</h1>
                            <span className="bg-red-100 px-3 text-red-600 pointer-events-none text-[0.8rem] rounded-full py-2">Brevemente</span>
                        </div>
                        <div className="mt-2 flex items-start flex-col justify-start">
                            <label className="font-[Rubik] pointer-events-none opacity-70 text-[0.75rem]">Saldo disponível</label>
                            <div className="w-full flex items-center justify-center gap-3">
                                <input type="text" readOnly className="flex-[1] pointer-events-none opacity-70 text-center transition-all duration-300 px-4 pt-4 rounded-[12px] font-semibold text-[#006CAF] text-[1.6rem]" value={"Kz 46.700,00"} onChange={(e) => setName(e.target.value)} />
                            </div>
                        </div>
                        <div className="w-full gap-3 mt-6 flex items-center justify-center">
                        <button disabled className="h-[40px] w-1/2 transition-all duration-300 border-[#006CAF] border-[1px] border-solid text-[#006CAF] rounded-[12px] flex items-center justify-center gap-2 text-[0.8rem]"><Wallet size={14} strokeWidth={1.7} /> Adicionar saldo</button>
                        <button disabled className="h-[40px] w-1/2 transition-all duration-300 bg-[#006CAF] text-white rounded-[12px] flex items-center justify-center gap-2 text-[0.8rem]"><Server size={14} strokeWidth={1.7} /> Pagar serviços</button>

                        </div>
                    </div>

                    <div className="border-solid border-[1px] border-red-200 rounded-[20px] w-full mt-4 h-max px-3 p-3 bg-red-50">
                        <div className="flex items-center justify-between">
                            <h1 className="font-[500] text-[1rem] font-[Rubik] text-red-600" style={{ lineHeight: 1 }}>Zona vermelha</h1>
                        </div>
                        <div className="mt-4 flex items-center flex-col justify-center gap-3">
                            <button className="h-[40px] w-full transition-all duration-300 border-red-400 border-[1px] border-solid text-red-600 rounded-[12px] flex items-center justify-center gap-2 text-[0.8rem]"><Ban size={14} strokeWidth={1.7} /> Suspender conta</button>
                            <button className="h-[40px] w-full transition-all duration-300 bg-red-600 text-white rounded-[12px] flex items-center justify-center gap-2 text-[0.8rem]"><Trash size={14} strokeWidth={1.7} />Eliminar conta</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}