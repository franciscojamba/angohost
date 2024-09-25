import { Link, useLocation } from "react-router-dom"
import { ItemProps } from "../../interfaces/item";
import menuItems from "../../utils/ItemsMenuAdmin";
import { LogotipoBranco } from "../Logotipo";


export const SidebarAdmin = ({ className, ...props }: { className?: string }) => {
    return (
        <div
            {...props}
            className={`flex flex-col w-[3rem]  lg:w-[14rem] h-full  rounded-lg gap-2 ${className}`}>
            <div
                className="w-full bg-gradient-primary mb-[1px]  p-2 rounded-md overflow-hidden transition-all"
            >
                <LogotipoBranco
                    className="transition-all" />
            </div>

            <Items
                className="flex-1 rounded-md px-2 py-4 shadow-xl bg-white" />
        </div>
    )
}

export const Items = ({ className }: { className?: string }) => {
    const location = useLocation()

    return (
        <div
            className={`w-full flex flex-col gap-4 ${className}`}>
            {menuItems.map((item: ItemProps) => {
                const isAtive = location.pathname === item.url
                item.isActive = isAtive
                return (<Item key={item.label} {...item} />)
            })}
        </div>
    )
}

export const Item = ({ Icon, label, url, className, isActive, ...props }: ItemProps) => {
    return (
        <Link
            {...props} to={url}
            className={`w-full text-black flex items-center last:self-end justify-start gap-2 border-none ${isActive && 'bg-gray-200'} p-2 font-medium hover:bg-gray-200  rounded-md  transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none transition-all ${props}`}>
            <Icon
                className=" text-sm lg:text-lg transition-all"
            />
            <span
                className="hidden lg:block transition-all ">
                {label}
            </span>
        </Link>
    )
}

