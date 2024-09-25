import { useQuery } from '@tanstack/react-query'
import api from '@/services/api'
import { IServicoEmail } from '@/interfaces/email.interface';

interface IGetEmailsResponse {
    success: boolean,
    message: string,
    data: IServicoEmail[]
}


const fetcher = async(clientId: string):Promise<IServicoEmail[]> => {
    const response = await api.get<IGetEmailsResponse>(`/servicosEmailsCliente/buscarServicoEmailCliente/${clientId}`)
    return response.data.data
}

export function useClientEmails(id: string) {
    const query = useQuery({
        queryFn: () => fetcher(id),
        queryKey: ['client-emails'],
        enabled: !!id,
        retry: false,
    })

    return {
        ...query,
        data: query.data
    };
}