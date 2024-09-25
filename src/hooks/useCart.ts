import useStore from "@/contexts/useStore";
import api from "@/services/api";
import useUtils from "@/utils/useutils";
import Cookies from "js-cookie"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface IProduct {
    id: string;
    name: string;
    price: number;
    [key: string]: unknown;
}

interface ICartProductList {
    products: IProduct[];
}

type IFactProduct = {
    planoHospedagemId: unknown,
    planoDominioId?: unknown,
    planoEmailId?: unknown,
    quantidade?: unknown,
}

type IFact = {
    produtos: IFactProduct[],
    total: number,
    idCliente: string | number | undefined,
    idCiclo: string | number | undefined,
    dominio: string | undefined,
    endereco: {
        pais: string | undefined,
        endereco: string | undefined
    },
    titular: {
        nif: string | number | undefined,
        nome: string | undefined,
    }
    ids: {
        planoHospedagemId?: unknown,
        planoDominioId?: unknown,
        planoEmailId?: unknown,
    },
    planoOK: boolean,
    dominioOK: boolean,
    emailOK: boolean,
    infoEmail: {
        dominio?: string | undefined,
        preco: number,
        quantidade: number,
    }
}


interface UserData {
    nif: string;
    nome: string;
    endereco: string;
    pais: string;
    domain: string;
    extensionId: number;
    new: boolean;
    to: string;
}

interface DomainItem {
    id: string;
    name: string;
    price: number;
    domainName: string;
    newDomain: boolean;
    extensionId: string;
    type: string;
    joined: boolean;
    eppKey?: string
}

interface HostingItem {
    id: string;
    name: string;
    price: number;
    planId: string;
    domain: string;
    cicle: number;
    cicleId: string;
    newDomain: boolean;
    extensionId: string;
    type: string;
}

interface EmailItem {
    id: string;
    name: string;
    price: number;
    planId: string;
    domain: string;
    emailQuantity: number;
    newDomain: boolean;
    extensionId: string;
    type: string;
}


