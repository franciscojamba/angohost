import { useEffect, useRef, useState } from "react";
import useModalsStore from "../../../../contexts/useModals";
import { ArrowRight, Copy, Info, X } from "lucide-react";
import { toast } from "sonner";
import { TailSpin } from "react-loader-spinner";
import useClientStore from "@/contexts/clientStore";
import cp from "@/assets/images/cplogo.png";
import cpanel from "@/assets/images/cpanel.png";
import none from "@/assets/svgs/undraw-empty.svg"

export default function CPanelCredentialsModal() {
    const { credentials } = useClientStore();
    const { isCPanelOpened, closeCPanelModal } = useModalsStore();
    const [loading, setLoading] = useState<boolean>(false);

    const copyUserName = () => {
        const user = document.getElementById(
            "textUsername"
        ) as HTMLInputElement;
        navigator.clipboard
            .writeText(user.value)
            .then(() => {
                console.log("Copiado");
                toast.success("Usuário copiado!");
            })
            .catch((err) => {
                toast.error("Failed to copy text: ", err);
            });
    };

    const copyPassword = () => {
        const pass = document.getElementById(
            "textPassword"
        ) as HTMLInputElement;
        navigator.clipboard
            .writeText(pass.value)
            .then(() => {
                console.log("User copiado");
                toast.success("Senha copiada!");
            })
            .catch((err) => {
                toast.error("Failed to copy text: ", err);
            });
    };

    const modalRef = useRef<HTMLDivElement>(null);

    // Função para fechar o modal ao clicar fora
    const handleClickOutside = (event: MouseEvent) => {
        if (
            modalRef.current &&
            !modalRef.current.contains(event.target as Node)
        ) {
            closeCPanelModal();
        }
    };

    useEffect(() => {
        if (isCPanelOpened) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isCPanelOpened]);

    return (
        <div
            ref={modalRef}
            style={{
                right: isCPanelOpened ? "20px" : "-420px",
                height: "calc(100vh - 40px)",
            }}
            className="w-[420px] realtive mb-[20px] bg-white border transition-all duration-300 border-l-solid absolute bottom-0 right-[-350px] z-[10000000] rounded-[15px] "
        >
            <div className="flex items-center justify-between gap-2 p-5 w-full">
                <div className="flex items-center gap-2">
                    <div className="w-[50px] h-[50px] flex items-center justify-center rounded-[15px] border">
                        <img src={cp} alt="CPanel" className="w-[50px]" />
                    </div>
                    <div>
                        <h1
                            style={{ lineHeight: "24px" }}
                            className="text-zinc-700 text-[1.2rem] font-[500] color-[#222]"
                        >
                            Credenciais do CPanel
                        </h1>
                        <p className="text-zinc-500 text-[0.8rem]">
                            Copie as suas credenciais e acesse o CP
                        </p>
                    </div>
                </div>
                <button
                    onClick={closeCPanelModal}
                    className="w-[30px] h-[30px] flex items-center justify-center rounded-[8px] border"
                >
                    <X strokeWidth={1.2} color="#444" size={16} />
                </button>
            </div>
            <div className="w-full h-[1px] bg-zinc-200" />
            <div className="h-full flex flex-col gap-4 mt-4 px-5">
                {!credentials?.senha ? (
                    <div className="w-full h-full flex items-center flex-col justify-center">
                        <img src={none} className="w-[100px] mb-3 -mt-[200px]" alt="Nenhuma credencial encontrada" />
                        <p className="text-zinc-500 text-[0.8rem]">Nenhuma credencial encontrada</p>
                    </div>
                ) : (
                    <>
                        <div className="">
                            <label className="font-[500] text-zinc-700 text-[0.9rem]">
                                Usuário
                            </label>
                            <div className="flex gap-2">
                                <input
                                    readOnly
                                    type="text"
                                    value={credentials?.username}
                                    id="textUsername"
                                    className="flex-[1] h-[50px] rounded-[12px] bg-[#fafafa] "
                                />
                                <button
                                    onClick={copyUserName}
                                    className="h-[50px] w-[50px] flex items-center justify-center border rounded-[14px]"
                                >
                                    <Copy size={17} />
                                </button>
                            </div>
                        </div>
                        <div className="">
                            <label className="font-[500] text-zinc-700 text-[0.9rem]">
                                Senha
                            </label>
                            <div className="flex gap-2">
                                <input
                                    readOnly
                                    type="password"
                                    value={credentials?.senha}
                                    id="textPassword"
                                    className="flex-[1] h-[50px] rounded-[12px] bg-[#fafafa] "
                                />
                                <button
                                    onClick={copyPassword}
                                    className="h-[50px] w-[50px] flex items-center justify-center border rounded-[14px]"
                                >
                                    <Copy size={17} />
                                </button>
                            </div>
                        </div>
                        <div className="">
                            <button
                                onClick={() => {
                                    setLoading(true);
                                    const link = document.createElement("a");
                                    link.href =
                                        "https://particulares.phpanel.net:2083/";
                                    link.target = "_blank";
                                    link.rel = "external";
                                    setTimeout(() => {
                                        setLoading(false);
                                        link.click();
                                    }, 2000);
                                }}
                                disabled={loading}
                                className="h-[50px] w-full border text-zinc-70 flex items-center justify-center gap-1 rounded-[12px]"
                            >
                                {loading ? (
                                    <TailSpin color="#fff" width={20} />
                                ) : (
                                    <>
                                        <img
                                            src={cpanel}
                                            className="w-[100px]"
                                            alt="cpanel"
                                        />{" "}
                                        <ArrowRight
                                            className="inline"
                                            size={25}
                                            strokeWidth={2}
                                            color="#F36C30"
                                        />
                                    </>
                                )}
                            </button>
                        </div>
                    </>
                )}
            </div>
            <div className="w-full absolute bottom-4 flex items-center justify-center h-[50px] px-4">
                <div className="flex items-center jsutify-center border rounded-[12px] px-2 py-2 w-full h-full">
                    <button
                        onClick={closeCPanelModal}
                        className="w-[30px] h-[30px] flex items-center justify-center rounded-[8px] border"
                    >
                        <Info strokeWidth={1.2} color="#555" size={16} />
                    </button>
                    <p className="flex-[1] text-zinc-500 text-[0.8rem] ml-3 mt-1">
                        Utilize estas credenciais para acessar o seu painel
                        cPanel. Não compartilhe com terceiros.
                    </p>
                </div>
            </div>
        </div>
    );
}

