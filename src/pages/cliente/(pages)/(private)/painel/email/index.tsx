import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function EmailLayout() {

    const nav = useNavigate()

    useEffect(() => {
        if (window.location.pathname === '/cliente/painel/email' || window.location.pathname === '/cliente/painel/email/') {
            nav("/cliente/painel/email/servicos")
        }
    }, [nav]);

    return (
        <div>
            <Outlet />
        </div>
    )
}