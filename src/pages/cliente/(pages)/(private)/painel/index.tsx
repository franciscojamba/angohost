import { Helmet } from 'react-helmet';
import '../../../styles/painel.css'
import usePanel from '../../../../../hooks/usePanel';
import { Outlet } from "react-router-dom"
import NavBar from '../../../components/navbar/view';
import { Search } from 'lucide-react';
import AccountDropdown from '@/pages/cliente/components/accountDropdown';
import { Toaster } from 'sonner';
import { useClientData } from '@/repositories/clientRepository';
import useUtils from '@/utils/useutils';
import { useEffect } from 'react';
import useClientStore from '@/contexts/clientStore';
import { ICliente } from '@/interfaces/clientInterface';


export default function PanelLayout() {

    const { loading } = usePanel()
    const { getClientID } = useUtils()
    const { actions: { setClientData } } = useClientStore()
    const { data } = useClientData(getClientID())


    useEffect(()=>{
        setClientData(data as ICliente)
    }, [data])




    if (loading) {
        return <div className='w-full h-[100vh] bg-white flex items-center justify-center' >
            <p className='text-[#222] text-[0.8rem] font-regular'>ANGOHOST</p>
        </div>
    }



    return (
        <>
            <Helmet><title>Painel do Cliente</title></Helmet>
            <Toaster richColors position="top-right"/>
            <div className='w-full h-[100vh] flex items-end justify-center bg-[#3e00b0] text-black'>
                <NavBar />
                <div className='h-full bg-transparent' style={{ flex: 1 }}>
                    <div className='w-full h-[45px] bg-transparent flex items-center justify-between pr-4'>
                        <h1 className='text-[#ffffff] font-[Rubik]'>Particular</h1>
                        <div>
                            <div className='w-[400px] bg-[#ffffff22] rounded-[8px] h-[30px] flex items-center justify-start px-4'><button><Search size={15} strokeWidth={1.4} color='#ffffff88'/></button><input type="text" className='flex-[1] text-center bg-transparent text-[0.8rem] px-4 text-[#ffffff88]' value={'O que procura?'}/></div>
                        </div>
                        <AccountDropdown/>
                    </div>
                    <div className='bg-[#edf3f8] w-full px-4 py-1 flex flex-col font-[Rubik]' style={{ flex: 1, borderTopLeftRadius: 30, height: 'calc(100% - 45px)' }}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}
