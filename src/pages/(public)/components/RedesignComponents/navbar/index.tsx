import { Link, useNavigate } from 'react-router-dom'
import logo from '../../../../public/logo-azul.png'
import { useEffect, useState } from 'react';

export default function ClientNavbar() {

    const navigate = useNavigate();
    const [isEnterprise, setIsEnterprise] = useState<boolean>(false)
    // Verifica se a rota "/cliente" é acessada diretamente e redireciona para "/cliente/particular"
    useEffect(() => {
        const path = window.location.pathname;
        if (path === '/cliente/empresa') {
            setIsEnterprise(true)
        }
    }, [navigate]);

    return (
        <nav className="w-full flex items-center justify-between px-6 h-[60px]" style={{ borderBottom: isEnterprise ? "'1px solid #000'" : "'1px solid #eee'", backgroundColor: isEnterprise ? "#222" : "#fff"}}>
            <img src={logo} className="w-[140px] h-max" />
            <ul className='flex items-end justify-between gap-4'>
                <li>
                    <Link className='px-4 py-2 rounded-lg bg-blue-100 text-[#1e436d] font-semibold' to={'/contactos'}>Fale connosco</Link>
                </li>
            </ul>
        </nav>
    )
}