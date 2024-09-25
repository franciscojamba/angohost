import { create } from 'zustand';

interface State {   
    isCPanelOpened: boolean;
    openCPanelModal: () => void;
    closeCPanelModal: () => void;

    isDNSOpened: boolean;
    openDNSModal: () => void;
    closeDNSModal: () => void;

    isIPOpened: boolean;
    openIPModal: () => void;
    closeIPModal: () => void;
}

const useModalsStore = create<State>((set) => ({
    isCPanelOpened: false,
    openCPanelModal: () => set({ isCPanelOpened: true }),
    closeCPanelModal: () => set({ isCPanelOpened: false }),

    isDNSOpened: false,
    openDNSModal: () => set({ isDNSOpened: true }),
    closeDNSModal: () => set({ isDNSOpened: false }),
    
    isIPOpened: false,
    openIPModal: () => set({ isIPOpened: true }),
    closeIPModal: () => set({ isIPOpened: false }) 
}));

export default useModalsStore;