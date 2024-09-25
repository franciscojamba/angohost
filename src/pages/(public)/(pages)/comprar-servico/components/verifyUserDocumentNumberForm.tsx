import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { GoArrowRight } from "react-icons/go"
import { z } from "zod"
import LoaderComponent from "../../../../cliente/components/loader/view"
import { useState } from "react"
import usePayStore from "../../../../../contexts/payStore"
import { toast } from "sonner"
import proxy from "@/services/proxy"

const formSchema = z.object({
    docNumber: z.string().min(10, 'Insira o número do seu BI ou NIF da sua empresa')
})

type formType = z.infer<typeof formSchema>

interface IYabaduRespose {
    sucess: boolean,
    message: string
    data: {
        numero: string,
        nome: string
    }
}

interface UserPersonalData {
    id_number: string;
    first_name: string;
    last_name: string;
    gender_name: string;
    birth_date: string;
    father_first_name: string;
    father_last_name: string;
    mother_first_name: string;
    mother_last_name: string;
    marital_status_name: string;
    birth_province_name: string;
    birth_municipality_name: string;
    issue_date: string;
    expiry_date: string;
    issue_place: string;
    residence_country_name: string;
    residence_province_name: string;
    residence_municipality_name: string;
    residence_commune_name: string;
    residence_neighbor: string;
    residence_address: string;
}

interface ApiResponse {
    messageType: number;
    message: string | null;
    data: {
        code: number;
        message: string;
        data: UserPersonalData;
    };
}

const NIF_REGEX = /^[0-9]{10}$/
const BI_REGEX = /^[0-9]{9}[a-zA-Z]{2}[0-9]{3}$/

export default function VerifyUserDocumentNumberForm() {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { actions: {
        setClientNIF,
        setFormStep,
        setIsNIFLoaded,
        setIsBILoaded,
        setClientLoadedInfo
    } } = usePayStore()

    const { register, handleSubmit, formState: { errors } } = useForm<formType>({
        resolver: zodResolver(formSchema)
    })

    async function verifyBi(data: formType) {
        setClientNIF(data.docNumber)
        setIsLoading(true)
        if (NIF_REGEX.test(data.docNumber)) {
            try {
                const response: IYabaduRespose = await (await proxy.get(`/yabaduu.ao/ao/actions/nif.ajcall.php?nif=${data.docNumber}`)).data
                if (response.sucess) {
                    toast.success('NIF verificado com sucesso!')
                    setIsNIFLoaded(true)
                    setIsBILoaded(false)
                    setIsLoading(false)
                    setClientLoadedInfo({
                        name: response.data.nome
                    })
                    setFormStep(4)
                }
                else {
                    toast.error('NIF Invalido!')
                }
            }
            catch (error) {
                console.log(error)
            }
            finally {
                setIsLoading(false)
            }
        }
        else if (BI_REGEX.test(data.docNumber)) {
            setIsLoading(true)
            try {
                const resp:ApiResponse = await(await proxy.get(`/https://api.inagbe.gov.ao/api/v1/consultarBi?bi=${data.docNumber}`)).data
                toast.success('BI Verificado com sucesso!')
                setClientLoadedInfo({
                    name: `${resp.data.data.first_name} ${resp.data.data.last_name}`,
                })
                setIsBILoaded(true)
                setIsNIFLoaded(false)
                setFormStep(4)
            }
            catch {
                toast.error('Ocorreu um erro ao processar a sua solicitação!')
            }
            finally {
                setIsLoading(false)
            }
        }
        else {
            toast.error('Valor inválido!')
            setIsLoading(false)
        }
        setIsLoading(false)
    }

    return (
        <form onSubmit={handleSubmit(verifyBi)} className='w-full sm:w-max h-max flex flex-col items-start justify-start mb-[30px]'>
            <label htmlFor="" style={{ color: errors.docNumber ? "#f00" : "#222" }} className='font-semibold text-[0.9rem]'>Número do BI ou NIF da Empresa*</label>
            <div onSubmit={handleSubmit(verifyBi)} className='flex gap-2 flex-col w-full sm:flex-row'>
                <input {...register('docNumber')} type="text" style={{ borderColor: errors.docNumber ? "#f00" : "#ddd" }} placeholder='Insira o número do seu NIF ou NIF da sua empresa' className='w-full sm:w-[400px] h-[49px] rounded-[12px] bg-white border-[1px] border-solid px-4' />
                <button disabled={isLoading} className='sm:w-max h-[49px] bg-[#0e3f7b] transition-all duration-300 text-white text-[0.9rem] font-regular gap-2 flex items-center justify-center px-4 rounded-[12px]'>{isLoading ? <LoaderComponent color='#fff' /> : <>Verificar <GoArrowRight color='#fff' size={18} /></>}</button>
            </div>
            {errors.docNumber && <p className='w-full text-left text-red-500 mt-1'>{errors.docNumber.message}</p>}
        </form>
    )
}