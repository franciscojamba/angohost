
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight } from "lucide-react"
import { Dispatch, SetStateAction, useState } from "react"
import { TransferDomainModal } from "../transferDomainModal"


export function EppKeyModal({ opened, setOpened }: { opened: boolean, setOpened: Dispatch<SetStateAction<boolean>> }) {

    const [key, setKey] = useState("")
    const [openedTransfer, setOpenedTransfer] = useState(false)

    return (
        <>
            <Dialog open={opened} >
                <DialogContent className="sm:max-w-[425px] bg-white">
                    <DialogHeader>
                        <DialogTitle className="text-black">Transferir domínio</DialogTitle>
                        <DialogDescription className="text-black">
                            Para transferir um domínio, insira a chave EPP fornecida pelo seu registrador atual. A chave EPP é um código de autorização necessário para iniciar a transferência do domínio.
                        </DialogDescription>
                    </DialogHeader>
                    <form className="flex flex-col gap-2">
                        <div>
                            <Label htmlFor="username" className="text-right">
                                Chave EPP
                            </Label>
                            <div className="flex gap-2">
                                <Input type="password" value={key} onChange={(e) => setKey(e.target.value)} id="username" placeholder="Insira a chave EPP" className="inputVerifyDomain w-full" />
                            </div>
                        </div>
                        <div className="w-full flex items-center justify-center gap-2">
                            <Button type="button" className="w-1/2" onClick={() => setOpened(false)} variant={'outline'}>Cancelar</Button>
                            <Button onClick={() => {
                                setOpened(false)
                                setOpenedTransfer(true)
                            }} disabled={key.length === 0} type="button" className="w-1/2 bg-[var(--primary)] hover:bg-[var(--primary)] flex items*center justify-center gap-2 ">Avançar <ArrowRight color="#fff" size={20}/></Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
            <TransferDomainModal opened={openedTransfer} setOpened={setOpenedTransfer} eppKey={key} />
        </>
    )
}
