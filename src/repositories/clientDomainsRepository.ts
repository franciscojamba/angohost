import { useQuery } from '@tanstack/react-query'
import api from '@/services/api'
import { IClienteDominio } from '@/interfaces/dominio.interface';

interface IGetDomainsResponse {
    success: boolean;
    message: string;
    data: IClienteDominio[];
}

const fetcher = async(clientId: string):Promise<IClienteDominio[]> => {
    const response = await api.get<IGetDomainsResponse>(`/dominios/buscarServicoDominiosCliente/${clientId}`)
    return response.data.data
}

export function useClientDomainServices(id: string) {
    const query = useQuery({
        queryFn: () => fetcher(id),
        queryKey: ['client-domains'],
        enabled: !!id,
        retry: false,
    })

    return {
        ...query,
        data: query.data
    };
}