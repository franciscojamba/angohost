import { Dispatch, SetStateAction } from 'react';
import useUtils from '../../../../utils/useutils';
import useClientStore from '../../../../contexts/clientStore';
import IFatura from '../../../../interfaces/fatura';

interface FaturaModel {
    _index: number;
    total: number;
    criadoEm: string;
    planId: number,
    faturaRef: string,
    faturaData: IFatura,
    id: string,
    setShow: Dispatch<SetStateAction<boolean>>,
    setFaturaData: Dispatch<SetStateAction<IFatura>>
}

export default function FaturaCard({criadoEm, setShow, _index, total, id, faturaData, planId, faturaRef, setFaturaData}: FaturaModel) {

    const { formatDate, formatMoney } = useUtils()
    const { client  } = useClientStore()

    function handleClick() {
        setFaturaData({
            cliente: {
                nome: client?.nome || "",
                nif: client?.nif || ""
            },
            produto: {
                ...faturaData.produto
            },
            fatura: {
                ...faturaData.fatura,
                ref: faturaRef,
                emitidaEm: formatDate(criadoEm),
                total: total,
                id: id
            }
        })
        setShow(true);
        console.log(planId);
    }

    return (
        <div onClick={handleClick} className="w-full h-[80px] bg-[#f5f5f5]  border-[1px] border-solid hover:border-[#ccc] transition-colors duration-300 cursor-pointer p-3 rounded-[12px] flex items-center justify-between">
            <div className="">
                <h2 className="text-[1.1rem] font-[500] text-balck  font-[Rubik]" style={{lineHeight: '30px'}}>Fatura {_index + 1}</h2>
                <p className="text-gray-600 font-[Rubik]"><span className="font-regular font-[Rubik]">Total:</span> Kz {formatMoney(total)}</p>
            </div>
            <p className="text-black opacity-50 font-[Rubik] max-w-[50%]"><span className="font-regular"></span> {formatDate(criadoEm)}</p>
        </div>
    )
}
