import { useQuery } from '@tanstack/react-query'
import api from '@/services/api'
import { IPlano } from '@/interfaces/plan.interface';

interface ApiResponse {
    success: boolean;
    message: string;
    data: IPlano[];
}

const fetcher = async():Promise<IPlano[]> => {
    const response = await api.get<ApiResponse>(`/planos`)
    return response.data.data
}

export function usePlans() {
    const query = useQuery({
        queryFn: fetcher,
        queryKey: ['plans'],
        retry: false,
    })

    return {
        ...query,
        data: query.data
    };
}