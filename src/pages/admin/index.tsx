import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom"
import '@/pages/admin/styles/globals.css'
import useUtils from '@/utils/useutils';
import { Toaster } from "sonner";

export default function AdminLayout() {

    const nav = useNavigate()
    const { isAdminAuthenticated } = useUtils()

    useEffect(() => {
        if (window.location.pathname === '/security' || window.location.pathname === '/security/') {
            if (isAdminAuthenticated()) {
                nav("/security/admin")
            } else {
                nav("/security/login")
            }
        }
    }, [nav]);

    return (
        <main className='h-wull h-screen'><Outlet/><Toaster richColors position="top-right"/></main>
    )
}