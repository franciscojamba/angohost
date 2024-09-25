import { GoPlus, GoSearch } from "react-icons/go";
import '@/pages/cliente/styles/globals.css'
import { Link } from "react-router-dom";
import useClientStore from "@/contexts/clientStore";
import Skeleton from "react-loading-skeleton";
import useUtils from "@/utils/useutils";
import { useEffect, useMemo, useState } from "react";
import svg from '@/assets/svgs/withoutservices.svg'
import { useClientPlans } from "@/repositories/clientPlansRepository";
import { IServicoPlano } from "@/interfaces/servico.interface";
import HostCard from "@/pages/cliente/components/hostCard/view";

export default function HomeHosting() {

    const { plans, actions: { setClientPlans } } = useClientStore()
    const { getClientID } = useUtils()
    const { data, isLoading, isError, isSuccess } = useClientPlans(getClientID())
    const [search, setSearch] = useState('')

    useEffect(() => {
        setClientPlans(data as IServicoPlano[])
    }, [data])

    const filteredPlans = useMemo(() => {
        if (!plans || plans.length === 0) {
            return [];
        }
        return plans.filter((plan) =>
            plan.dominio && plan.dominio.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, plans]);

  
    return (
        <div className="flex w-full h-full">
            <div className="w-full">
                <div className="flex items-center justify-between w-full h-[80px] my-[15px]">
                    <div className="flex flex-col items-start justify-center">
                        <h1 className="text-[#616161] font-[400] text-[2rem] font-[Rubik]" style={{ lineHeight: 1 }}>Serviços de Hospedagem</h1>
                        <p className="font-[Rubik] mt-2 opacity-70">Gerencie os seus planos.</p>
                    </div>
                </div>
                <div className='w-full flex gap-2 justify-center font-[Rubik]'  >
                    <div className="flex gap-4 items-center justify-start w-full">
                        <h1 className="text-[#393939] font-[400] text-[1.3rem] font-[Rubik]" style={{ lineHeight: 1 }}>Lista de produtos</h1>
                        <Link to={'/hospedagem-de-sites'} className="flex items-center justify-center gap-2 h-[38px] text-[0.8rem] px-3 rounded-[8px] text-cyan-800 font-[Rubik] no-underline border-[1px] border-solid border-[#305b83]" >Contratar produto <GoPlus size={18} color="rgb(21 94 117)" /></Link>
                    </div>
                    <div className="w-max h-[44px] border-[1px] border-solid rounded-[12px] overflow-hidden p-2 flex bg-white">
                        <div className="flex items-center justify-center">
                            <GoSearch size={16} color="#888" className="ml-2" />
                        </div>
                        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="O que está procurando?" className="w-[400px] font-[Rubik] text-[0.8rem] h-full px-3" />
                    </div>
                </div>
                <div className="w-full bg-transparent overflow-y-scroll flex-col gap-y-3 mt-[15px] rounded-[12px] flex" style={{ height: 'calc(100vh - 240px)' }}>
                    {
                        isLoading && (
                            <div className="w-full">
                                <Skeleton className="w-full h-[80px] rounded-[12px]" baseColor="#fafafa88" highlightColor="#aaaaff22" />
                                <Skeleton className="w-full h-[80px] rounded-[12px] mt-1" baseColor="#fafafa88" highlightColor="#aaaaff22" />
                                <Skeleton className="w-full h-[80px] rounded-[12px] mt-1" baseColor="#fafafa88" highlightColor="#aaaaff22" />
                            </div>
                        )
                    }
                    {
                        (isSuccess && filteredPlans) && filteredPlans.map((item, _index) => (
                            <HostCard key={_index} service={item} />
                        ))
                    }
                    {
                        (isError) && (
                            <div className="w-full h-full flex flex-col gap-3 items-center justify-center">
                                <img src={svg} alt="wihout services image" className="w-[150px] h-[150px]" />
                                <p className="text-[1rem] font-[Rubik]">Erro ao obter serviços</p>
                            </div>
                        )
                    }
                    {
                        ((plans && plans.length === 0) && isSuccess) && (
                            <div className="w-full h-full flex flex-col gap-3 items-center justify-center">
                                <img src={svg} alt="wihout services image" className="w-[150px] h-[150px]" />
                                <p className="text-[1rem] font-[Rubik]">Sem dominios</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}