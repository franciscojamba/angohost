import { useEffect, useState } from "react";






export default function useTempo(){
    const [tempoPromo,setTempPromo]=useState<string>("2024-10-12T23:59:59")

    useEffect(()=>{
        setTempPromo(tempoPromo)
    })



    return{
        tempoPromo
    }

}