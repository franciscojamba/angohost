import { create } from 'zustand'
import { IPlano } from '@/interfaces/plan.interface';

type ClientAction = {
    setPlans: (plans: IPlano[]) => void,
}

interface TypeClientStore {
    plans: IPlano[];
    actions: ClientAction
}

const usePublicStore = create<TypeClientStore>((set) => ({
    plans: [],
    actions: {
        setPlans(plans) {
            set({plans: plans})
        }
    }
}))

export default usePublicStore