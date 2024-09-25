import { Instagram } from 'lucide-react'
import logo from '../../../../assets/images/ANGOHOST-02.png'
import { Link } from 'react-router-dom'

export default function BetaPage() {
    return (
        <>

        <main style={{ background: 'linear-gradient(90deg, #2160ad, #082140)' }} className="w-full h-[100vh] flex-col sm:flex-row flex items-center justify-center realtive">
            <Link to={'/'}><img src={logo} alt="logo" className="w-[170px] absolute top-6 left-8" /></Link>
            <iframe className='w-[150px] h-[150px] sm:w-[300px] sm:h-[300px]' src="https://lottie.host/embed/d16093f3-998c-4cab-980f-f345f5bddd8a/DlXVYoJUOT.json"></iframe>
            <div>
                <h1 style={{lineHeight: '30px'}} className='text-white font-[Rubik] text-[1.2rem] mb-1'>Algo novo e empolgante está a caminho!!!</h1>
                <div className='flex gap-2 h-max items-start justify-start'>
                    <div className="opacity-20 bg-white  w-[130px] sm:w-[4px] rounded-lg h-[135px]" />
                    <div className=''>
                        <p className='max-[300px] w-[340px] text-white opacity-60 mb-2 font-[300] text-justify'>Fique de olho! Em breve, revelaremos todas as novidades. Se quiser ser o primeiro a saber quando estivermos no ar, inscreva-se para receber atualizações.</p>
                        <Link className="w-max px-3 rounded bg-[#ffffff22] hover:text-[#ffffff99] transition-colors duration-300 flex items-center justify-center gap-2 text-[#ffffff77] font-[Rubik] h-[44px] text-[0.8rem] " to={'https://www.instagram.com/angohost/'}>Acompanhe as atualizações <Instagram strokeWidth={2} size={15} /></Link>
                    </div>
                </div>

            </div>
        </main>
        </>
    )
} 