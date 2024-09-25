import usePublicStore from "@/contexts/publicStore"
import { IPlano } from "@/interfaces/plan.interface"
import { usePlans } from "@/repositories/plansRepository"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import hostingsvg from '@/assets/svgs/cloud-hosting.svg'
import Skeleton from "react-loading-skeleton"
import { ArrowRight } from "lucide-react"

export default function HostingPlans() {

    const { plans, actions: { setPlans } } = usePublicStore()
    const { data, isLoading, isError, isSuccess } = usePlans()

    useEffect(() => {
        setPlans(data as IPlano[])
    }, [data])

    return (
        <>
            {(plans && isSuccess) && plans.map((plan, _index) => (
                <Link key={_index} to={'/hospedagem-de-sites'} className="w-[250px] h-[150px] hover:border-[#4e93e23f] duration-300 border-solid border-[#edf3f8] border-[1px] bg-[#edf3f8] rounded-[20px] flex flex-col items-center justify-center px-6">
                    <div className="w-full flex items-center justify-start gap-2">
                        <img src={hostingsvg} alt="hosting" className="w-[60px]" /><p className="text-[1.1rem] text-[#135183] font-semibold">{plan.titulo}</p>
                    </div>
                    <p className="text-[0.8rem] text-[#0e324f8b]">{plan.descricao}<ArrowRight className="inline ml-2" size={18} /></p>
                </Link>
            ))}
            {isLoading && <>
                <Skeleton className="w-[300px] h-[200px] rounded-[12px]"/>
                <Skeleton className="w-[300px] h-[200px] rounded-[12px]"/>
                <Skeleton className="w-[300px] h-[200px] rounded-[12px]"/>
            </>}
            {isError && <div className="flex items-center justify-center">Erro ao obter planos de hospedagem</div>}
        </>
    )
}