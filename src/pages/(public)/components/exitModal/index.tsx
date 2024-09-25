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
    openedExit: boolean,
    setOpenedExit: Dispatch<SetStateAction<boolean>>
}

export function ExitModal({ openedExit, setOpenedExit }: IExitModalProps) {

    const router = useNavigate()

    return (
        <>
            <Dialog open={openedExit} >
                <DialogContent className="sm:max-w-[425px] bg-white">
                    <DialogHeader>
                        <DialogTitle className="text-black">Confirmação</DialogTitle>
                        <DialogDescription className="text-black">
                            Já terminou?
                        </DialogDescription>
                    </DialogHeader>
                    <Button variant={"outline"} onClick={()=>setOpenedExit(false)}>Continuar comprando</Button>
                    <Button className="bg-zinc-900 hover:bg-zinc-900" variant={"default"} onClick={()=>router("/carrinho")}>Finalizar compra</Button>
                </DialogContent>
            </Dialog>
        </>
    )
}
