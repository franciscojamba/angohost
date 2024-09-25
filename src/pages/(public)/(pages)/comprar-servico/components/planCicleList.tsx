import { useEffect } from "react"
import usePayStore from "../../../../../contexts/payStore"
import useUtils from "../../../../../utils/useutils"
import Skeleton from "react-loading-skeleton"

interface IPlanCicleListProps {
    planId: string
}

export default function PlanCicleList({ planId }: IPlanCicleListProps) {

    const { planCicles, currentPlanCicle, isBILoaded, isNIFLoaded, currentPlan, actions: {
        setFormStep,
        setCurrentPlanCicle,
        getCurrentPlan,
    } } = usePayStore()

    const { isAuthenticated, formatMoneyWithoutKz } = useUtils()

    useEffect(() => {
        getCurrentPlan(planId)
    }, [])

    return (
        <div className='w-full h-max flex items-center justify-center gap-[40px] flex-wrap mt-[50px] px-4 sm:px-0'>
            {planCicles.map((cicle, _index) => (
                <div key={_index} data-focused={currentPlanCicle.id === cicle.id ? true : false} className='cardCicle w-full sm:w-[220px] bg-white cursor-pointer duration-300 transition-all h-max p-2  pt-6 pb-4 border-[1px] border-solid flex items-center justify-start flex-col rounded-[20px]' onClick={() => {
                    if (isAuthenticated()) {
                        setFormStep(4)
                        setCurrentPlanCicle(cicle)
                    }
                    else {
                        if (isBILoaded || isNIFLoaded) {
                            setFormStep(4)
                        }
                        else {
                            setFormStep(3)
                        }
                        setCurrentPlanCicle(cicle)
                    }
                }}>
                    <h1 className='w-full text-center text-[#0e3f7b] text-[1rem] font-semibold mt-3' style={{ lineHeight: 0 }}>{cicle.duracao}</h1>
                    <div className='w-max h-max flex items-center justify-center gap-2 mt-[40px]'>
                        <p className='text-[0.8rem] mt-2 font-regular opacity-70'>{cicle.nome}</p>
                        {/* <p className='w-max py-1 px-2 text-[0.8rem] bg-[#0c61ca24] text-[#0e3f7b] rounded-full'>Poupe {selectedPlano?.descontos}</p> */}
                    </div>
                    <div className='w-full h-max flex items-center justify-center gap-1'>
                        <p className='text-[2.1rem] text-[#0e3f7b] font-bold'>{formatMoneyWithoutKz(currentPlan.preco as number * cicle.multiplicador)}</p>
                        {/* <p className='opacity-80 text-[#0e3f7b]'>{cicle.duracao}</p> */}
                    </div>
                    <p className='w-full text-center text-[0.7rem] opacity-70 mt-[30px]'>{currentPlan.descricao}</p>
                </div>
            ))}
            {
                planCicles.length === 0 && <div className="w-full h-full flex items-center justify-center">
                    <div className="flex flex-wrap gap-3 items-center justify-center">
                        <Skeleton className="w-[220px] rounded-[12px] h-[270px]" baseColor="#ffffff55"/>
                        <Skeleton className="w-[220px] rounded-[12px] h-[270px]" baseColor="#ffffff55"/>
                        <Skeleton className="w-[220px] rounded-[12px] h-[270px]" baseColor="#ffffff55"/>
                    </div>
                </div>
            }
        </div>
    )
}