import { create } from 'zustand'
import api from '@/services/api'
import { IFatura } from '../interfaces/dominios.interface';
import { IAdmin, IClientsList } from '../interfaces/admin.interface';

type AdminAction = {
    getAdminData: (userId: string) => void
    getClientsFaturasList: () => Promise<{success: boolean}>
    getClientsList: () => Promise<{success: boolean}>
}

interface TypeClientStore {
    admin: IAdmin
    clientsFaturasList: IFatura[]
    clients: IClientsList[]
    actions: AdminAction
}

const useAdminStore = create<TypeClientStore>((set) => ({
    admin: {email: '', id: '', nome: "", role: ''},
    clientsFaturasList: [],
    clients: [], 
    actions: {
        getAdminData: async (userId) => {
            try {
                const response = await api.get(`/cliente/${userId}`)
                set({ admin: response.data })
            }
            catch (error) {
                console.log(error)
            }
        },
        getClientsFaturasList: async ():Promise<{success: boolean}> => {
            try {
                const response: IFatura[] = await(await api.get(`/faturasGeral/buscar/todos`)).data
                console.log(response)
                set({ clientsFaturasList: response })
                return {success: true}
            }
            catch (error) {
                console.log(error)
                return {success: false}
            }
        },
        getClientsList: async ():Promise<{success: boolean}> => {
            try {
                const response: IClientsList[] = await(await api.get(`/cliente`)).data.clientes
                console.log(response)
                set({ clients: response })
                return {success: true}
            }
            catch (error) {
                console.log(error)
                return {success: false}
            }
        }
    }
}))

export default useAdminStore