
import { GoSearch, GoBell, GoDiscussionDuplicate } from 'react-icons/go';
import { HiBars3BottomLeft } from "react-icons/hi2";
import User from './User';
import { IconProps } from './../../interfaces/icon';
export const Header = ({ className, ...props }: { className?: string }) => {

    return (
        <div {...props} className={`w-full flex items-center justify-between p-2 px-3 bg-white rounded-lg gap-2 ${className}`}>
            <Hamburger Icon={HiBars3BottomLeft} />
            <div className='w-[60rem] flex justify-end items-center gap-3'>
                <Search className='w-full' />
                <div className='w-1/2 flex items-center justify-end  gap-2'>
                    <div className='w-1/2 flex items-center gap-2'>
                        <Message />
                        <Bell />
                    </div>
                    <User className='justify-self-end bg-semin w-1/2' />
                </div>
            </div>
        </div>
    )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Hamburger = ({ Icon }: { Icon: any }) => {
    return (
        <button className='bg-white text-primary-900 p-1 text-3xl rounded-lg cursor-pointer  transition-simple  hover:bg-gradient-primary hover:text-white  '>
            <Icon />
        </button>
    )
}


export const Search = ({ className }: { className?: string }) => {
    return (
        <div className={`flex items-center justify-start gap-2 border rounded-3xl px-3 py-1 flex-row-reverse ${className}`}>
            <GoSearch className='text-lg text-secondary' />
            <input type="text" placeholder='Pesquisa...' className='font-light text-sm leading-0 w-full p-1' />
        </div>
    )
}

export const Message = ({ className }: { className?: string }) => {
    return (
        <>
            <IconHeader className={className} Icon={GoDiscussionDuplicate} />
        </>
    )
}

export const Bell = ({ className }: { className?: string }) => {

    return (
        <>
            <IconHeader className={className} Icon={GoBell} />
        </>
    )

}


export const IconHeader = ({ Icon, ...props }: IconProps) => {

    return (
        <button {...props} className=' text-blue-900 text-xl p-1 rounded-md relative'>
            <Icon className="text-md" />
            <span className='absolute w-[8px] h-[8px] bg-blue-900 top-[5px] right-1 rounded-lg'></span>
        </button>

    )

}


