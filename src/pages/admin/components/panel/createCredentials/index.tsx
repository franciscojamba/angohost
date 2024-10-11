import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dispatch, SetStateAction, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { TailSpin } from "react-loader-spinner";
import api from "@/services/api";
import {
    ServicoDominio,
    ServicoEmail,
    ServicoHospedagem,
} from "@/pages/admin/interfaces/clientServices.interface";

interface ICreateModalProps {
    opened: boolean;
    setOpened: Dispatch<SetStateAction<boolean>>;
    email: string;
    clientId: string;
    name: string;
    service: ServicoEmail | ServicoDominio | ServicoHospedagem;
}

const formSchema = z.object({
    username: z.string(),
    senha: z.string(),
});

type formType = z.infer<typeof formSchema>;

export function CreateCredentialsModal({
    opened,
    setOpened,
    clientId,
    email,
    service,
}: ICreateModalProps) {
    const [loading, setLoading] = useState(false);

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<formType>({
        resolver: zodResolver(formSchema),
    });

    async function createCredentials(data: formType) {
        let url = ""
        if("Dominio" in service){
            url = "credencialServicoDominio"
        }
        if("Plano" in service){
            url = "credencialServicoHospedagem"
        }
        if("Email" in service){
            url = "credencialServicoEmail"
        }
        const form = {
            email: email,
            idCliente: clientId,
            idServico: service.id,
            senha: data.senha,
            username: data.username,
        };
        setLoading(true);
        try {

            console.log(form)
            const response: { message: string; success: boolean } = await (
                await api.post(
                    `/credencialCliente/${url}`,
                    form
                )
            ).data;
            if (response.success) {
                toast.success(response.message);
                setOpened(false);
            } else {
                toast.success("falha ao gerar credenciais!");
            }
        } catch {
            toast.error("Ocorreu um erro ao processar a sua solicitacao!!!");
        } finally {
            setLoading(false);
        }
    }

    return (
        <Dialog open={opened}>
            <DialogContent className="sm:max-w-[425px] bg-white">
                <DialogHeader>
                    <DialogTitle className="text-black">
                        Criar credenciais do CPanel
                    </DialogTitle>
                    <DialogDescription className="text-black">
                        Informe as informações do cliente.
                    </DialogDescription>
                </DialogHeader>
                <form
                    className="flex flex-col gap-2"
                    onSubmit={handleSubmit(createCredentials)}
                >
                    <div className="">
                        <Label htmlFor="name" className="text-right">
                            Nome de usuário
                        </Label>
                        <Input
                            id="name"
                            {...register("username")}
                            placeholder="John Doe"
                            className="col-span-3"
                        />
                    </div>
                    <div className="">
                        <Label htmlFor="username" className="text-right">
                            Senha
                        </Label>
                        <Input
                            id="username"
                            {...register("senha")}
                            placeholder="*********"
                            type="password"
                            className="col-span-3"
                        />
                    </div>
                    {errors.senha &&
                        toast.error(errors.senha?.message as string)}
                    {errors.username &&
                        toast.error(errors.senha?.message as string)}
                    <Button
                        onClick={() => setOpened(false)}
                        variant={"outline"}
                        type="button"
                    >
                        Cancelar
                    </Button>
                    <Button
                        disabled={loading}
                        className="bg-[var(--primary)] hover:bg-[var(--primary)]"
                        type="submit"
                    >
                        {loading ? (
                            <TailSpin color="#fff" width={20} />
                        ) : (
                            <>Criar credenciais</>
                        )}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}

