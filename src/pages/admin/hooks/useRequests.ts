import { useEffect, useState } from "react";
import useAdminStore from "../contexts/adminStore";
import { IFatura } from "../interfaces/dominios.interface";
import api from "@/services/api";
import { toast } from "sonner";

interface IActivateFactResponse {
    success: boolean,
    message: string,
}

export default function UseRequests() {

    const { clientsFaturasList, actions: {
        getClientsFaturasList
    } } = useAdminStore()

    const [selectedService, setSelectedService] = useState<IFatura>()
    const [success, setSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isFactActive] = useState(false)

    async function get() {
        const response: { success: boolean } = await getClientsFaturasList()
        if (response.success) {
            setSuccess(true)
            setSelectedService(clientsFaturasList[1])
        }
        else setSuccess(false)
    }

    useEffect(() => {
        get()
    }, [])

    async function activateFact() {
        setIsLoading(true)
        try {
            const response: IActivateFactResponse = await (await api.put(`/faturas/aprovarFaturaCliente/${selectedService?.id}`)).data
            if (response.success) {
                toast.success(response.message)
                setSelectedService(undefined)
                getClientsFaturasList()
            }
            else {
                toast.error(response.message)
            }
        }
        catch (error) {
            toast.error('Erro ao processar a ativação!')
            // const err = error as AxiosError 
            // const msg: {success: boolean, message: string} = err.response?.data as {success: boolean, message: string}
            // toast.error(`Ocorreu um erro ao processar a sua solicitação! Consulte o Francisco!`, {
            //     description: `${msg.message}`
            // }
            // )
            console.log(error)
        }
        finally {
            setIsLoading(false)
        }
    }


    return { clientsFaturasList, selectedService, setSelectedService, success, isLoading, activateFact, isFactActive }
}