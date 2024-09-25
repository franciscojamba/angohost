import { TailSpin } from "react-loader-spinner";
import CountdownClockTwo from "../../../components/relogio/relogio2";
import api from "../../../../../services/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

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
        <header className='w-full py-4 sm:py-0 h-max pb-3 rounded-[12px] flex flex-col gap-y-3 md:flex-row items-center justify-between' style={{ background: 'linear-gradient(122deg, rgba(1,38,83,1) 12%, rgba(0,109,176,1) 100%)' }}>
            <div>
                <h1 className='text-white font-semibold text-[1.4rem] text-center sm:text-[2rem] mt-3' style={{ lineHeight: '30px', letterSpacing: '2px' }}> Oferta especial! </h1>
                <p className='text-white text-[0.8rem] mt-2 font-light'>Domínio <span className='bg-[#ffffff22] py-1 px-2'>.com</span> grátis ao escolher o ciclo anual</p>
            </div>
            {isLoadingClock ? <TailSpin color="red" width={20} /> : <CountdownClockTwo  targetDate={targetDate} />}
        </header>
    )
}