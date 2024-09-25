import { useQuery } from '@tanstack/react-query'
import api from '@/services/api'
import { ICliente } from '@/interfaces/clientInterface'

const fetcher = async (clientId: string): Promise<ICliente> => {
    const response = await api.get<ICliente>(`/cliente/${clientId}`)
    return response.data
}

export function useClientData(id: string) {
    const query = useQuery({
        queryFn: () => fetcher(id),
        queryKey: ['client-data'],
        enabled: !!id,
        retry: false,
    })

    return {
        ...query,
        data: query.data
    };
}