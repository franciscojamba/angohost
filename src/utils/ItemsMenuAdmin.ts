// import { BagFill, BoxArrowRight, FileTextFill, HouseDoorFill, PeopleFill, PersonFill } from "react-bootstrap-icons";
import { ItemProps } from "../interfaces/item";
import { HiOutlineHome, HiOutlineUsers } from "react-icons/hi2";
import { GoPeople } from "react-icons/go";

const menuItems: Array<ItemProps> = [
    {
        Icon: HiOutlineHome,
        label: 'Dashboard',
        url: '/security/admin',
    },
    {
        Icon: GoPeople,
        label: 'Clientes',
        url: '/security/clientes',
    },
    {
        Icon: HiOutlineUsers,
        label: 'Funcionários',
        url: '/security/admin/funcionarios'
    },
    {
        Icon: HiOutlineUsers,
        label: 'Produtos',
        url: '/security/admin/produtos'
    },
    {
        Icon: HiOutlineUsers,
        label: 'Tickets',
        url: '/security/admin/produtos'
    },
    {
        Icon: HiOutlineUsers,
        label: 'Serviços',
        url: '/security/admin/produtos'
    },
    {
        Icon: HiOutlineUsers,
        label: 'Pedidos',
        url: '/security/admin/pedidos'
    }, {
        Icon: HiOutlineUsers,
        label: 'Facturamento',
        url: '/security/admin/faturamento'
    }, {
        Icon: HiOutlineUsers,
        label: 'Logout',
        url: '#',
    }
]

export default menuItems;