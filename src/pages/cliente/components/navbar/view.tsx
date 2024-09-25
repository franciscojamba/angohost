import { IoExitOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import logoEmpresa from '../../../../assets/ANGOHOST/PNG/ANGOHOST-03.png'
import { Cloud, GlobeLock, Headset, LayoutGrid, Mail, MonitorCog, Server, ShieldCheck, TvMinimalPlay } from 'lucide-react'
import useAuth from "../../../../hooks/useAuth";
import LoaderComponent from "../loader/view";
import { JSX } from "react/jsx-runtime";

export default function NavBar() {
    const pathname = window.location.pathname;
    const menuData = [
        {
            label: 'Dashboard',
            href: '/cliente/painel/dashboard',
            beta: false,
            icon: <LayoutGrid strokeWidth={1.5} size={18} className="mb-1" />
        },
        {
            label: 'E-Mails',
            href: '/cliente/painel/email/servicos',
            beta: false,
            icon: <Mail size={18} strokeWidth={1.5} className="mb-1" />,
            focusPaths: ['/cliente/painel/email/servicos', '/cliente/painel/email/gerir/']
        },
        {
            label: 'Domínios',
            href: '/cliente/painel/dominios/servicos',
            beta: false,
            icon: <GlobeLock size={18} strokeWidth={1.5} className="mb-1" />,
            focusPaths: ['/cliente/painel/dominios/servicos', '/cliente/painel/dominios/gerir/']
        },
        {
            label: 'Hospedagem',
            href: '/cliente/painel/hospedagem/servicos',
            beta: false,
            icon: <Cloud size={18} strokeWidth={1.5} className="mb-1" />,
            focusPaths: ['/cliente/painel/hospedagem/servicos', '/cliente/painel/hospedagem/gerir/']
        },
        {
            label: 'Servidores',
            href: '/cliente/painel/servidores',
            beta: true,
            icon: <Server size={18} strokeWidth={1.5} className="mb-1" />,
            
        },
        {
            label: 'SSL',
            href: '/cliente/painel/ssl',
            beta: true,
            icon: <ShieldCheck size={18} strokeWidth={1.5} className="mb-1" />
        },
        {
            label: 'Serviços',
            href: '/cliente/painel/servicos',
            beta: true,
            icon: <MonitorCog size={18} strokeWidth={1.5} className="mb-1" />
        },
        {
            label: 'AH Academy',
            href: '/cliente/painel/ph-academy',
            beta: false,
            icon: <TvMinimalPlay size={18} strokeWidth={1.5} className="mb-1" />
        },
        {
            label: 'Suporte',
            href: '/cliente/painel/suporte',
            beta: false,
            icon: <Headset size={18} strokeWidth={1.5} className="mb-1" />
        },
    ]

    const { signOut, isLoading } = useAuth()

    const isPathFocused = (item: { label: string; href: string; beta: boolean; icon: JSX.Element; focusPaths?: undefined; } | { label: string; href: string; beta: boolean; icon: JSX.Element; focusPaths: string[]; }) => {
        if (item.focusPaths) {
            return item.focusPaths.some(path => pathname.startsWith(path));
        }
        return pathname === item.href;
    };

    return (
        <nav className='w-[250px] h-full p-[10px] flex items-center justify-between flex-col' style={{ background: 'linear-gradient(0deg, #450153 12%, #3e00b0 90%)' }}>
            <div className="w-full ">
                <Link to={'/'}><img src={logoEmpresa} alt="petrohost" className='pointer-events-none w-[180px]' /></Link>
                <p className='opacity-75 w-full text-left text-white text-[0.8rem] font-regular mt-[30px] mb-2'>Menu</p>
                <ul className='flex flex-col gap-y-2 w-full'>
                    {menuData.map((item, _index) => (
                        <li key={_index}>
                            <Link data-focused={isPathFocused(item)} to={item.href} className="w-full h-[45px] hover:bg-[#ffffff22] text-white hover:text-white hover:gap-5 transition-all font-[Rubik] duration-300 rounded-[12px] flex items-center justify-start gap-3 px-4 text-[0.9em] relative">
                                {item.icon}{item.label}{item.beta && <span className="absolute right-2 py-1 px-3 bg-[#ffffff22] rounded-full">Beta</span>}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            
            <button onClick={signOut} className='w-full px-3 h-[40px] font-[Rubik] bg-[#ffffff22] border-[0px] border-solid border-cyan-800 flex flex-row items-center justify-center gap-[10px] text-cyan-500 rounded-[8px] text-[0.8rem]'>
                {isLoading ? <LoaderComponent color={"#ffffff"} /> : <><IoExitOutline className='w-[20px] h-[20px]' /> Terminar sessão</>}
            </button>
        </nav>
    )
}
