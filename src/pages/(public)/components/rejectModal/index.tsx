import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Dispatch, SetStateAction } from "react"
import { useNavigate } from "react-router-dom"

interface IExitModalProps {
    openedReject: boolean,
    setOpenedReject: Dispatch<SetStateAction<boolean>>
}

export function RejectModal({ openedReject, setOpenedReject }: IExitModalProps) {

    const router = useNavigate()

    return (
        <>
            <Dialog open={openedReject} >
                <DialogContent className="sm:max-w-[425px] bg-white">
                    <DialogHeader>
                        <DialogTitle className="text-black">Finalize a compra</DialogTitle>
                        <DialogDescription className="text-black">
                            Você já tem produtos pendente no carrinho. Finalize a compra antes de adicionar mais produtos.
                        </DialogDescription>
                    </DialogHeader>
                    <Button variant={"outline"} onClick={()=>setOpenedReject(false)}>Cancelar</Button>
                    <Button className="bg-zinc-900 hover:bg-zinc-900" variant={"default"} onClick={()=>router("/carrinho")}>Finalizar compra</Button>
                </DialogContent>
            </Dialog>
        </>
    )
}
