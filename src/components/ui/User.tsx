
import { GoPerson, GoChevronDown } from 'react-icons/go';
const User = ({ className }: { className?: string }) => {
    return (
        <>
            <button className={`w-full flex items-center justify-end ${className} w-auto gap-2`}>
                <span className='bg-blue-50 p-1 rounded-full flex items-center justify-center'>

                <GoPerson className='text-xl text-blue-900 ' />
                </span>
                <span className='flex items-center justify-center text-xs font-light text-black'>John Doe</span>
                <GoChevronDown className='text-black text-xl' />
            </button>
        </>
    )

}


export default User;