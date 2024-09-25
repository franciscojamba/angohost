import { Link, useNavigate } from "react-router-dom";
import logo_preto from '@/assets/images/ANGOHOST-02.png'
import { Building, LogOut, ShoppingCart, Trash, User, Wallet } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import useAuth from "@/hooks/useAuth";
import useUtils from "@/utils/useutils";
import useCart from "@/hooks/useCart";

export default function Navbar() {



    const { signOut } = useAuth()
    const router = useNavigate()
    const { isAuthenticated } = useUtils()
    const { clearCart, cartLenght } = useCart()

    return (
        <nav className="flex items-center justify-between bg-white px-[50px] py-3 border-b">
            <Link to={'/'}>
                <img src={logo_preto} alt="logo" className="w-[140px]" />
            </Link>
            <div className="flex items-center justify-center gap-3">

                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <button className="w-[40px] h-[40px] rounded-ful flex items-center justify-center">
                            <ShoppingCart strokeWidth={1.5} size={20} />
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[200px]">
                        <DropdownMenuLabel>Carrinho</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Items no carrinho <DropdownMenuShortcut>{cartLenght}</DropdownMenuShortcut></DropdownMenuItem>
                        <DropdownMenuItem onClick={clearCart}>Limpar carrinho <DropdownMenuShortcut><Trash size={17} width={20} /></DropdownMenuShortcut></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <button className="w-[40px] h-[40px] rounded-ful flex items-center justify-center">
                            <User strokeWidth={1.5} size={20} />
                        </button>
                    </DropdownMenuTrigger>
                    {isAuthenticated() ? <DropdownMenuContent className="w-[200px]">
                        <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => router('/cliente/painel/dashboard')}>Perfil <DropdownMenuShortcut><User size={17} width={20} /></DropdownMenuShortcut></DropdownMenuItem>
                        <DropdownMenuItem onClick={() => router('/cliente/painel/account')} disabled>Carteira PH <DropdownMenuShortcut><Wallet size={17} width={20} /></DropdownMenuShortcut></DropdownMenuItem>
                        <DropdownMenuItem onClick={signOut}>Sair <DropdownMenuShortcut><LogOut size={17} width={20} /></DropdownMenuShortcut></DropdownMenuItem>
                    </DropdownMenuContent> :
                        <DropdownMenuContent className="w-[200px]">
                            <DropdownMenuLabel>Entrar</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => router('/cliente/painel/dashboard')}>Cliente particular <DropdownMenuShortcut><User size={17} width={20} /></DropdownMenuShortcut></DropdownMenuItem>
                            <DropdownMenuItem onClick={() => router('/cliente/painel/account')}>Cliente empresa <DropdownMenuShortcut><Building size={17} width={20} /></DropdownMenuShortcut></DropdownMenuItem>
                        </DropdownMenuContent>
                    }
                </DropdownMenu>
            </div>
        </nav>
    )
}