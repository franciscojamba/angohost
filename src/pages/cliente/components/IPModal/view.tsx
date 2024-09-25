import { useRef, useEffect } from "react";
import useModalsStore from "../../../../contexts/useModals"
import { Info, Network, X } from "lucide-react";

export default function IPModal () {

    const { isIPOpened, closeIPModal  } = useModalsStore()

    const modalRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            closeIPModal();
        }
    };

    useEffect(() => {
        if (isIPOpened) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isIPOpened]);

    const data = [
        {
            name: 'Endereço IP',
            nameserver: '158.220.116.163'
        },

    ]

    return (
         <div
            ref={modalRef}
            style={{
                right: isIPOpened ? "20px" : "-420px",
                height: "calc(100vh - 40px)",
            }}
            className="w-[420px] realtive mb-[20px] bg-white border transition-all duration-300 border-l-solid absolute bottom-0 right-[-350px] z-[10000000] rounded-[15px] "
        >
            <div className="flex items-center justify-between gap-2 p-5 w-full">
                <div className="flex items-center gap-2">
                    <div className="w-[50px] h-[50px] flex items-center justify-center rounded-[15px] border">
                        <Network strokeWidth={1.2} color="#F36C30" size={30} />
                    </div>
                    <div className="flex-[1]">
                        <h1
                            style={{ lineHeight: "24px" }}
                            className="text-zinc-700 text-[1.2rem] font-[500] color-[#222]"
                        >
                            IPs dedicados
                        </h1>
                        <p className="flex-[1] text-zinc-500 text-[0.8rem]">
                            Copie o endereço IP e configure o seu domínio
                        </p>
                    </div>
                </div>
                <button
                    onClick={closeIPModal}
                    className="w-[30px] h-[30px] flex items-center justify-center rounded-[8px] border"
                >
                    <X strokeWidth={1.2} color="#444" size={16} />
                </button>
            </div>
            <div className="w-full h-[1px] bg-zinc-200" />
            <div className="flex flex-col gap-4 mt-4 px-5">
                {data.map((item, _index) => (
                    <div key={_index} className="">
                        <label className="font-[500] text-zinc-700 text-[0.9rem]">
                            {item.name}
                        </label>
                        <div className="flex gap-2">
                            <input
                                readOnly

                                type="text"
                                value={item.nameserver}
                                id="textPassword"
                                className="px-5 flex-[1] h-[50px] rounded-[12px] bg-[#fafafa] "
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full absolute bottom-4 flex items-center justify-center h-[50px] px-4">
                <div className="flex items-center jsutify-center border rounded-[12px] px-2 py-2 w-full h-full">
                    <button
                        onClick={closeIPModal}
                        className="w-[30px] h-[30px] flex items-center justify-center rounded-[8px] border"
                    >
                        <Info strokeWidth={1.2} color="#555" size={16} />
                    </button>
                    <p className="flex-[1] text-zinc-500 text-[0.8rem] ml-3 mt-1">
                    Utilize estes IPs dedicados para configurar seu domínio. Para ajuda, entre em contato com o suporte.
                    </p>
                </div>
            </div>
        </div>
        
    )
}