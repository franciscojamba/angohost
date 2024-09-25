import { useState } from "react";
import api from "@/services/api";
import { toast } from "sonner";
import { ICliente, IFaturaProduto } from "@/interfaces/clientInterface";
import { ServicoDominio, ServicoEmail, ServicoHospedagem, ServicosClientes } from "../interfaces/clientServices.interface";

interface ResponseData {
    success: boolean;
    message: string;
    servicosClientes: ServicosClientes;
}

export default function useDetails() {

    const [currentClient, setCurrentClient] = useState<ICliente>()
    const [currentService, setCurrentService] = useState<ServicoEmail | ServicoDominio | ServicoHospedagem>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isLoadingServices, setIsLoadingServices] = useState<boolean>(false)
    const [selectedFatura, setSelectedFatura] = useState<IFaturaProduto | null>()
    const [isLoadingAtivateService, setIsLoadingAtivateService] = useState<boolean>(false)
    const [services, setServices] = useState<ServicosClientes>({
        servicosDominios: [],
        servicosEmails: [],
        servicosHospedagem: []
    })

    async function getClient(clientId: string) {
        setIsLoading(true)
        try {
            const response: ICliente = await (await api.get(`/cliente/${clientId}`)).data
            setCurrentClient(response)
        }
        catch {
            toast.error('Ocorreu um erro ao obter informações do cliente!')
        }
        finally {
            setIsLoading(false)
        }
    }

    async function getServices(clientId: string) {
        setIsLoadingServices(true)
        try {
            const response: ResponseData = await (await api.get(`/clienteServico/buscarServicosCliente/${clientId}`)).data
            setServices(response.servicosClientes)
        }
        catch {
            toast.error('Ocorreu um erro ao obter os serviços do cliente!')
        }
        finally {
            setIsLoadingServices(false)
        }
    }

    async function ativateService(serviceId: string, clientId: string) {
        setIsLoadingAtivateService(true)
        let serviceType;
        if ('Email' in currentService!) {
            serviceType = '/servicosEmailsCliente/ativarServicoEmailCliente';
        } else if ('Dominio' in currentService!) {
            serviceType = '/dominios/ativarServicoDominiosCliente';
        } else if ('Plano' in currentService!) {
            serviceType = '/servicos/ativarIdServicoHospedagem';
        }
        try {
            const response = await (await api.put(`${serviceType}/${serviceId}`)).data
            if (response.success) {
                toast.success('Serviço ativado com sucesso!')
                setCurrentService(undefined)
                getServices(clientId)

            }
            else {
                toast.error('Ocorreu um erro ao ativar o serviço!')
            }
        }
        catch {
            toast.error('Ocorreu um erro ao ativar o serviço!')
        }
        finally {
            setIsLoadingAtivateService(false)
        }
    }

    return { currentClient, isLoading, isLoadingAtivateService, getClient, ativateService, selectedFatura, setSelectedFatura, getServices, services, currentService, setCurrentService, isLoadingServices }
}