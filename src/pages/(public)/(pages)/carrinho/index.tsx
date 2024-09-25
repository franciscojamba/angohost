import { Link, useNavigate } from "react-router-dom"
import Navbar from "./components/navbar"
import Header from "./components/header"
import { GoArrowRight } from "react-icons/go"
import { CreditCard, ShoppingCart } from "lucide-react"
import visa from '@/assets/images/visa.png'
import bai from '@/assets/images/bai.png'
import mcx from '@/assets/images/mcx.png'
import mastercard from '@/assets/images/mastercard.png'
import paypal from '@/assets/images/paypal.png'
import { Helmet } from "react-helmet"
import CartProducts from "./components/cartProducts"
import useCart from "@/hooks/useCart"
import useUtils from "@/utils/useutils"
import { Button } from "@/components/ui/button"
import { PayModal } from "../../components/payModal"

export default function BuyPage() {

    const { getCartProducts, cartLenght, getTotal, openPay, setOpenPay } = useCart()
    const { formatMoney } = useUtils()
    const router = useNavigate()

    return (
        <>
            <Helmet><title>Carrinho de compra - Petrohost</title></Helmet>
            <div className="bg-[#F2F2F2] w-full h-screen flex flex-col">
                <Navbar />
                <section className="w-full flex flex-grow-[1] overflow-hidden">
                    <article className="flex flex-col flex-[1] h-full py-4 ">
                        <div className="px-3" >
                        <Header />
                        </div>
                        <div className="flex-[1] mx-12 mb-2 flex-grow-[1] overflow-y-scroll bg-white white rounded-[20px] flex flex-col items-start justify-start px-8 gap-x-12">
                            <div className="w-full">
                                <h1 className="text-[1.1rem] font-semibold text-gradient">Produtos no carrinho</h1>
                                <div className="flex flex-col w-full items-center justify-between gap-2">
                                    <CartProducts />
                                </div>
                            </div>
                            
                        </div>
                    </article>
                    <aside className="w-[400px] h-full pr-6 overflow-y-scroll">
                        <div>
                            <h1 style={{ lineHeight: '30px' }} className="text-[1.5rem] mt-[24px] font-semibold ">Resumo</h1>
                            <p><strong>{cartLenght}</strong> Items no seu carrinho</p>
                            <div className="'w-ull h-[1px] border-[1px] border-solid mt-3 mb-2" />
                            <div className="flex flex-col gap-1">
                                {getCartProducts() && getCartProducts().map((item, _index) => (
                                    <div key={_index} className='w-full flex items-center justify-between'>
                                        <p className='text-[0.8rem] opacity-70'>{item.name}</p>
                                        <div className="flex gap-2 items-center justify-center">
                                            <p className='font-semibold text-[0.8rem]'>{item.price === 0 ? 'Grátis' : formatMoney(item.price)}</p>
                                            
                                        </div>
                                    </div>
                                ))}
                                {
                                    getCartProducts().length === 0 && 
                                    <div className="flex items-center justify-center flex-col gap-2 w-full h-[200px]">
                                        <div className="flex items-center justify-center text-[0.8rem] gap-2">Sem produtos no carrinho <ShoppingCart strokeWidth={1.7} size={15}/></div>
                                        <Button onClick={()=>router('/hospedagem-de-sites')} variant={'outline'} className="text-[0.8rem]">Adicionar productos{' '} +</Button>
                                    </div>
                                }
                            </div>
                        </div>
                        <div>
                           {getCartProducts().length > 0 && <><label htmlFor="" className=' mt-8 sm:mt-3 font-regular text-[0.8rem]'>Você tem um código de desconto?</label>
                            <div className='flex flex-col sm:flex-row sm:gap-2 w-full mt-2'>
                                <input type="text" placeholder='Insira o código de desconto' className='w-full h-[40px] rounded-[12px] bg-white border-[1px] border-solid px-4' />
                                <button className='w-full mt-2 sm:mt-0 sm:w-max h-[40px] bg-[#222] transition-all duration-300 text-white text-[0.8rem] font-regular gap-2 flex items-center justify-center px-4 rounded-[12px]'>Aplicar <GoArrowRight color='#fff' size={18} /></button>
                            </div>
                            <p className="font-[Rubik] mt-3 opacity-70">Total:</p>
                            <div className="flex items-center jsutify-center">
                                <h1 style={{ lineHeight: '50px' }} className="text-gradient font-bold w-full text-center text-[2.2rem] mt-2">{formatMoney(getTotal())}</h1>
                            </div>
                            <button onClick={()=>setOpenPay(true)} className='w-full h-[40px] mt-2 transition-all duration-300 text-white text-[0.8rem] font-regular gap-2 flex items-center justify-center px-4 rounded-[12px]' style={{ background: 'linear-gradient(122deg, rgba(1,38,83,1) 12%, rgba(0,109,176,1) 100%)' }}>Finalizar compra <CreditCard color='#fff' size={18} /></button>
                            </>
                            }
                            <div className="'w-ull h-[1px] border-[1px] border-solid mt-3 mb-2" />
                            <p className='w-full text-left mt-2 opacity-60'>Apos efetuar o pagamento, finalize a compra e aguarde a verificação do pagamento. Ao utilizar os nossos serviços você conconrda com a nossa <Link className='text-blue-700 underline' to={"/"}>Política de Privacidade</Link> e os nossos <Link className='text-blue-700 underline' to={""}>Termos de Uso</Link>.</p>
                        </div>

                        <div className="flex items-center jsutify-center absolute bottom-3">
                            <img className="w-[70px] opacity-30" src={visa} alt="" />
                            <img className="w-[40px] opacity-30" src={mastercard} alt="" />
                            <img className="w-[90px] opacity-30" src={mcx} alt="" />
                            <img className="w-[70px] opacity-30" src={bai} alt="" />
                            <img className="w-[70px] opacity-30" src={paypal} alt="" />
                        </div>
                    </aside>
                </section>
                <PayModal openedExit={openPay} setOpenedExit={setOpenPay}/>
            </div>
        </>
    )
}