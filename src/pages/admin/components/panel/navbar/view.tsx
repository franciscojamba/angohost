import { Link } from "react-router-dom";
import logoEmpresa from '@/assets/images/ANGOHOST-02.png'
import { LayoutGrid, Mail, Users } from 'lucide-react'
import { JSX } from "react/jsx-runtime";

export default function NavBar() {
    const pathname = window.location.pathname;
    
    const menuData = [
        {
            label: 'Dashboard',
            href: '/security/admin/dashboard',
            beta: false,
            icon: <LayoutGrid strokeWidth={1.5} size={18} className="mb-1" />
        },
        {
            label: 'Pedidos',
            href: '/security/admin/requests',
            beta: false,
            icon: <Mail size={18} strokeWidth={1.5} className="mb-1" />
        },
        {
            label: 'Clientes',
            href: '/security/admin/clients/list',
            beta: false,
            icon: <Users size={18} strokeWidth={1.5} className="mb-1" />,
            focusPaths: ['/security/admin/clients/list', '/security/admin/clients/details/']
        },
    ]

    const isPathFocused = (item: { label: string; href: string; beta: boolean; icon: JSX.Element; focusPaths?: undefined; } | { label: string; href: string; beta: boolean; icon: JSX.Element; focusPaths: string[]; }) => {
        if (item.focusPaths) {
            return item.focusPaths.some((path: string) => pathname.startsWith(path));
        }
        return pathname === item.href;
    };

    return (
        <nav className='min-w-[230px] max-w-[230px] h-full p-[10px] flex items-center justify-between flex-col bg-[#F1F4FA]'>
            <div className="w-full pt-2 px-2">
                <Link to={'/'}><img src={logoEmpresa} alt="angohost" className='pointer-events-none w-[150px]' /></Link>
                <ul className='flex flex-col mt-[50px] gap-y-2 w-full'>
                    {menuData.map((item, _index) => (
                        <li key={_index}>
                            <Link data-focused={isPathFocused(item)} to={item.href} className="lk w-full h-[45px] text-[var(--primary)] hover:gap-4 transition-all font-[Rubik] duration-300 rounded-[12px] flex items-center justify-start gap-3 px-4 text-[0.8em] relative">
                                {item.icon}{item.label}
                                {item.beta && <span className="absolute right-2 py-1 px-3 bg-[#ffffff22] rounded-full">Beta</span>}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='w-full px-3 font-[Rubik] border-[0px] border-solid flex flex-col items-start justify-center text-[var(--primary)] text-[0.8rem]'>
                <p style={{ lineHeight: '20px' }} className="font-[600] text-[0.9rem]">©️2024</p>
                <p className="">Angohost Lda. Todos os direitos reservados.</p>
            </div>
        </nav>
    )
}
