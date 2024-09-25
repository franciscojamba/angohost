import useCart from "@/hooks/useCart"
import useUtils from '@/utils/useutils'
import { Trash } from "lucide-react"

export default function CartProducts() {

    const { getCartProducts, removeFromCart } = useCart()

    const { formatMoney } = useUtils()

    return (
        <>
            {
                getCartProducts && getCartProducts().map((item, _index) => (
                    <div key={_index} className="w-full h-[80px] hover:border-[#4e93e23f] duration-300 border-solid border bg-[#ffffff] rounded-[12px] flex items-center justify-between px-6">
                        <div className="w-full flex flex-col items-start justify-start">
                            <p style={{lineHeight: '15px'}} className="text-[1.1rem] text-[#021220df] font-semibold">{item.name}</p>
                            {
                                !item.price ? 
                                <p className="text-[0.8rem] text-[#12753A] bg-[#12753A11] py-1.5 px-4 rounded-full">Grátis</p>
                                :
                                <p className="text-[0.8rem] text-[#051b2cd0]">{formatMoney(item.price)}</p>
                            }
                        </div>
                        {item.domain as string && <><div className="w-full flex flex-col items-center justify-center">
                            <p style={{lineHeight: '15px'}} className="text-[0.9rem] text-[#021220df] font-semibold">Domínio associado</p>
                            <p className="text-[0.8rem] text-[#051b2cd0]">{item.domain as string}</p>
                        </div></>}
                        {item.ciclo as number && <><div className="w-full flex flex-col items-center justify-center">
                            <p style={{lineHeight: '15px'}} className="text-[0.9rem] text-[#021220df] font-semibold">Duração</p>
                            <p className="text-[0.8rem] text-[#051b2cd0]">{item.ciclo as number} meses</p>
                        </div></>}
                        {item.cicle as number && <><div className="w-full flex flex-col items-center justify-center">
                            <p style={{lineHeight: '15px'}} className="text-[0.9rem] text-[#021220df] font-semibold">Duração</p>
                            <p className="text-[0.8rem] text-[#051b2cd0]">{item.cicle as number} meses</p>
                        </div></>}
                        {item.emailQuantity as number && <div className="w-full flex flex-col items-center justify-center">
                            <p style={{lineHeight: '15px'}} className="text-[0.9rem] text-[#021220df] font-semibold">Contas</p>
                            <p className="text-[0.8rem] text-[#051b2cd0]">{item.emailQuantity as number}</p>
                        </div>}
                        {<div className=" flex items-start justify-end">
                            <button onClick={()=>{
                                removeFromCart(item.id)
                            }} className="p-[10px] bg-white rounded-[12px] border"><Trash size={18} strokeWidth={1.3}/></button>
                        </div>}
                    </div>
                ))
            }

        </>
    )
}