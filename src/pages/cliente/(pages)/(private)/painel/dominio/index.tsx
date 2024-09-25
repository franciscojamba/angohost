'use client'
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function DomainLayout() {

    const nav = useNavigate()

    useEffect(() => {
        if (window.location.pathname === '/cliente/painel/dominios' || window.location.pathname === '/cliente/painel/dominios/') {
            nav("/cliente/painel/dominios/servicos")
        }
    }, [nav]);

    return (
        <div>
            <Outlet />
        </div>
    )
}