import logo from '@/assets/ANGOHOST/PNG/ANGOHOST-02.png'
import { Helmet } from 'react-helmet';
import InputField from '@/pages/admin/components/shared/inputField';
import ButtonComponent from '@/pages/admin/components/shared/buttonComponent';
import useAuthAdmin from '@/pages/admin/hooks/useAuth';
import '@/pages/admin/styles/login.css'
import { Toaster } from 'sonner';

export default function AdminLogin() {

    const { signIn, handleSubmit, isLoading, errors, register, loading } = useAuthAdmin()

    if (loading) {
        return <div className='w-full h-[100vh] bg-white flex items-center justify-center' >
            <h1>ANGOHOST</h1>
        </div>
    }

    return (
        <>
            <Helmet><title>Entrar - Administrador</title></Helmet>
            <main className="bg-[var(--background-secondary)] w-full h-full flex flex-col items-center justify-center relative">
            <Toaster richColors position="top-right" />
                <section className="flex items-center justify-center rounded-[18px] p-4 bg-[rgb(var(--background))] shadow-sm">
                    <div className=" card_left w-[0px] md:w-[400px] h-[550px] rounded-[15px] pl-0 md:pl-4 relative flex flex-col pb-[20px] items-start justify-end transition-all duration-300">
                        <img src={logo} alt="logo" className="mb-16 w-[150px] sm:w-[150px] absolute top-4 left-4 pointer-events-none" />
                    </div>
                    <div className="flex flex-col items-left justify-center px-6 h-full">
                        <h1 className="text-[1.7rem] text-[var(--primary)] font-semibold">Bem vindo,</h1>
                        <p className="text-[0.8rem] font-light opacity-70">Insira as suas credenciais para continuar</p>
                        <form onSubmit={handleSubmit(signIn)} className="w-max h-max bg-[rgb(var(--background))] flex flex-col items-center justify-center gap-3 py-7 rounded-lg">
                            <InputField haveError={!!errors.email} {...register('email')} id="Email" label="Email" type="text" placeholder="nome@angohost.ao" />
                            <InputField haveError={!!errors.senha} {...register('senha')} id="Senha" label="Senha" type="password" placeholder="*********" />
                            <ButtonComponent isLoading={isLoading}>Entrar</ButtonComponent>
                        </form>
                    </div>
                </section>
                <footer className="w-full flex items-center justify-center absolute bottom-3 left-0">
                    <p className="text-[0.8rem] text-black opacity-70">©2024 Angohost Lda. Todos os direitos reservados.</p>
                </footer>
            </main>
        </>
    );
}