export default function useCart() {

    const router = useNavigate()
    const { getSessionToken } = useUtils()

    const { getClientID } = useUtils()
    const [openTrans, setOpenTrans] = useState(false)
    const { cartLenght, setCartLenght } = useStore()
    const [openPay, setOpenPay] = useState(false)
    const [loading, setLoading] = useState(false)
    const [openAccount, setOpenAccount] = useState(false)
    const { isAuthenticated } = useUtils()
    const [sets, setSets] = useState<{
        planoOK: boolean,
        dominioOK: boolean,
        emailOK: boolean,
    }>({
        dominioOK: false,
        emailOK: false,
        planoOK: false
    })
    const [domainItem, setDomainItem] = useState<DomainItem | null>()
    const [hostingItem, setHostingItem] = useState<HostingItem | null>()
    const [emailItem, setEmailItem] = useState<EmailItem | null>()

    function addToCart(product: IProduct) {
        const cart: ICartProductList = Cookies.get('cart')
            ? JSON.parse(Cookies.get('cart') as string)
            : { products: [] };

        cart.products.push(product);
        Cookies.set('cart', JSON.stringify(cart));
        setCartLenght(cart.products.length)
    }

    useEffect(() => {
        const cart: ICartProductList = Cookies.get('cart')
            ? JSON.parse(Cookies.get('cart') as string)
            : { products: [] };

        setCartLenght(cart.products.length);
    }, []);

    function clearCart() {
        Cookies.remove('cart')
        setCartLenght(0);
    }

    function getCartProducts(): IProduct[] {
        const cart: ICartProductList = Cookies.get('cart')
            ? JSON.parse(Cookies.get('cart') as string)
            : { products: [] };

        return cart.products
    }

    function getTotal() {
        let total = 0
        const cart: ICartProductList = Cookies.get('cart')
            ? JSON.parse(Cookies.get('cart') as string)
            : { products: [] };
        for (const prod of cart.products) {
            total += prod.price
        }
        return total
    }

    function removeFromCart(productId: string) {
        const cart: ICartProductList = Cookies.get('cart')
            ? JSON.parse(Cookies.get('cart') as string)
            : { products: [] };

        const updatedCart = cart.products.filter(product => product.id !== productId);
        Cookies.set('cart', JSON.stringify({ products: updatedCart }));

        setCartLenght(updatedCart.length);
    }

    useEffect(() => {
        const cart: ICartProductList = Cookies.get('cart')
            ? JSON.parse(Cookies.get('cart') as string)
            : { products: [] };

        for (const item of cart.products) {
            console.log(item)
            if (item.type === "email") {
                setSets((prevState) => ({
                    ...prevState,
                    emailOK: true
                }));
                setEmailItem(item as unknown as EmailItem)
            }
            else if (item.type === "hosting") {
                setSets((prevState) => ({
                    ...prevState,
                    planoOK: true
                }));
                setHostingItem(item as unknown as HostingItem)
            }
            else if (item.type === "domain") {
                setSets((prevState) => ({
                    ...prevState,
                    dominioOK: true
                }));
                setDomainItem(item as unknown as DomainItem)
            }
        }
    }, [])

    async function pay() {
        setLoading(true)
        if (!isAuthenticated()) {
            setOpenAccount(true)
            setLoading(false)
        } else {
            if (domainItem && domainItem.eppKey) {
                const owner: UserData = Cookies.get('newDomainTitular')
                    ? JSON.parse(Cookies.get('newDomainTitular') as string)
                    : { products: [] };
                const data = {
                    total: getTotal(),
                    idCliente: getClientID(),
                    dominio: domainItem.domainName,
                    endereco: {
                        pais: owner.pais,
                        endereco: owner.endereco
                    },
                    titular: {
                        nif: owner.nif,
                        nome: owner.nome,
                    },
                    planoDominioId: domainItem.extensionId,
                    chaveEpp: domainItem.eppKey
                }
                console.log(domainItem)
                const response: { success: boolean } = await (await api.post('/servicosDominiosTransferencia/transferirDominio', data)).data
                if (response.success) {
                    toast.success("DTransferência de domínio solicitada com sucesso!")
                    setLoading(false)
                    setOpenTrans(false)
                    setOpenPay(false)
                    clearCart()
                    router('/cliente/painel/dominios/servicos')
                }
                else {
                    toast.error("Ocorreu um erro ao processar o seu pedido!")
                }
                setLoading(false)
            }
            else {
                try {
                    const owner: UserData = Cookies.get('newDomainTitular')
                        ? JSON.parse(Cookies.get('newDomainTitular') as string)
                        : { products: [] };
                    const fatura: IFact = {
                        produtos: [{
                            planoHospedagemId: hostingItem?.planId,
                            planoDominioId: domainItem?.id,
                            planoEmailId: emailItem?.id,
                            quantidade: emailItem?.emailQuantity
                        }],
                        total: getTotal(),
                        idCliente: getClientID(),
                        dominio: owner.domain || hostingItem?.domain || emailItem?.domain,
                        endereco: {
                            endereco: owner.endereco,
                            pais: owner.pais
                        },
                        titular: {
                            nif: owner.nif,
                            nome: owner.nome
                        },
                        planoOK: sets.planoOK,
                        dominioOK: sets.dominioOK,
                        emailOK: sets.emailOK,
                        infoEmail: {
                            dominio: emailItem?.domain,
                            preco: emailItem?.price || 0,
                            quantidade: emailItem?.emailQuantity || 0
                        },
                        ids: {
                            planoDominioId: domainItem?.id || 0,
                            planoEmailId: emailItem?.planId,
                            planoHospedagemId: hostingItem?.planId
                        },
                        idCiclo: hostingItem?.cicleId
                    }
                    if (!isAuthenticated()) {
                        setOpenAccount(true)
                        setLoading(false)
                    }
                    else {
                        const response: { success: boolean } = await (await api.post('/faturas/compra', fatura, {
                            headers: {
                                Authorization: `Bearer ${getSessionToken()}`
                            }
                        })).data
                        if (response.success) {
                            toast.success("Compra efetuada com sucesso!")
                            setLoading(false)
                            setOpenTrans(false)
                            setOpenPay(false)
                            clearCart()
                            router('/cliente/painel/dashboard')
                        }
                        else {
                            toast.error("Ocorreu um erro ao processar o seu pedido!")
                            setLoading(false)
                        }
                        console.log(fatura);
                    }
                }
                catch {
                    toast.error("Ocorreu um erro ao processar o seu pedido!")
                    setLoading(false)
                }
                setLoading(false)
            }
        }

    }

    return { addToCart, cartLenght, openTrans, setOpenTrans, clearCart, getCartProducts, getTotal, removeFromCart, openPay, setOpenPay, pay, loading, openAccount, setOpenAccount };
}