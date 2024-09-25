'use client'
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function HostingLayout() {

    const nav = useNavigate()

    useEffect(() => {
        if (window.location.pathname === '/cliente/painel/hospedagem' || window.location.pathname === '/cliente/painel/hospedagem/') {
            nav("/cliente/painel/hospedagem/servicos")
        }
    }, [nav]);

    return (
        <div>
            <h1>aaa</h1>
            <Outlet />
        </div>
    )
}