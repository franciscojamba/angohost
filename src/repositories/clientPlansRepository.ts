import { useQuery } from '@tanstack/react-query'
import api from '@/services/api'
import { IServicoPlano } from '@/interfaces/servico.interface';

interface IGetPlansResponse {
    success: boolean,
    message: string,
    data: IServicoPlano[]
}


const fetcher = async(clientId: string):Promise<IServicoPlano[]> => {
    const response = await api.get<IGetPlansResponse>(`/servicos/buscarPorClienteId/${clientId}`)
    return response.data.data
}

export function useClientPlans(id: string) {
    const query = useQuery({
        queryFn: () => fetcher(id),
        queryKey: ['client-plans'],
        enabled: !!id,
        retry: false,
    })

    return {
        ...query,
        data: query.data
    };
}