import useUtils from "../../../../../utils/useutils"
import logo from '../../../../../../public/ANGOHOST-AZUL.png'
import image from '../../../../../assets/images/jd.jpg'
import { Link } from "react-router-dom"
import useClientStore from "../../../../../contexts/clientStore"
import { GoArrowRight } from "react-icons/go"

export default function Navbar() {

    const { isAuthenticated, getAuthenticatedUser } = useUtils()
    const { client } = useClientStore()

    return (
        <nav className='flex items-center justify-between px-4 sm:px-20 py-3'>
                <Link to={'/'}><img src={logo} className='w-[150px] h-max' /></Link>
                {!isAuthenticated() && <Link to={'/cliente/particular'} className='text-[#222] font-semibold flex gap-2 text-[0.8rem] py-[10px] px-4 border-solid border-[2px] border-[#222] hover:border-blue-500 hover:no-underline hover:text-222 rounded-lg'>Entrar <GoArrowRight color='#222' size={18} /></Link>}
                {isAuthenticated() && <div className='text-[#222] font-semibold flex items-center gap-2 text-[0.8rem] py-[10px] px-4 '> <div className='w-max h-max flex flex-col items-end justify-end gap-2'><p style={{ lineHeight: 0, fontSize: '1rem' }}>{client?.nome.split(' ')[0] + ' ' + client?.nome.split(' ')[client?.nome.split(' ').length - 1]}</p> <p className='font-[400]' style={{ lineHeight: 0 }}>{getAuthenticatedUser()}</p> </div><img src={image} className='w-[45px] h-[45px] rounded-full hidden sm:flex' /></div>}
            </nav>
    )
}