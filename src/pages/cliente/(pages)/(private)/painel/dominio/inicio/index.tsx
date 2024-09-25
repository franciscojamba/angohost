import { GoPlus, GoSearch } from "react-icons/go";
import '@/pages/cliente/styles/globals.css'
import { Link } from "react-router-dom";
import useClientStore from "@/contexts/clientStore";
import Skeleton from "react-loading-skeleton";
import useUtils from "@/utils/useutils";
import svg from '@/assets/svgs/withoutservices.svg'
import DomainCard from "@/pages/cliente/components/domainCard/view";
import { IClienteDominio } from "@/interfaces/dominio.interface";
import { useClientDomainServices } from "@/repositories/clientDomainsRepository";
import { useEffect, useState } from "react";

export default function HomeDomains() {

    const { domainServices, actions: { setClientDomainServices } } = useClientStore()
    const { getClientID} = useUtils()
    const { data, isLoading, isError, isSuccess } = useClientDomainServices(getClientID())
    const [searchDomain, setSearchDomain] = useState('')

    useEffect(() => {
        setClientDomainServices(data as IClienteDominio[])
    }, [data])


    const filteredDomainServices = domainServices?.filter((item) => item.Dominio.dominio.toLowerCase().includes(searchDomain.toLowerCase()))

    return (
        <div className="flex w-full h-full">
            <div className="w-full">
                <div className="flex items-center justify-between w-full h-[80px] my-[15px]">
                    <div className="flex flex-col items-start justify-center">
                        <h1 className="text-[#616161] font-[400] text-[2rem] font-[Rubik]" style={{ lineHeight: 1 }}>Domínios</h1>
                        <p className="font-[Rubik] mt-2 opacity-70">Gerencie os seus domínios.</p>
                    </div>
                </div>
                <div className='w-full flex gap-2 justify-center font-[Rubik]'  >
                    <div className="flex gap-4 items-center justify-start w-full">
                        <h1 className="text-[#393939] font-[400] text-[1.3rem] font-[Rubik]" style={{ lineHeight: 1 }}>Lista de domínios</h1>
                        <Link to={'/hospedagem-de-sites'} className="flex items-center justify-center gap-2 h-[38px] text-[0.8rem] px-3 rounded-[8px] text-cyan-800 font-[Rubik] no-underline border-[1px] border-solid border-[#305b83]" >Novo domínio <GoPlus size={18} color="rgb(21 94 117)" /></Link>
                    </div>
                    <div className="w-max h-[44px] border-[1px] border-solid rounded-[12px] overflow-hidden p-2 flex bg-white">
                        <div className="flex items-center justify-center">
                            <GoSearch size={16} color="#888" className="ml-2"/>
                        </div>
                        <input type="text" onChange={(e) => setSearchDomain(e.target.value)} placeholder="O que está procurando?" className="w-[400px] font-[Rubik] text-[0.8rem] h-full px-3" />
                    </div>
                </div>
                <div className="w-full bg-transparent overflow-y-scroll flex-col gap-y-3 mt-[15px] rounded-[12px] flex" style={{ height: 'calc(100vh - 240px)' }}>
                    {   
                        isLoading && (
                            <div className="w-full">
                                <Skeleton className="w-full h-[80px] rounded-[12px]" baseColor="#fafafa88" highlightColor="#aaaaff22"/>
                                <Skeleton className="w-full h-[80px] rounded-[12px] mt-1" baseColor="#fafafa88" highlightColor="#aaaaff22"/>
                                <Skeleton className="w-full h-[80px] rounded-[12px] mt-1" baseColor="#fafafa88" highlightColor="#aaaaff22"/>
                            </div>
                        )
                    }  
                    {
                        (isSuccess && filteredDomainServices) && filteredDomainServices.map((item, _index) => (
                            <DomainCard key={_index} service={item} />
                        ))
                    }
                    {
                        (isError) && (
                            <div className="w-full h-full flex flex-col gap-3 items-center justify-center">
                                <img src={svg} alt="wihout services image" className="w-[150px] h-[150px]"/>
                                <p className="text-[1rem] font-[Rubik]">Erro ao obter serviços</p>
                            </div>
                        )
                    }
                    {
                        ((domainServices && domainServices.length === 0) && isSuccess) && (
                            <div className="w-full h-full flex flex-col gap-3 items-center justify-center">
                                <img src={svg} alt="wihout services image" className="w-[150px] h-[150px]"/>
                                <p className="text-[1rem] font-[Rubik]">Sem dominios</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}