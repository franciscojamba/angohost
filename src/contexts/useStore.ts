import { create } from 'zustand';
import { IDomain } from '../interfaces/domain';

interface AuthState {
    userID: string;
    subDom: {
        name: string,
        price: number
    };
    domain: string;
    domains: IDomain[];
    cartLenght: number;
    setUserID: (errors: string) => void;
    setSubDom: (domain: {
        name: string,
        price: number
    }) => void;
    setDomain: (domain: string) => void;
    setDomains: (domains: IDomain[]) => void;
    setCartLenght: (lenght: number) => void;
}

const useStore = create<AuthState>((set) => ({
    userID: '',
    cartLenght: 0,
    subDom: {
        name: '',
        price: 0
    },
    domain: '',
    domains: [{ desconto: 0, id: 0, preco: 0, tipo: '' }],
    setUserID: (userID) => set({ userID }),
    setSubDom: (subDom) => set({ subDom }),
    setDomain: (domain) => set({ domain }),
    setDomains: (domains) => set({ domains }),
    setCartLenght(lenght) {
        set({cartLenght: lenght})
    }
}));

export default useStore;
