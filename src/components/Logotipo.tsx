import logo_azul from '../../public/ANGOHOST-AZUL.png'
import logo_branco from '../../public/ANGOHOST-BRANCO.png'

export const LogotipoAzul = ({ className }: { className?: string }) => {
    return (
        <div className={`w-full flex items-center justify-center ${className}`}>
            <img src={logo_azul} alt="logotipo-petrohost-azul" className='object-fill w-[140px] h-[40px]  ' />
        </div>
    )
}

export const LogotipoBranco = ({ className }: { className?: string }) => {
    return (
        <div className={`w-full flex items-center justify-center ${className}`}>
            <img src={logo_branco} alt="logotipo-petrohost-branco" className='max-w-fit h-[35px] translate-x-[54px] lg:translate-x-0 lg:w-[140px] lg:h-[40px]' />
        </div>
    )
}

