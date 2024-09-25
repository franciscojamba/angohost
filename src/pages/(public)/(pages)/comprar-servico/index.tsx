import { Link, useParams } from 'react-router-dom'
import { GoArrowRight } from "react-icons/go";
import LoaderComponent from '../../../cliente/components/loader/view';
import '../../../cliente/styles/globals.css'
import bai from '../../../../assets/svgs/logo-bai.svg'
import atl from '../../../../assets/images/atlantico.png'
import usePayHosting from '../../../../hooks/usePayHosting';
import useUtils from '../../../../utils/useutils';
import './style.css'
import Navbar from './components/navbar';
import Header from './components/header';
import usePayStore from '../../../../contexts/payStore';
import RegisterNewDomainSelector from './components/registerNewDomainSelector';
import CheckDomainAvailableForm from './components/checkDomainAvailableForm';
import ReuseDomainForm from './components/reuseDomainForm';
import RegisterNewDomainForm from './components/registerNewDomainForm';
import PlanCicleList from './components/planCicleList';
import SignSelector from './components/signSelector';
import VerifyUserDocumentNumberForm from './components/verifyUserDocumentNumberForm';
import SignInModeSelector from './components/signInModeSelector';
import SignInForm from './components/signInForm';
import SignUpBIForm from './components/signUpBIForm';
import SignUpNIFForm from './components/signUpNIFForm';
import AutoFillClientForm from './components/autoFillClientForm';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
} from "@/components/ui/dialog"

