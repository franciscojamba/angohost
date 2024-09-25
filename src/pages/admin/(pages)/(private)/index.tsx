import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

export default function PrivateAdminLayout() {
    return (
        <>
            <Outlet />
            <Toaster richColors position="top-right" />
        </>
    )
}