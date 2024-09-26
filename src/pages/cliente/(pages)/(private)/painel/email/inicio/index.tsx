import { GoPlus, GoSearch } from "react-icons/go";
import '@/pages/cliente/styles/globals.css'
import EmailCard from "@/pages/cliente/components/emailCard/view";
import { Link } from "react-router-dom";
import useClientStore from "@/contexts/clientStore";
import { useClientEmails } from "@/repositories/clientEmailsRepository";
import { useEffect, useState } from "react";
import useUtils from "@/utils/useutils";
import { IServicoEmail } from "@/interfaces/email.interface";

export default function EmailView() {


    const { emails, actions: { setClientEmails } } = useClientStore()
    const { getClientID} = useUtils()
    const { data } = useClientEmails(getClientID())
    const [searchEmail, setSearchEmail] = useState('')

    

    useEffect(() => {
        setClientEmails(data as IServicoEmail[])
    }, [data])

    const filteredEmails = Array.isArray(emails) ? emails.filter((email) => email.dominio && email.dominio.includes(searchEmail)) : [];


    return (
        <div className="flex w-full h-full">
            <div className="w-full">
                <div className="flex items-center justify-between w-full h-[80px] my-[15px]">
                    <div className="flex flex-col items-start justify-center">
                        <h1 className="text-[#616161] font-[400] text-[2rem] font-[Rubik]" style={{ lineHeight: 1 }}>E-Mails</h1>
                        <p className="font-[Rubik] mt-2 opacity-70">Gerencie os seus planos de e-mail.</p>
                    </div>

                </div>
                <div className='w-full flex gap-2 justify-center font-[Rubik]'  >
                    <div className="flex gap-4 items-center justify-start w-full">
                        <h1 className="text-[#393939] font-[400] text-[1.3rem] font-[Rubik]" style={{ lineHeight: 1 }}>Lista de serviços</h1>
                        <Link to={'/Email-profissional'} className="flex items-center justify-center gap-2 h-[38px] text-[0.8rem] px-3 rounded-[8px] text-cyan-800 font-[Rubik] border-[1px] border-solid border-[#305b83]" >Novo serviço <GoPlus size={18} color="rgb(21 94 117)" /></Link>
                    </div>
                    <div className="w-max h-[44px] border-[1px] border-solid rounded-[12px] overflow-hidden p-2 flex bg-white">
                        <div className="flex items-center justify-center">
                            <GoSearch size={16} color="#888" className="ml-2"/>
                        </div>
                        <input type="text" onChange={(e) => setSearchEmail(e.target.value)} placeholder="O que está procurando?" className="w-[400px] font-[Rubik] text-[0.8rem] h-full px-3" />
                        
                    </div>
                </div>
                <div className="w-full bg-transparent gap-x-3 rounded-[12px] flex" style={{ height: 'calc(100vh - 220px)' }}>
                    {/*<div className="w-1/2 bg-white rounded-[12px] p-3 overflow-y-scroll flex-col gap-y-3 mt-[15px] flex">
                        <p className="font-semibold opacity-80 text-[1rem]">E-Mail gratuito da hospedagem</p>
                        <div className="overflow-y-scroll flex flex-col gap-y-3">
                            {emails && emails.map((plan, _index) => (
                                <EmailCard accounts={plan.accounts} domain={plan.domain} status={plan.status} planName={plan.planName} key={_index} />
                            ))}
                        </div>
                    </div>*/}
                    <div className="w-full rounded-[12px] flex-col gap-y-3 mt-[15px] flex">
                        <div className="overflow-y-scroll flex flex-col gap-y-3">
                            {filteredEmails && filteredEmails.map((plan, _index) => (
                                <EmailCard  service={plan} key={_index} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}