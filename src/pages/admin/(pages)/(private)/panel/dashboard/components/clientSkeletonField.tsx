import Skeleton from "react-loading-skeleton"
import image from '../../../../../../../assets/images/jd.jpg'

interface IClientFiledProps {
    clientName?: string,
    autheticatedUserType: string
}

export default function ClientInfoFiled({ clientName, autheticatedUserType }: IClientFiledProps) {

    function parseClientName(name: string): string {
        return name.split(' ')[0] + ' ' + name.split(' ')[name.split(' ').length - 1]
    }

    return clientName ?
        <div className='w-full text-[#fff] font-regular flex flex-row-reverse items-center justify-start gap-2 text-[0.8rem] py-[10px] '>
            <div className='w-max h-max flex flex-col items-start justify-end gap-2 font-[Rubik]'>
                <p className="font-[Rubik] text-black font-[500]" style={{ lineHeight: 0, fontSize: '0.9rem' }}>{parseClientName(clientName as string)}</p>
                <p className="font-[Rubik] text-black opacity-60" style={{ lineHeight: 0, fontSize: '0.8rem' }}>{autheticatedUserType}</p>
            </div>
            <img src={image} className='w-[45px] h-[45px] rounded-full' />
        </div>
        :
        <div className="text-[#fff] font-regular flex flex-row-reverse items-center gap-2 text-[0.8rem] py-[10px]">
            <div className='w-max h-max flex flex-col items-start justify-end gap-2 font-[Rubik]'>
                <Skeleton className="w-[140px] h-[20px] rounded-full" />
                <Skeleton className="w-[100px] h-[15px] rounded-full" />
            </div>
            <Skeleton className="w-[45px] h-[45px] rounded-full" />
        </div>

}