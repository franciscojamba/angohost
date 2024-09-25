import { Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Toaster } from "sonner"
import useUtils from '@/utils/useutils';

export default function ClientLayout() {

    const nav = useNavigate()
    const { isAuthenticated } = useUtils()

    useEffect(() => {
        if (window.location.pathname === '/cliente' || window.location.pathname === '/cliente/') {
            if (isAuthenticated()) {
                nav("/cliente/painel")
            } else {
                nav("/cliente/particular")
            }
        }
    }, [nav]);

    return (
        <div className='w-full h-[100vh]'>
            <Outlet />
            <Toaster richColors position='top-right'/>
        </div>
    )
}