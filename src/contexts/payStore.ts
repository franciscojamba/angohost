import { create } from 'zustand'
import { IDomainExtension } from '../interfaces/domain';
import api from '../services/api';

type ICiclo = {
    id: number;
    nome: string;
    duracao: string;
    multiplicador: number;
}
type IPlano = {
    id: string,
    titulo: string,
    preco: number,
    info?: string,
    cicle: string,
    recursos: string[],
    planoPopular: boolean,
    descricao: string,
    descontos: number,
    precoComDesconto: number,
    ciclos: {
        planoId: string,
        cicloId: number,
        ciclo: ICiclo
    }[]
}

enum signMode {
    signIn = 1,
    signUp = 2
}

enum signInMode {
    particular = 1,
    cooporative = 2
}

interface IClientLoadedInfo {
    name: string
}

type ClientAction = {
    setFormStep: (step: number) => void,
    setRegisterNewDomain: (state: boolean) => void,
    setCurrentDomain: (domain: string) => void,
    setCurrentDomainExtension: (extension: IDomainExtension) => void,
    setDomainExtensions: (domainExtensionsList: IDomainExtension[]) => void,
    getDomainExtensions: () => void,
    setCurrentDomainAvailable: (status: boolean) => void,
    setDomainVerifyProcessComplete: (status: boolean) => void,
    setCurrentPlanCicle: (cicle: ICiclo) => void
    getCurrentPlan: (id: string) => void,
    setIsBILoaded: (state: boolean) => void,
    setIsNIFLoaded: (state: boolean) => void,
    setSignMode: (mode: signMode) => void,
    setSignInMode: (mode: signInMode) => void,
    setClientNIF: (nif: string) => void,
    setClientLoadedInfo: (data: IClientLoadedInfo) => void
}

interface TypeClientStore {
    formStep: number;
    registerNewDomain: boolean;
    currentDomain: string;
    currentDomainExtension: IDomainExtension;
    currentDomainAvailable: boolean,
    domainExtensions: IDomainExtension[];
    domainVerifyProcessComplete: boolean,
    currentPlan: IPlano,
    planCicles: ICiclo[],
    currentPlanCicle: ICiclo,
    isBILoaded: boolean,
    isNIFLoaded: boolean,
    signMode: signMode,
    signInMode: signInMode,
    clientNIF: string,
    clientLoadedInfo: IClientLoadedInfo
    actions: ClientAction;
}

const usePayStore = create<TypeClientStore>((set) => ({
    formStep: 1,
    registerNewDomain: true,
    currentDomain: '',
    currentDomainExtension: {desconto: 0, id: 0, preco: 0, tipo: ''},
    currentDomainAvailable: false,
    domainExtensions: [],
    currentPlan: {cicle: '', ciclos: [], descontos: 0, descricao: '', id: '', planoPopular: false, preco: 0, precoComDesconto: 0, recursos: [], titulo: '', info: ''},
    planCicles: [],
    isBILoaded: false,
    isNIFLoaded: false,
    signMode: 1,
    signInMode: 1,
    clientNIF: '',
    clientLoadedInfo: {name: ''},
    currentPlanCicle: {duracao: '', id: 0, multiplicador: 0, nome: ''},
    domainVerifyProcessComplete: false,
    actions: {
        setFormStep(step) {
            set({ formStep: step })
        },
        setRegisterNewDomain(state) {
            set({registerNewDomain: state})
        },
        setCurrentDomain(domain) {
            set({currentDomain: domain})
        },
        setDomainExtensions(domainExtensionsList) {
            set({domainExtensions: domainExtensionsList})
        },
        getDomainExtensions: async() => {
            const response: IDomainExtension[] = await (await api.get('/planosDeDominios')).data
            set({domainExtensions: response})
        },
        setCurrentDomainExtension(extension) {
            set({currentDomainExtension: extension})
        },
        setCurrentDomainAvailable(status) {
            set({currentDomainAvailable: status})
        },
        setDomainVerifyProcessComplete(status) {
            set({domainVerifyProcessComplete: status})
        },
        getCurrentPlan: async(id) => {
            const response: IPlano = await (await api.get(`/planos/${id}`)).data
            set({currentPlan: response})
            set({planCicles: response.ciclos.map(c => c.ciclo)})
        },
        setCurrentPlanCicle(cicle) {
            set({currentPlanCicle: cicle})
        },
        setIsBILoaded(state) {
            set({isBILoaded: state})
        },
        setIsNIFLoaded(state) {
            set({isNIFLoaded: state})
        },
        setSignMode(mode) {
            set({signMode: mode})
        },
        setSignInMode(mode) {
            set({signInMode: mode})
        },
        setClientNIF(nif) {
            set({clientNIF: nif})
        },
        setClientLoadedInfo(data) {
            set({clientLoadedInfo: data})
        }
    }
}))

export default usePayStore