import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import {  Dispatch, SetStateAction, useState } from "react"
import { BuyDomainModal } from "../buyDomainModal"
import { EppKeyModal } from "../eppKeyModal"

export function DomainStatusModal({ opened, setOpened, status, currentDomain, price }: { opened: boolean, setOpened: Dispatch<SetStateAction<boolean>>, status: boolean, currentDomain: string, price: number}) {

    const [openBuy, setOpenBuy] = useState(false)
    const [openedTransfer, setOpenedTransfer] = useState(false)

    return (
        <>
            <Dialog open={opened} >
                <DialogContent className="sm:max-w-[325px] bg-white">
                    <DialogHeader>
                        <DialogTitle className="text-[#000]">{currentDomain}</DialogTitle>
                        <DialogDescription className="text-[#000]">
                            {
                                status ? (
                                    <>Domínio disponível para registro ao preço de <span className="bg-[#12753A11] text-[#12753A] py-1.5 px-3">{price}</span></>
                                ) : (
                                    "Domínio indisponível para registro"
                                )
                            }
                        </DialogDescription>
                    </DialogHeader>
                    <div className="w-full flex flex-col items-center justify-center">
                        <h1 className="text-2xl font-bold" style={{ color: status ? "#096909" : "#9a0000" }}>Domínio {status ? "disponível" : "indisponível"}</h1>
                        <div className="flex items-center justify-center gap-2 mt-6 w-full">
                            <Button className="bg-[#fff] hover:bg-[#fff]" type="button" onClick={() => setOpened(false)} variant={'outline'}>Verificar outro</Button>
                            {
                                status ? (
                                    <Button className="bg-[#012f01] w-1/2 hover:bg-[#012f01]" type="button" onClick={() => {
                                        setOpenBuy(true)
                                        setOpened(false)
                                    }}>Registar</Button>
                                ) : (
                                    <Button  className="bg-[#222] hover:bg-[#222] w-1/2" type="button" onClick={() => {
                                        setOpened(false)
                                        setOpenedTransfer(true)
                                    }}>Transferir</Button>
                                )
                            }
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
            <EppKeyModal opened={openedTransfer} setOpened={setOpenedTransfer}/>
            <BuyDomainModal opened={openBuy} setOpened={setOpenBuy} />
        </>
    )
}
