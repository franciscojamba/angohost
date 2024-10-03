import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import usePayStore from "../../../../../contexts/payStore"
import { useEffect, useState } from "react"
import { domain, IDomainExtension } from "../../../../../interfaces/domain"
import { toast } from "sonner"
import LoaderComponent from "../../../../cliente/components/loader/view"
import useUtils from "../../../../../utils/useutils"
import { RejectModal } from "@/pages/(public)/components/rejectModal"
import { DomainStatusModal } from "@/pages/(public)/components/domainStatusModal"
import useCart from "@/hooks/useCart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Skeleton from "react-loading-skeleton"

const formSchema = z.object({
    domain: z.string().min(3, 'Insira o domínio').regex(/^[a-zA-Z0-9-]{3,}$/, '')
})

type formType = z.infer<typeof formSchema>


export default function CheckDomainAvailableForm() {

    const [opendedReject, setOpendedReject] = useState(false)
    const [opened, setOpened] = useState(false)
    const { currentDomainAvailable, currentDomain } = usePayStore()

    const { cartLenght } = useCart()

    function openModal() {
        if (cartLenght >= 1) {
            setOpendedReject(true)
        }
        else {
            setOpened(true)
        }
    }

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { domainExtensions, currentDomainExtension, actions: {
        getDomainExtensions,
        setCurrentDomainAvailable,
        setCurrentDomainExtension,
        setCurrentDomain,
        setDomainVerifyProcessComplete,
    } } = usePayStore()

    const { handleSubmit, register } = useForm<formType>({
        resolver: zodResolver(formSchema)
    })

    useEffect(() => {
        getDomainExtensions()
    }, [])


    async function verifyDomain(data: formType) {

        if (currentDomainExtension.tipo !== '') {
            setIsLoading(true)
            setCurrentDomain(`${data.domain}${currentDomainExtension.tipo}`)
            try {
                const json: domain = await checkDomain(`${data.domain}${currentDomainExtension.tipo}`)
                if (!json.domain_status && json.nameservers.length === 0) {
                    toast.success('Dominio disponivel')
                    setCurrentDomainAvailable(true)
                }
                else {
                    toast.error('DOminio indisponivel')
                    setCurrentDomainAvailable(false)
                }
                setDomainVerifyProcessComplete(true)
                return json
            }
            catch (error) {
                console.log(error)
            }
            finally {
                setDomainVerifyProcessComplete(true)
                setIsLoading(false)
                const inp = document.querySelector('.inputVerifyDomain') as HTMLInputElement
                inp.value = ''
                openModal()
            }
        }
        else {
            toast.error('Selecione a sua extensao!')
        }
    }

    const { checkDomain } = useUtils()

    useEffect(() => {
        if (domainExtensions && domainExtensions[1]) {
            setCurrentDomainExtension(domainExtensions[1])
        }
    }, [domainExtensions])


    if (domainExtensions.length === 0) {
        return <Skeleton className="w-[500px] h-[70px] rounded-[20px]" baseColor="#00538e" highlightColor="#0161a0"/>
    }

    return (
        <form onSubmit={handleSubmit(verifyDomain)} className="search-bar-dominio-center-flex flex-col md:flex-row gap-y-2 mt-2"  >
            <div className="flex items-center p-0 justify-center w-full md:w-max bg-white border-[1px] border-solid border-[#0161a044] rounded-l-[8px]">
                <div className="border-r-[#0161a044] border-r-[1px] border-r-solid h-[66px] flex items-center justify-center rounded-l-[8px] px-6 bg-zinc-50" >
                    <p style={{ marginBottom: 0 }}  >www.</p>
                </div>
                <input {...register('domain')} type="text" placeholder="seudominioperfeito" className="inputVerifyDomain h-[64px] w-[400px] sm:w-[300px] ml-6 rounded-r-[8px]" />
                {
                    domainExtensions && domainExtensions[1] && (
                        <Select defaultValue={domainExtensions[1].id.toString()} onValueChange={(value) => {
                            const selected = domainExtensions.find(item => item.id.toString() === value);
                            setCurrentDomainExtension(selected as IDomainExtension);
                        }}>
                            <SelectTrigger className="w-[30%] h-full border-none">
                                <SelectValue placeholder="Extensão" />
                            </SelectTrigger>
                            <SelectContent>
                                {domainExtensions.map((item, _index) => (
                                    <SelectItem key={_index} value={item.id.toString()}>{item.tipo}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    )
                }
            </div>
            <button style={{ textDecoration: "none" }} className=" md:rounded-r-[8px] text-white font-medium w-full md:w-[150px] h-[67px] flex items-center justify-center bg-[#0161a0]">
                {isLoading ? <LoaderComponent color="#fff" /> : "Verificar"}
            </button>
            <RejectModal openedReject={opendedReject} setOpenedReject={setOpendedReject} />
            <DomainStatusModal opened={opened} setOpened={setOpened} status={currentDomainAvailable} currentDomain={currentDomain} price={(currentDomain.split('.')[0].length === 3  && (currentDomainExtension.tipo === '.ao' || currentDomainExtension.tipo === '.co.ao')) ? 300000 : currentDomainExtension.preco}/>
        </form>
    )
}