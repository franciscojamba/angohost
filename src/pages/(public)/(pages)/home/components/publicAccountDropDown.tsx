import {
    Building,
    Headset,
    Info,
    LogOut,
    ShoppingCart,
    Trash,
    User
} from "lucide-react"
import {
    Menubar,
    MenubarMenu,
} from "@/components/ui/menubar"
import useAuth from "@/hooks/useAuth"
import { Link, useNavigate } from "react-router-dom"
import { TailSpin } from "react-loader-spinner"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import useUtils from "@/utils/useutils"
import useCart from "@/hooks/useCart"

export default function PublicAccountDropdown({ color }: { color: string }) {

    const { signOut, isLoading } = useAuth()
    const router = useNavigate()
    const { isAuthenticated } = useUtils()
    const { cartLenght, clearCart } = useCart()

    return (
        <Menubar className="bg-transparent mt-4 gap-5 flex border-none">
            <MenubarMenu >
                <Link style={{ color: color }} to='/contactos' className="bg-transparent text-[1rem] font-regular  cursor-pointer  flex items-center justify-center gap-1"><Headset strokeWidth={1.5} size={20} />Central de venda</Link>
            </MenubarMenu>
            <MenubarMenu>
                <a style={{ color: color }} href="https://ajuda.angost.ao" className="ml-3 bg-transparent text-[1rem] font-regular  cursor-pointer  flex items-center justify-center gap-1"><Info strokeWidth={1.5} size={20} />Ajuda</a>
            </MenubarMenu>
            <MenubarMenu>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <button className="w-max h-[40px] flex items-center justify-center gap-2 relative">
                            <ShoppingCart strokeWidth={1.5} size={20} color={color} /><p style={{color: color}} className="text-[1rem]">Carrinho</p>
                            {cartLenght > 0 && <div className="bg-[#0066a59f] text-[#ffffff] rounded-full w-[20px] h-[20px] flex items-center justify-center text-[0.8rem] font-semibold absolute top-[0px] right-[-10px]">{cartLenght}</div>}
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[200px]">
                        <DropdownMenuLabel>Carrinho</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={()=>router('/carrinho')}>Itens no carrinho <DropdownMenuShortcut>{cartLenght}</DropdownMenuShortcut></DropdownMenuItem>
                        <DropdownMenuItem onClick={clearCart}>Limpar carrinho <DropdownMenuShortcut><Trash size={17} width={20} /></DropdownMenuShortcut></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </MenubarMenu>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button style={{ color: color }} className=" text-[1rem] flex items-center justify-center gap-1 ml-3"><User strokeWidth={1.5} size={20} /> {isAuthenticated() ? "Minha conta" : "Entrar"}</button>
                </DropdownMenuTrigger>
                {isAuthenticated() ? <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel className="text-[0.95rem]">Minha conta</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem onClick={() => router('/cliente/painel/dashboard')} className="h-[40px] hover:bg-zinc-100 text-[0.95rem]">
                            Ir ao painel
                            <DropdownMenuShortcut><User strokeWidth={1.6} size={20} /></DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuItem onClick={signOut} className="h-[40px] hover:bg-zinc-100 text-[0.95rem]">
                        {isLoading ? <TailSpin color="#222" width={20} /> : "Terminar sessão"}
                        <DropdownMenuShortcut><LogOut strokeWidth={1.6} size={20} /></DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuContent> :
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel className="text-[0.95rem]">Entrar</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem onClick={() => router('/cliente/particular')} className="h-[40px] hover:bg-zinc-100 text-[0.95rem]">
                                Cliente particular
                                <DropdownMenuShortcut><User strokeWidth={1.6} size={20} /></DropdownMenuShortcut>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuItem onClick={() => router('/cliente/empresa')} className="h-[40px] hover:bg-zinc-100 text-[0.95rem]">
                            Cliente Empresa
                            <DropdownMenuShortcut><Building strokeWidth={1.6} size={20} /></DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                }
            </DropdownMenu>
        </Menubar>
    )
}