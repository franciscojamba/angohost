import {
    BadgeDollarSign,
    LogOutIcon,
    User
} from "lucide-react"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,

    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import useAuth from "@/hooks/useAuth"
import { useNavigate } from "react-router-dom"
import { TailSpin } from "react-loader-spinner"

export default function AccountDropdown() {

    const { signOut, isLoading } = useAuth()
    const router = useNavigate()

    return (
        <Menubar className="bg-transparent border-none text-[0.8rem] font-[Rubik] font-light">
            <MenubarMenu >
                <MenubarTrigger className="bg-transparent text-[0.8rem] font-regular text-white">Faturas</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem onClick={() => router('/cliente/painel/faturas')}>
                        Ver faturas <MenubarShortcut><BadgeDollarSign strokeWidth={1.5} size={18} /></MenubarShortcut>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="bg-transparent text-[0.8rem] font-regular text-white">Avisos</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem disabled>Ver avisos <MenubarShortcut><span>Brevemente</span></MenubarShortcut></MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger className="bg-transparent text-[0.8rem] font-[Rubik] font-regular text-white">Minha conta</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem onClick={() => router('/cliente/painel/conta')}>
                        Gerenciar conta <MenubarShortcut><User strokeWidth={1.5} size={18} /></MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem onClick={() => signOut()}>
                        {isLoading ? <TailSpin width={20} color="#222" /> : "Terminar sessão"} <MenubarShortcut><LogOutIcon strokeWidth={1.5} size={18} /></MenubarShortcut>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
}