export default function BuyPlan() {

    const { id } = useParams()

    const { location, isLoading, payMethod, setPayMethod, pay, submitBI, submitNIF, isOpen } = usePayHosting()
    const { isAuthenticated } = useUtils()

    const { formStep, currentDomainAvailable, domainVerifyProcessComplete, isBILoaded, isNIFLoaded, signMode, currentPlan, currentPlanCicle, currentDomain, currentDomainExtension, registerNewDomain } = usePayStore()

    const { formatMoneyWithoutKz } = useUtils()

    return (
        <div className="w-full h-max bg-[#edf3f8]">
            <Navbar />
            <div className='w-full px-4 lg:px-0 lg:w-[1000px] mx-auto pt-[30px] pb-8' style={{ height: (formStep <= 1) || (formStep <= 2) ? "calc(100vh - 75px)" : "max-content" }}>
                <Header />
                {formStep === 1 && <section className='w-full mt-[50px]'>
                    <h1 className='w-full text-left text-lg sm:text-[1.9rem] font-semibold text-[#0e3f7b] '>1. Registe o seu domínio</h1>
                    <RegisterNewDomainSelector />
                    <div className='w-full h-max flex-col gap-3 flex items-center justify-between flex-wrap mt-[50px]' style={{ marginBottom: formStep === 1 ? "70px" : "" }}>

                        {(!currentDomainAvailable) &&
                            <div className="search-bar-dominio-center" >
                                {registerNewDomain && <CheckDomainAvailableForm />}
                                {!registerNewDomain && <ReuseDomainForm />}
                            </div>
                        }

                        {(domainVerifyProcessComplete && currentDomainAvailable) && (
                            <RegisterNewDomainForm />
                        )}

                    </div>
                </section>}
                {formStep >= 2 && <section id='sec2' className='w-full h-max mb-[50px] mt-[50px]'>
                    <h1 className='w-full text-left text-lg sm:text-[1.9rem] font-semibold text-[#0e3f7b]'>2. Selecione o ciclo de duração do plano</h1>
                    <PlanCicleList planId={id as string} />
                </section>}
                {formStep >= 3 && <section className='w-full h-max mt-[80px]'>
                    <h1 className='w-full text-left text-lg sm:text-[1.9rem] font-semibold text-[#0e3f7b]'>3. Insira as suas informações</h1>
                    {!isAuthenticated() && <>
                        <SignSelector />
                        <div className='w-full h-max mt-[50px] pb-[50px]'>
                            <div className='w-full h-max'>
                                <div className='flex gap-4 flex-col w-full items-center justify-center'>
                                    {(!isBILoaded && !isNIFLoaded && signMode === 1) && (
                                        <VerifyUserDocumentNumberForm />
                                    )}
                                    {(isBILoaded && signMode === 1) && (
                                        <SignUpBIForm location={location} submitBI={submitBI} />
                                    )}
                                    {(isNIFLoaded && signMode === 1) && (
                                        <SignUpNIFForm location={location} submtiNIF={submitNIF} />
                                    )}
                                    {signMode === 2 && (
                                        <>
                                            <SignInModeSelector />
                                            <SignInForm />
                                        </>
                                    )}
                                </div>
                            </div>
                        </div></>}
                    {(isAuthenticated()) && <AutoFillClientForm />}
                </section>}
                {formStep >= 4 && <section className='w-full h-max mt-[80px] pb-[40px]'>
                    <h1 className='w-full text-left text-lg sm:text-[1.9rem] font-semibold text-[#0e3f7b]'>4. Método de pagamento</h1>
                    <div className='flex flex-col md:flex-row items-start justify-center gap-2 w-full pt-12'>
                        <div className='w-full md:w-[40%] flex flex-col  items-start gap-2 justify-between'>
                            <p className='font-semibold text-[1rem]'>Selecione o método de pagamento</p>
                            <div onClick={() => setPayMethod(1)} style={payMethod === 1 ? { background: '#e7f3ff' } : { background: '#fff' }} className='border-solid border-[1px] py-3 px-4 rounded-[12px] w-full h-[50px] items-center flex flex-row-reverse justify-between gap-2 border-blue-200'><img src={bai} alt="" className='w-[70px]' />{' '} Banco BAI</div>
                            <div onClick={() => setPayMethod(2)} style={payMethod === 2 ? { background: '#e7f3ff' } : { background: '#fff' }} className='border-solid border-[1px] py-3 px-4 rounded-[12px] w-full h-[50px] items-center flex flex-row-reverse justify-between gap-2 border-blue-200'><img src={atl} alt="" className='w-[120px]' />{' '} Banco Atlântico</div>
                        </div>
                        <div className="w-full md:w-[60%] h-max flex items-center justify-center">
                            <div className='w-full h-max p-4 px-4 rounded-[12px] bg-white border-solid border-[1px] border-blue-200'>
                                <h1 className='text-lg font-semibold text-[#0e3f7b]'>Resumo do pagamento</h1>
                                <div className='mt-2'>
                                    <label htmlFor="" className='font-semibold text-[0.9rem]'>Dominio</label>
                                    <input type="text" disabled value={`${currentDomain}`} className='w-full mt-1 h-[49px] rounded-[12px] bg-white border-[1px] border-solid px-4' />
                                </div>
                                <div className='mt-2'>
                                    <label htmlFor="" className='font-semibold text-[0.9rem]'>Descrição do serviço</label>
                                    <input type="text" disabled value={currentPlan.titulo} className='w-full mt-1 h-[49px] rounded-[12px] bg-white border-[1px] border-solid px-4' />
                                </div>
                                <div className='mt-2'>
                                    <label htmlFor="" className='font-semibold text-[0.9rem]'>Ciclo de duração do serviço</label>
                                    <input type="text" disabled value={currentPlanCicle.duracao} className='w-full mt-1 h-[49px] rounded-[12px] bg-white border-[1px] border-solid px-4' />
                                    <div className='mt-2'>
                                        <div className='w-full flex items-center justify-between'>
                                            <p className='text-[0.8rem] opacity-70'>Plano de hospedagem</p>
                                            <p className='font-semibold text-[0.8rem]'> {formatMoneyWithoutKz(currentPlan.preco * currentPlanCicle.multiplicador)}</p>
                                        </div>
                                        <div className='w-full flex items-center justify-between'>
                                            <p className='text-[0.8rem] opacity-70'>Dominio</p>
                                            <p className='font-semibold font-[Rubik] text-[0.8rem]'>
                                                {registerNewDomain ? (
                                                    formatMoneyWithoutKz(currentDomainExtension.preco) // Filtro para remover valores null e juntar os preços em uma string
                                                ) : "Gratuito"}
                                            </p>
                                        </div>
                                        {/* {
                                            currentPlan.recursos.slice(0, 3).map((recurso, _index) => (
                                                <div key={_index} className='w-full flex items-center justify-between'>
                                                    <p className='text-[0.8rem] opacity-70'>{recurso}</p>
                                                    <p className='font-semibold text-[0.8rem]'>Gratuito</p>
                                                </div>
                                            ))
                                        } */}
                                        <div className='w-full flex items-center justify-between'>
                                            <p className='text-[0.8rem] opacity-70'>Proteção de privacidade de domínio WHOIS</p>
                                            <p className='font-semibold text-[0.8rem]'>Gratuito</p>
                                        </div>
                                        <div className='w-full flex items-center justify-between'>
                                            <p className='text-[0.8rem] opacity-70'>Certificado SSL</p>
                                            <p className='font-semibold text-[0.8rem]'>Gratuito</p>
                                        </div>
                                        <div className='w-full flex items-center justify-between'>
                                            <p className='text-[0.8rem] opacity-70'>32 Contas de Email</p>
                                            <p className='font-semibold text-[0.8rem]'>Gratuito</p>
                                        </div>

                                        <label htmlFor="" className=' mt-8 sm:mt-3 font-regular text-[0.9rem]'>Você tem um código de desconto?</label>
                                        <div className='flex flex-col sm:flex-row sm:gap-2 w-full'>
                                            <input type="text" placeholder='Insira o código de desconto' className='w-full h-[49px] rounded-[12px] bg-white border-[1px] border-solid px-4' />
                                            <button className='w-full mt-2 sm:mt-0 sm:w-max h-[49px] bg-[#0e3f7b] transition-all duration-300 text-white text-[0.9rem] font-regular gap-2 flex items-center justify-center px-4 rounded-[12px]'>Verificar <GoArrowRight color='#fff' size={18} /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    <label htmlFor="" className='font-semibold text-[0.9rem]'>Total</label>
                                    <div className='flex flex-col w-max mx-auto h-max items-start justify-center'>
                                        {/* <div className='w-max h-max flex items-center justify-center gap-2 mt-[10px]'>
                                            <p className='text-[0.8rem] mt-2 line-through font-regular opacity-70'>140 000Kz</p>
                                            <p className='w-max py-1 px-2 text-[0.8rem] bg-[#0c61ca24] text-[#0e3f7b] rounded-full'>Poupe 1 0000Kz</p>
                                        </div> */}
                                        <div className='w-full h-max flex items-center justify-center gap-1'>
                                            <p className=' text-[2rem] sm:text-[3.5rem] text-[#0e3f7b] font-bold'>{registerNewDomain ? <>{formatMoneyWithoutKz((currentPlan.preco * currentPlanCicle.multiplicador) + currentDomainExtension.preco)}</> : <>{formatMoneyWithoutKz(currentPlan.preco * currentPlanCicle.multiplicador)}</>}</p>
                                            <p className='opacity-80 mt-4 text-[#0e3f7b] text:sm sm:text-lg'>{currentPlanCicle.duracao}</p>
                                        </div>
                                    </div>
                                </div>
                                <h1 className='text-lg mt-10 font-semibold text-[#0e3f7b]'>Coordenadas bancárias</h1>
                                <div className='w-full flex-col pt-6 h-max flex items-center justify-center'>
                                    <img src={payMethod === 1 ? bai : atl} alt="" className='w-[120px]' />
                                    <div className='mt-2 w-full'>
                                        <label htmlFor="" className='font-semibold text-[0.9rem]'>IBAN </label>
                                        <input type="text" disabled value={payMethod === 1 ? " 0040 0000 1923 3559 1019 8" : "0040 0000 1923 3559 1019 8"} className='w-full text-center mt-1 h-[30px] rounded-[12px] bg-white border-solid px-4' />
                                    </div>
                                    <div className='mt-2 w-full'>
                                        <label htmlFor="" className='font-semibold text-[0.9rem]'>Conta </label>
                                        <input type="text" disabled value={payMethod === 1 ? "119233559 10 001" : "119233559 10 001"} className='w-full text-center mt-1 h-[30px] rounded-[12px] bg-white border-solid px-4' />
                                    </div>
                                    <div className='mt-2 w-full'>
                                        <label htmlFor="" className='font-semibold text-[0.9rem]'>Titular </label>
                                        <input type="text" disabled value="ANGOHOST PRESTACAO DE SERVICOS LDA" className='w-full mt-1 text-center h-[30px] rounded-[12px] bg-white border-solid px-4' />
                                    </div>
                                    <p className='w-full text-left mt-8 opacity-60'>Apos efetuar o pagamento, finalize a compra e aguarde a verificação do pagamento. Ao utilizar os nossos serviços você conconrda com a nossa <Link className='text-blue-700 underline' to={"/"}>Política de Privacidade</Link> e os nossos <Link className='text-blue-700 underline' to={""}>Termos de Uso</Link>.</p>
                                    <button disabled={isLoading} onClick={async () => {
                                        if (isBILoaded) {
                                            const buttonbi = document.querySelector('.submitBI') as HTMLButtonElement
                                            buttonbi.click()
                                        }
                                        else if (isNIFLoaded) {
                                            const buttonnif = document.querySelector('.submitNIF') as HTMLButtonElement
                                            buttonnif.click()
                                        }
                                        else if (isAuthenticated()) {
                                            pay()
                                        }
                                    }} className='w-full mt-4 h-[49px] rounded-[12px] border-[1px] border-solid px-4 text-white flex items-center justify-center' style={{ background: 'linear-gradient(90deg, #2160ad, #082140)' }}>{isLoading ? <LoaderComponent color="#fff" /> : "Finalizar compra"}
                                    </button>
                                    <Dialog open={isOpen}>
                                        <DialogContent className='modal' onInteractOutside={(event) => event.preventDefault()} >
                                            <DialogHeader>
                                                <DialogDescription>
                                                    <div className='w-full h-[500px] flex flex-col items-center justify-center'>
                                                        <h1 className='font-[Rubik] text-[1.6rem] font-semibold text-white'>Finalizando a compra 🤩🎉</h1>
                                                        <p className='text-white text-center'>Sua compra está sendo processada. Em instantes, você terá acesso ao seu serviço de hospedagem.</p>
                                                        <iframe className='w-[400px] h-[300px]' src="https://lottie.host/embed/4040a937-db2a-4f16-80fe-3d1d11a986db/3Rf17MB0f9.json"></iframe>
                                                        <p className='text-white text-center'>Ao finalizar a compra, você concorda com as nossas <span className='text-[#8ccbff]'>Políticas de Privacidade </span>e  <span className='text-[#8ccbff]'>Termos de Uso</span>.</p>
                                                    </div>
                                                </DialogDescription>
                                            </DialogHeader>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>}
                <p className='w-full text-center opacity-50 mt-6'>©2024 ANGOHOST, LDA. Todos os direitos reservados</p>
            </div >
        </div >
    )
}
