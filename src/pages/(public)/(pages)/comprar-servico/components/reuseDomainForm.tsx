import { useState } from "react"
import usePayStore from "../../../../../contexts/payStore"
import { toast } from "sonner"

export default function ReuseDomainForm() {

    const [domain, setDomain] = useState<string>('')
    const { actions: {
        setCurrentDomain,
        setFormStep,
    } } = usePayStore()

    function addToCart() {
        setCurrentDomain(domain)
        setFormStep(2)
        toast.success('Dominio adicionado com sucesso!')
    }

    return (
        <form className="search-bar-dominio-center-flex flex-col md:flex-row gap-y-2 mt-4"  >
            <div className="flex items-center p-0 justify-center w-full md:w-max bg-white border-[1px] border-solid border-[#0161a044] rounded-l-[8px]">
                <div className="border-r-[#0161a044] border-r-[1px] border-r-solid h-[66px] flex items-center justify-center rounded-l-[8px] px-6 bg-zinc-50" >
                    <p style={{ marginBottom: 0 }}>www.</p>
                </div>
                <input onChange={(e) => setDomain(e.target.value)} value={domain} type="text" placeholder="seudominio" className=" h-[64px] w-[300px] ml-6 rounded-r-[8px]" />
            </div>
            <button onClick={addToCart} style={{ textDecoration: "none" }} className=" md:rounded-r-[8px] text-white font-medium w-full md:w-[150px] h-[67px] flex items-center justify-center bg-[#0161a0]">
                Usar dominio
            </button>
        </form>
    )
}