import '../../../../styles/globals.css'
import logo from '@/assets/images/Icone-03.png'
import ClientInfoFiled from '../dashboard/components/clientSkeletonField'
import useClientStore from '@/contexts/clientStore'
import useUtils from '@/utils/useutils'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Skeleton from 'react-loading-skeleton'
import { BadgeDollarSign, Download, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'
import { IFatura } from '@/interfaces/clientInterface'
import api from '@/services/api'
import { TailSpin } from 'react-loader-spinner'
import { toast } from 'sonner'

export default function InvoicesView() {

    const { client } = useClientStore()
    const { formatMoney, formatDate, formatMoneyWithoutKz } = useUtils()
    const [loading, setLoading] = useState(false)
    const [loadingEmail, setLoadingEmail] = useState(false)
    const [selectedFatura, setSelectedFatura] = useState<IFatura>({ atualizadoEm: '', status: '', clienteId: '', criadoEm: '', id: '', planoId: 0, reference: '', total: 0, faturaProdutos: [] })

    async function saveFactura() {
        setLoading(true)
        try {
            const response = await api.get(`/faturaPDF/gerarFaturaCliente/${selectedFatura.id}/pdf`, {
                responseType: 'blob'  // ou 'arraybuffer'
            });
            const blob = new Blob([response.data], { type: 'application/pdf' });
            const url = window.URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.href = url;
            a.download = `Fatura.pdf`;
            a.click();
            toast.success('Fatura enviada com sucesso!');
        }
        catch (error) {
            console.log(`Erro ao gerar fatura: ${error}`)
        }
        finally {
            setLoading(false)
        }
    }

    async function sendFatura() {
        setLoadingEmail(true)
        try {
            await api.get(`/faturaPDF/enviarFaturaPdfNoCliente/${client?.id}/${selectedFatura.id}/pdf`)
            toast.success('Sucesso!', {
                description: `Fatura enviada para ${client?.email}`
            })
        }
        catch (error) {
            console.log(`Erro ao gerar fatura: ${error}`)
        }
        finally {
            setLoadingEmail(false)
        }
    }

    useEffect(() => {
        if (client) {
            console.log(client?.faturas[client.faturas.length - 1].faturaProdutos)
            setSelectedFatura(client?.faturas[0] as IFatura)
        }
    }, [client])

    if (!client?.faturas[0].reference) {
        return <div className='w-full h-full flex items-center justify-center'>
            <TailSpin color='#222' width={20} />
        </div>
    }

    return (
        <div className="w-full h-full py-6 px-3">
            <div className="w-full gap-[20px] flex items-center justify-between" style={{ height: '100%' }}>
                <div className="w-[70%] h-full bg-white rounded-[20px] border-solid border-[1px] flex items-start flex-col justify-start">
                    <div className='bg-[#F6F8FC] w-full h-[300px] rounded-[20px] p-5 px-9'>
                        <div className='w-full h-max flex items-center justify-between'>
                            <h1 className='font-semibold text-[#3a3a3a] text-[2rem]'>Fatura</h1>
                            <img className='w-[50px]' src={logo} alt="logo" />
                        </div>
                        <div className='w-full h-max flex items-start justify-between mt-[40px]'>
                            <div className='flex-[1px] h-full flex flex-col items-start justify-between'>
                                <div className='w-full flex items-start justify-between'>
                                    <div className='flex flex-col'>
                                        <h1 style={{ lineHeight: '20px' }} className='font-semibold mb-3 text-[#19213D] text-[1rem]'>Detalhes da fatura</h1>
                                        <ul className='flex flex-col list-none gap-1 opacity-70 text-[0.8rem]'>
                                            <li>ID da Fatura: <strong>{selectedFatura.reference}</strong></li>
                                            <li>Data de emissão: <strong>{formatDate(selectedFatura.criadoEm)}</strong></li>
                                            <li>Data de atualização: <strong>{formatDate(selectedFatura.atualizadoEm)}</strong></li>
                                        </ul>
                                    </div>
                                    <div className='flex-[1] flex items-center justify-center'>
                                        <div>
                                            <h1 style={{ lineHeight: '20px' }} className='font-semibold text-[#19213D] text-[1rem] mb-3'>Angohost Lda</h1>
                                            <ul className='flex flex-col list-none gap-1 opacity-70 text-[0.8rem]'>
                                                <li>(+244) 222 304 201</li>
                                                <li>Av. Pedro de Castro Van Dúnem Loy</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex itemms-center justify-start gap-3 mt-3'>
                                    <button disabled={loading} onClick={saveFactura} className='w-[100px] h-[35px] text-zinc-700 rounded-[8px] bg-zinc-200 flex items-center justify-center gap-2'><Download size={16} />{loading ? <TailSpin width={20} color='#222' /> : <>Salvar</>}</button>
                                    <button disabled={loadingEmail} onClick={sendFatura} className='w-[100px] h-[35px] text-zinc-700 rounded-[8px] bg-zinc-200 flex items-center justify-center gap-2'><Mail size={16} />{loadingEmail ? <TailSpin color='#222' width={20} /> : <>Email</>}</button>
                                </div>
                            </div>
                            <div className='max-w-[240px] pb-4 flex-flex-col items-start justify-start gap-2 transition-all duration-300 h-[max] bg-white rounded-[18px] p-4'>
                                <p className='font-semibold text-[0.9rem]'>Fatura para: </p>
                                <div className='w-max'>
                                    <ClientInfoFiled />
                                </div>
                                {!client?.nome ? <Skeleton className='rounded-full' /> : <p className='text-wrap opacity-65'>Casa 318, Bairro Dangerreux, Talatona - Angola</p>}
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex-grow flex flex-col p-6 overflow-y-scroll'>
                        <Table>
                            <TableCaption>
                                <div className='w-full mt-5 h-max flex items-center justify-end'>
                                    <div className='flex flex-col items-end justify-center'>
                                        <p className='opacity-60'>Total:</p>
                                        <h1 className='text-gradient font-semibold text-[2rem]'>Kz {formatMoneyWithoutKz(selectedFatura.total)}</h1>
                                    </div>
                                </div>
                            </TableCaption>
                            <TableCaption>

                            </TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">Ref.</TableHead>
                                    <TableHead abbr='Est'>Estado</TableHead>
                                    <TableHead>Descrição</TableHead>
                                    <TableHead className="text-right">Preço</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {selectedFatura.faturaProdutos && selectedFatura.faturaProdutos.slice().reverse().map((produto, _index) => (
                                    produto.dominioId ? (
                                        <TableRow key={_index}>
                                            <TableCell className="font-medium">{produto.id}</TableCell>
                                            <TableCell>{selectedFatura.status}</TableCell>
                                            <TableCell>{produto.dominio?.dominio}</TableCell>
                                            <TableCell className="text-right">kz {formatMoney(produto.preco)}</TableCell>
                                        </TableRow>
                                    )
                                    :
                                    produto.emailId ? (
                                        (
                                            <TableRow key={_index}>
                                                <TableCell className="font-medium">{produto.id}</TableCell>
                                                <TableCell>{selectedFatura.status}</TableCell>
                                                <TableCell>Serviço de e-Mail: {produto.quantidade} {produto.quantidade > 1 ? 'contas' : 'conta'}</TableCell>
                                                <TableCell className="text-right">{formatMoney(produto.preco)}</TableCell>
                                            </TableRow>
                                        )
                                    )
                                        :
                                        (
                                            <TableRow key={_index}>
                                                <TableCell className="font-medium">{produto.id}</TableCell>
                                                <TableCell>{selectedFatura.status}</TableCell>
                                                <TableCell>{produto.plano.titulo}</TableCell>
                                                <TableCell className="text-right">kz {formatMoney(produto.preco)}</TableCell>
                                            </TableRow>
                                        )

                                ))}
                            </TableBody>
                        </Table>
                        <div className='w-full flex items-end justify-center flex-grow-[1]'>
                            <div className='w-full h-max flex flex-col items-start justify-center'>
                                <p className='opacity-60 text-[0.8rem]'>Termos e condições:</p>
                                <p className='text-wrap text-left opacity-60 text-[0.8rem]'>As taxas e os termos de pagamento serão estabelecidos no contrato ou acordo antes do início do projeto. Um depósito inicial será exigido antes do início de qualquer trabalho de design. Reservamo-nos o direito de suspender ou interromper o trabalho em caso de não pagamento.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-[1] h-full gap-2 flex flex-col items-center justify-start bg-white rounded-[20px] border-solid border-[1px] p-4 overflow-y-scroll">
                    {client?.faturas && client.faturas.map((fatura, _index) => (
                        <div onClick={() => setSelectedFatura(fatura)} key={_index} className='cardFatura w-full cursor-pointer h-[80px] gap-2 flex items-center justify-between border-[1px] border-solid rounded-[12px] p-3' data-active={selectedFatura.id === fatura.id}>
                            <div className='p-3 bg-zinc-50 rounded-[8px]'>
                                <BadgeDollarSign strokeWidth={1.5} className='text-zinc-600' />
                            </div>
                            <div className='w-full flex flex-col items-start justify-center'>
                                <p className='text-[0.8rem]'><strong className='text-[#092c42]'>Fatura: </strong>{formatDate(fatura.criadoEm)}</p>
                                <p><strong className='text-[#092c42]'>Total:</strong> Kz {formatMoney(fatura.total)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </div >
    )
}