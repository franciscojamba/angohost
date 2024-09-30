import { useEffect, useState } from "react";
import { PricingCard } from "../card-plano";
import "./style.css"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import usePublicStore from "@/contexts/publicStore";
import { usePlans } from "@/repositories/plansRepository";
import { IPlano } from "@/interfaces/plan.interface";
import { BuyHostingModal } from "../buyHostingModal";
import useCart from "@/hooks/useCart";
import { RejectModal } from "../rejectModal";


export const ListaDePlano = () => {

    const { plans, actions: { setPlans } } = usePublicStore()
    const { data, isLoading, isError, isSuccess } = usePlans()
    const [opendedModal, setOpenedModal] = useState(false)
    const [planIndex, setPlanIndex] = useState(0)
    const [opendedReject, setOpenedReject] = useState(false)
    const { cartLenght } = useCart()

    useEffect(() => {
        const filtroPlanoGuro=data?.filter(plano=>plano.titulo!=="Guru") 
        setPlans(filtroPlanoGuro as IPlano[])


        console.log(data)
    }, [data])

    function openModal(index: number) {
        if (cartLenght >= 1) { 
            setOpenedReject(true)
        }
        else {
            setPlanIndex(index)
            console.log(index)
            setOpenedModal(true)
        }
    }

    return (
        <>
            <div className="nossos-planos" style={{ paddingTop: '120px', paddingBottom: '120px', margin: '0px', flexFlow: 'wrap' }}>
                <div className="plano-title" style={{ marginBottom: '50px' }}>
                    <h2>Escolha o seu pacote de Hospedagem</h2>
                    <p>Pacotes de hospedogem com recursos para suportor qualquer tipo de website</p>
                </div>

                <div className="pricing-container" style={{ padding: "0px 20px 0px 20px", display: 'flex', flexFlow: 'wrap' }}>
                    {((plans && plans.length > 0) && isSuccess) && plans.map((plan, index) => (
                        <PricingCard link={() => openModal(index)} key={index} cicle={plan.ciclos[0].ciclo.multiplicador + `meses`} descontos={plan.descontos} descricao={plan.descricao} id={plan.id} planoPopular={plan.planoPopular} preco={plan.preco * 3} precoComDesconto={plan.precoComDesconto} recursos={plan.recursos} titulo={plan.titulo} />
                    ))}
                    {
                        ((plans && plans.length === 0) && isSuccess) && <div>Sem planos</div>
                    }
                    {
                        (isError) && <div>Erro ao obter planos <br /> Verifique a sua conexão com a internet.</div>
                    }
                    {
                        isLoading && (
                            <div className="flex gap-[30px]">
                                <Skeleton baseColor="#fff" highlightColor="#edf3f8" height={800} className="rounded-[16px] w-[370px]" />
                                <Skeleton baseColor="#fff" highlightColor="#edf3f8" height={800} className="rounded-[16px] w-[370px]" />
                                <Skeleton baseColor="#fff" highlightColor="#edf3f8" height={800} className="rounded-[16px] w-[370px]" />
                            </div>
                        )
                    }
                    <BuyHostingModal plans={plans} opened={opendedModal} setOpened={setOpenedModal} planIndex={planIndex}/>
                    <RejectModal openedReject={opendedReject} setOpenedReject={setOpenedReject}/>
                </div>
            </div>
        </>
    )
}
