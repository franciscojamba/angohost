import { TailSpin } from "react-loader-spinner";
import api from "../../../../../services/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import CountdownClock from "@/pages/(public)/components/relogio/relogio";

interface typeTempo {
    id: string
    tempo: string
}

export default function Header() {

    const [targetDate, setTargetDate] = useState<string>("2024-07-22T23:59:59")

    const buscarTempo = async (id: string) => {
        const tempo = await api.get(`/tempo/${id}`)
            .then((response) => response.data)
        return tempo
    }

    const { data, isLoading: isLoadingClock } = useQuery({
        queryKey: ["tempo-promo", "id"],
        queryFn: () => buscarTempo("c967c40b-a0d9-4e07-b792-2584a9c2d5e4")
    })

    async function tempoPub() {
        const tempo: typeTempo = await data
        setTargetDate(tempo.tempo)
    }

    useEffect(() => {
        tempoPub()
    }, [data])

    return (
        <header className='w-max flex flex-row items-center justify-center bg-transparent gap-6'>
            <div className="flex items-start justify-center flex-col">
                <h1 className='text-gradient font-semibold sm:font-bold text-[1rem] text-center sm:text-[1.7rem] mt-3' style={{ lineHeight: '30px' }}> Oferta especial! </h1>
                <p className='text-[#0e465d] mt-1 text-[0.8rem] font-regular'>Domínio <span className='bg-[#305f7433] text-black py-1 px-2'>.com</span> grátis ao escolher o ciclo anual</p>
            </div>
            {isLoadingClock ? <TailSpin color="red" width={20} /> : <CountdownClock  targetDate={targetDate} />}
        </header>
    )
}