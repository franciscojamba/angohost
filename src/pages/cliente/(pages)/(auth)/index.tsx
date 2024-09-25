import { Outlet } from "react-router-dom"
import { Toaster } from "sonner"

export default function AuthLayout() {

    return (
        <div className='w-full h-[100vh]'>
            <Outlet />
            <Toaster richColors position="top-right"/>
        </div>
    )
}