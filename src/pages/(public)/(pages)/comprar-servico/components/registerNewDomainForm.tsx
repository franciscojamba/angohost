import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import usePayStore from "../../../../../contexts/payStore"
import LoaderComponent from "../../../../cliente/components/loader/view"
import { useState } from "react"
import { GoArrowRight } from "react-icons/go"
import Cookies from "js-cookie"
import { toast } from "sonner"

const formSchema = z.object({
    nome: z.string().min(1, 'Insira o seu nome'),
    nif: z.string().min(10, 'Insira o seu NIF'),
    endereco: z.string().min(1, 'Insira o seu endereço'),
    pais: z.string().min(3, 'Insira o seu pais')
})

type formType = z.infer<typeof formSchema>

export default function RegisterNewDomainForm() {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { register, handleSubmit, formState: { errors } } = useForm<formType>({
        resolver: zodResolver(formSchema)
    })

    const { actions: {
        setCurrentDomainAvailable,
        setDomainVerifyProcessComplete,
        setCurrentDomain,
        setCurrentDomainExtension,
        setFormStep,
    } } = usePayStore()

    function handleCancel() {
        setCurrentDomainAvailable(false)
        setDomainVerifyProcessComplete(false)
        setCurrentDomain('')
        setCurrentDomainExtension({
            desconto: 0,
            id: 0,
            preco: 0,
            tipo: ''
        })
    }

    function registerDomain(data: formType) {
        setIsLoading(true)
        setTimeout(()=>{
            const newDomainTitular = {
                nif: data.nif,
                nome: data.nome,
                endereco: data.endereco,
                pais: data.pais
            }
            Cookies.set('newDomainTitular', JSON.stringify(newDomainTitular))
            setFormStep(2)
            toast.success('Dominio registado com sucesso!')
        }, 2000)
    }

    return (
        <form onSubmit={handleSubmit(registerDomain)} className="w-full flex flex-col items-center justify-center">
            <div className='flex gap-3 mt-[20px]'>
                <div className='flex flex-col w-max h-max'>
                    <label htmlFor="" style={{ color: errors.nome ? "#f00" : "#222" }} className='font-semibold text-[0.9rem]'>Nome*</label>
                    <input type="text" {...register('nome')} style={{ borderColor: errors.nome ? "#f00" : "#ddd" }} placeholder='Insira o seu nome' className='w-[300px] h-[49px] rounded-[12px] bg-white border-[1px] border-solid px-4' />
                    {errors.nome && <p className='w-full text-left text-red-500 mt-1'>{errors.nome.message}</p>}
                </div>
                <div className='flex flex-col w-max h-max'>
                    <label htmlFor="" style={{ color: errors.nif ? "#f00" : "#222" }} className='font-semibold text-[0.9rem]'>NIF*</label>
                    <input type="text" {...register('nif')} style={{ borderColor: errors.nif ? "#f00" : "#ddd" }} placeholder='Insira o seu NIF' className='w-[300px] h-[49px] rounded-[12px] bg-white border-[1px] border-solid px-4' />
                    {errors.nif && <p className='w-full text-left text-red-500 mt-1'>{errors.nif.message}</p>}
                </div>
            </div>
            <div className='flex gap-3 mt-[20px]'>
                <div className='flex flex-col w-max h-max'>
                    <label htmlFor="" style={{ color: errors.pais ? "#f00" : "#222" }} className='font-semibold text-[0.9rem]'>País*</label>
                    <input type="text" {...register('pais')} style={{ borderColor: errors.pais ? "#f00" : "#ddd" }} placeholder='Insira o seu pais' className='w-[300px] h-[49px] rounded-[12px] bg-white border-[1px] border-solid px-4' />
                    {errors.pais && <p className='w-full text-left text-red-500 mt-1'>{errors.pais.message}</p>}
                </div>
                <div className='flex flex-col w-max h-max'>
                    <label htmlFor="" style={{ color: errors.endereco ? "#f00" : "#222" }} className='font-semibold text-[0.9rem]'>Endereço*</label>
                    <input type="endereco" {...register('endereco')} style={{ borderColor: errors.endereco ? "#f00" : "#ddd" }} placeholder='Insira o seu endereço' className='w-[300px] h-[49px] rounded-[12px] bg-white border-[1px] border-solid px-4' />
                    {errors.endereco && <p className='w-passwordfull text-left text-red-500 mt-1'>{errors.endereco.message}</p>}
                </div>
            </div>
            <div className='w-[617px] h-max flex items-center justify-end gap-3'>
                <button onClick={handleCancel} className='px-4 mt-4 h-[49px] rounded-[12px] border-[1px] border-solid flex items-center justify-center gap-3 bg-red-100 text-red-600 border-red-300'> Cancelar </button>
                <button disabled={isLoading} className='px-4 mt-4 h-[49px] rounded-[12px] border-[1px] border-solid flex items-center justify-center gap-3 bg-blue-100 text-cyan-600 border-blue-300'>{isLoading ? <LoaderComponent color="#fff" /> : <>Avançar <GoArrowRight size={18} /></>}</button>

            </div>
        </form>
    )
}