import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import usePayStore from "../../../../../contexts/payStore"
import { useEffect } from "react"

const formSchema = z.object({
    telefone: z.string().min(1, 'Insira o seu telefone'),
    email: z.string().min(1, "Insira o seu email").email('Insira um email valido!'),
    endereco: z.string().min(1, "Insira o seu endereço"),
    senha: z.string().min(6, "Crie uma senha superior à 6 caracteres"),
    reSenha: z.string().min(6, "Insira novamente a senha criada")
}).refine(data => data.senha === data.reSenha, {
    message: "As senhas não coincidem",
    path: ["reSenha"],
})

type formType = z.infer<typeof formSchema>

interface ISignUpBIFormProps {
    location: {
        pais: string,
        provincia: string
    },
    submitBI: (data: formType) => void
}

export default function SignUpBIForm({ location, submitBI }: ISignUpBIFormProps) {

    const { handleSubmit, register, formState: { errors } } = useForm<formType>({
        resolver: zodResolver(formSchema)
    })



    const { clientLoadedInfo, isBILoaded } = usePayStore()

    useEffect(() => {
        console.log(clientLoadedInfo)
    } ,[])

    return (
        <form onSubmit={handleSubmit(submitBI)} className='formBI w-full'>
            <div className='flex gap-3 w-full'>
                <div className='flex flex-col w-full lg:w-max h-max'>
                    <label htmlFor="" className='font-semibold text-[0.9rem] text-[#222]'>Nome*</label>
                    <input type="text" value={clientLoadedInfo.name} disabled={isBILoaded} className='w-full lg:w-[600px] border-[#ddd] h-[49px] rounded-[12px] bg-white border-[1px] border-solid px-4' />
                </div>
            </div>
            <div className='flex gap-3 mt-[20px] w-full'>
                <div className='flex flex-col w-max h-max'>
                    <label htmlFor="" style={{ color: errors.email ? "#f00" : "#222" }} className='font-semibold text-[0.9rem]'>Email*</label>
                    <input {...register("email")} type="email" style={{ borderColor: errors.email ? "#f00" : "#ddd" }} placeholder='Insira o seu email' className='w-full lg:w-[400px] h-[49px] rounded-[12px] bg-white border-[1px] border-solid px-4' />
                    {errors.email && <p className='w-full text-left text-red-500 mt-1'>{errors.email.message}</p>}
                </div>
                <div className='flex flex-col w-max h-max'>
                    <label htmlFor="" style={{ color: errors.telefone ? "#f00" : "#222" }} className='font-semibold text-[0.9rem]'>Telefone*</label>
                    <input {...register("telefone")} type="number" style={{ borderColor: errors.telefone ? "#f00" : "#ddd" }} placeholder='Insira o número de telefone' className='w-full lg:w-[400px] h-[49px] rounded-[12px] bg-white border-[1px] border-solid px-4' />
                    {errors.telefone && <p className='w-full text-left text-red-500 mt-1'>{errors.telefone.message}</p>}
                </div>
            </div>
            <div className='flex gap-3 mt-[20px] w-full'>
                <div className='flex flex-col w-max h-max'>
                    <label htmlFor="" className='font-semibold text-[0.9rem] text-[#222]'>País*</label>
                    <input type="text" value={location.pais} disabled className='w-full lg:w-[400px] h-[49px] rounded-[12px] border-[#ddd] bg-white border-[1px] border-solid px-4' />
                </div>
                <div className='flex flex-col w-max h-max'>
                    <label htmlFor="" className='font-semibold text-[0.9rem] text-[#222]'>Província*</label>
                    <input type="text" value={location.provincia} disabled className='w-full lg:w-[400px] h-[49px] border-[#ddd] rounded-[12px] bg-white border-[1px] border-solid px-4' />
                </div>
            </div>
            <div className='flex flex-col h-max mt-4 w-full'>
                <label htmlFor="" style={{ color: errors.endereco ? "#f00" : "#222" }} className='font-semibold text-[0.9rem]'>Endereço*</label>
                <input {...register("endereco")} type="text" style={{ borderColor: errors.endereco ? "#f00" : "#ddd" }} placeholder='Município, Bairro, Rua, Casa' className='w-full lg:w-[817px] h-[49px] rounded-[12px] bg-white border-[1px] border-solid px-4' />
                {errors.endereco && <p className='w-full text-left text-red-500 mt-1'>{errors.endereco.message}</p>}
            </div>
            <div className='flex gap-3 mt-[20px] w-full'>
                <div className='flex flex-col w-max h-max'>
                    <label htmlFor="" style={{ color: errors.senha ? "#f00" : "#222" }} className='font-semibold text-[0.9rem]'>Senha*</label>
                    <input {...register("senha")} type="password" placeholder='Crie uma senha' style={{ borderColor: errors.senha ? "#f00" : "#ddd" }} className='w-full lg:w-[400px] h-[49px] rounded-[12px] bg-white border-[1px] border-solid px-4' />
                    {errors.senha && <p className='w-full text-left text-red-500 mt-1'>{errors.senha.message}</p>}
                </div>
                <div className='flex flex-col w-max h-max'>
                    <label htmlFor="" style={{ color: errors.reSenha ? "#f00" : "#222" }} className='font-semibold text-[0.9rem]'>Confirme a senha*</label>
                    <input {...register("reSenha")} type="password" placeholder='Repita a senha' style={{ borderColor: errors.reSenha ? "#f00" : "#ddd" }} className='w-full lg:w-[400px] h-[49px] rounded-[12px] bg-white border-[1px] border-solid px-4' />
                    {errors.reSenha && <p className='w-full text-left text-red-500 mt-1'>{errors.reSenha.message}</p>}
                </div>
            </div>
            <button className='w-[0px] h-[0px] submitBI opacity-0'> </button>
        </form>
    )
}