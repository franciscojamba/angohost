import logo from '@/assets/images/Icone-01.png'
import useUtils from '@/utils/useutils'
import '@/pages/admin/styles/panel.css'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Ban, Check, FileText, Search } from 'lucide-react'
import UseRequests from '@/pages/admin/hooks/useRequests'
import { TailSpin } from 'react-loader-spinner'
import Skeleton from 'react-loading-skeleton'
import { useState } from 'react'

export default function RequestsView() {

    const { formatDate, formatMoney, formatMoneyWithoutKz } = useUtils()
    const { clientsFaturasList, selectedService, setSelectedService, isLoading, activateFact, isFactActive } = UseRequests()
    const [searchTerm, setSearchTerm] = useState('')

    const filteredClients = clientsFaturasList.filter(client =>
        client.cliente.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (clientsFaturasList.length === 0) {
        return (
            <div className="w-full h-full py-6 px-3">
                <div className="w-full gap-[20px] flex items-center justify-between" style={{ height: '100%' }}>
                    <div className="flex-[1] h-full bg-white rounded-[20px] border-solid border-[1px] flex items-start flex-col justify-start">
                        <div className='bg-[#F6F8FC] w-full h-[300px] rounded-[20px] p-5 px-9'>
                            <div className='w-full h-max flex items-center justify-between'>
                                <Skeleton className='w-[200px] h-[35px] rounded-[12px]' />
                                <Skeleton className='w-[50px] h-[50px] rounded-[12px]' />
                            </div>
                            <div className='w-full h-max flex items-start justify-between mt-[40px]'>
                                <div className='flex-[1px] h-full flex flex-col items-start justify-between'>
                                    <div className='w-full flex items-start justify-between'>
                                        <div className='flex flex-col'>
                                        <Skeleton className='w-[100px] h-[20px] rounded-[12px]' />
                                            <ul className='flex flex-col list-none gap-1 opacity-70'>
                                                <Skeleton className='w-[250px] h-[25px] rounded-[12px]' />
                                                <Skeleton className='w-[200px] h-[25px] rounded-[12px]' />
                                                <Skeleton className='w-[200px] h-[25px] rounded-[12px]' />
                                            </ul>
                                        </div>
                                        <div className='flex-[1] flex items-center justify-center'>
                                            <div>
                                            <Skeleton className='w-[100px] h-[20px] rounded-[12px]' />
                                                <ul className='flex flex-col list-none gap-1 opacity-70'>
                                                    <Skeleton className='w-[300px] h-[25px] rounded-[12px]' />
                                                    <Skeleton className='w-[250px] h-[25px] rounded-[12px]' />
                                                    <Skeleton className='w-[280px] h-[25px] rounded-[12px]' />

                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-[500px] flex flex-col p-6 overflow-y-scroll'>
                            <Table>
                                <TableCaption>
                                    <div className='w-full mt-5 h-max flex items-center justify-end'>
                                        <div className='flex flex-col items-end justify-center'>
                                            <Skeleton className='w-[150px] h-[20px] rounded-[12px]' />
                                            <Skeleton className='w-[300px] h-[50px] rounded-[12px]' />
                                        </div>
                                    </div>
                                </TableCaption>
                                <TableCaption>

                                </TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px]"><Skeleton className='w-[50px] h-[20px] rounded-[12px]' /></TableHead>
                                        <TableHead abbr='Est'><Skeleton className='w-[100px] h-[20px] rounded-[12px]' /></TableHead>
                                        <TableHead><Skeleton className='w-[150px] h-[20px] rounded-[12px]' /></TableHead>
                                        <TableHead className="text-right"><Skeleton className='w-[150px] h-[20px] rounded-[12px]' /></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>

                                    <TableRow>
                                        <TableCell className="font-medium"><Skeleton className='w-[50px] h-[20px] rounded-[12px]' /></TableCell>
                                        <TableCell><Skeleton className='w-[150px] h-[20px] rounded-[12px]' /></TableCell>
                                        <TableCell><Skeleton className='w-[150px] h-[20px] rounded-[12px]' /></TableCell>
                                        <TableCell className="text-right"><Skeleton className='w-[150px] h-[20px] rounded-[12px]' /></TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium"><Skeleton className='w-[100px] h-[20px] rounded-[12px]' /></TableCell>
                                        <TableCell><Skeleton className='w-[150px] h-[20px] rounded-[12px]' /></TableCell>
                                        <TableCell><Skeleton className='w-[150px] h-[20px] rounded-[12px]' /></TableCell>
                                        <TableCell className="text-right"><Skeleton className='w-[150px] h-[20px] rounded-[12px]' /></TableCell>
                                    </TableRow>
         

                                </TableBody>
                            </Table>
                            <div className='w-full flex items-end justify-end flex-grow-[1]'>
                                <div className='w-full h-max flex flex-col items-start justify-center'>
                                    <p className='opacity-60 text-[0.8rem]'><Skeleton className='w-[100px] h-[20px] rounded-[12px]' /></p>
                                   
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[350px] h-full gap-2 flex flex-col items-center justify-start bg-white rounded-[20px] border-solid border-[1px] p-4 overflow-y-scroll">
                        <Skeleton className='w-[320px] h-[80px] rounded-[12px]' />
                        <Skeleton className='w-[320px] h-[80px] rounded-[12px]' />
                        <Skeleton className='w-[320px] h-[80px] rounded-[12px]' />
                        <Skeleton className='w-[320px] h-[80px] rounded-[12px]' />
                        <Skeleton className='w-[320px] h-[80px] rounded-[12px]' />
                        <Skeleton className='w-[320px] h-[80px] rounded-[12px]' />
                        <Skeleton className='w-[320px] h-[80px] rounded-[12px]' />
                        <Skeleton className='w-[320px] h-[80px] rounded-[12px]' />
                    </div>
                </div >
            </div >
        )
    }

    return (
        <div className="w-full h-full py-6 px-3">
            <div className="w-full gap-[20px] flex items-center justify-between" style={{ height: '100%' }}>
                <div className="flex-[1] h-full bg-white rounded-[20px] border-solid border-[1px] flex items-start flex-col justify-start">
                    <div className='bg-[#F6F8FC] w-full h-[300px] rounded-[20px] p-5 px-9'>
                        <div className='w-full h-max flex items-center justify-between'>
                            <h1 className='font-semibold text-[#3a3a3a] text-[2rem]'>Pedido</h1>
                            <img className='w-[50px]' src={logo} alt="logo" />
                        </div>
                        <div className='w-full h-max flex items-start justify-between mt-[40px]'>
                            <div className='flex-[1px] h-full flex flex-col items-start justify-between'>
                                <div className='w-full flex items-start justify-between'>
                                    <div className='flex flex-col'>
                                        <h1 style={{ lineHeight: '20px' }} className='font-semibold mb-3 text-[#19213D] text-[1rem]'>Detalhes do pedido</h1>
                                        <ul className='flex flex-col list-none gap-1 opacity-70'>
                                            <li>ID da Pedido: <strong>{selectedService?.reference}</strong></li>
                                            <li>Data de solicitação: <strong>{formatDate(selectedService?.criadoEm as string)}</strong></li>
                                            <li>Estado: <strong>{selectedService?.status as string}</strong></li>
                                        </ul>
                                    </div>
                                    <div className='flex-[1] flex items-center justify-center'>
                                        <div>
                                            <h1 style={{ lineHeight: '20px' }} className='font-semibold text-[#19213D] text-[1rem] mb-3'>Solicitante</h1>
                                            <ul className='flex flex-col list-none gap-1 opacity-70'>
                                                <li><strong>Nome: </strong>{selectedService?.cliente.nome}</li>
                                                <li><strong>NIF: </strong>{selectedService?.cliente.nif}</li>
                                                <li><strong>E-mail: </strong>{selectedService?.cliente.email}</li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {selectedService?.status === "PENDENTE" && <div className='flex itemms-center justify-start gap-3 mt-3'>

                                    <button disabled={isLoading || isFactActive} onClick={activateFact} className='w-[100px] h-[35px] text-zinc-100 rounded-[8px] bg-[var(--primary)] flex items-center justify-center gap-2 text-[0.8rem]'>{isLoading ? <TailSpin width={20} color='#fff' /> : <><Check size={16} />Ativar</>}</button>
                                    <button disabled className='w-max px-3 h-[35px] text-zinc-700 rounded-[8px] bg-zinc-200 flex items-center justify-center gap-2 text-[0.8rem]'><Ban size={16} />Rejeitar (brevemente)</button>
                                </div>}
                                {selectedService?.status === "PAGA" && <div className='flex itemms-center justify-start gap-3 mt-3'>
                                    <button disabled className='w-[max] px-3 h-[35px] text-zinc-700 rounded-[8px] bg-zinc-200 flex items-center justify-center gap-2 text-[0.8rem]'><Ban size={16} />Desativar (brevemente)</button>
                                </div>}
                            </div>
                            {/* <div className='max-w-[240px] pb-4 flex-flex-col items-start justify-start gap-2 transition-all duration-300 h-[max] bg-white rounded-[18px] p-4'>
                                <p className='font-semibold text-[0.9rem]'>Cliente: </p>
                                <div className='w-max'>
                                    <ClientInfoFiled clientName={client?.nome} autheticatedUserType={getAuthenticatedUser()} />
                                </div>
                                {!client?.nome ? <Skeleton className='rounded-full' /> : <p className='text-wrap opacity-65'>Casa 318, Bairro Dangerreux, Talatona - Angola</p>}
                            </div> */}
                        </div>
                    </div>
                    <div className='w-full h-[500px] flex flex-col p-6 overflow-y-scroll'>
                        <Table>
                            <TableCaption>
                                <div className='w-full mt-5 h-max flex items-center justify-end'>
                                    <div className='flex flex-col items-end justify-center'>
                                        <p className='opacity-60'>Total:</p>
                                        <h1 className='text-gradient font-semibold text-[2rem]'>Kz {formatMoneyWithoutKz(selectedService?.total as number)}</h1>
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
                                {(selectedService && selectedService.faturaProdutos) && selectedService.faturaProdutos.slice().reverse().map((produto, _index) => (
                                    produto.dominioId ? (
                                        <TableRow key={_index}>
                                            <TableCell className="font-medium">{produto.id}</TableCell>
                                            <TableCell>{selectedService.status}</TableCell>
                                            <TableCell>Domínio: {produto.dominio.dominio}</TableCell>
                                            <TableCell className="text-right">{formatMoney(produto.preco)}</TableCell>
                                        </TableRow>
                                    )
                                        :
                                    produto.emailId ? (
                                        (
                                            <TableRow key={_index}>
                                                <TableCell className="font-medium">{produto.id}</TableCell>
                                                <TableCell>{selectedService.status}</TableCell>
                                                <TableCell>Serviço de e-Mail: {produto.quantidade} {produto.quantidade > 1 ? 'contas' : 'conta'}</TableCell>
                                                <TableCell className="text-right">{formatMoney(produto.preco)}</TableCell>
                                            </TableRow>
                                        )
                                    )
                                    :
                                    (
                                        (
                                            <TableRow key={_index}>
                                                <TableCell className="font-medium">{produto.id}</TableCell>
                                                <TableCell>{selectedService.status}</TableCell>
                                                <TableCell>Hospedagem: {produto.plano.titulo}</TableCell>
                                                <TableCell className="text-right">{formatMoney(produto.preco)}</TableCell>
                                            </TableRow>
                                        )
                                    )

                                ))}
                            </TableBody>
                        </Table>
                        <div className='w-full flex items-end justify-end flex-grow-[1]'>
                            <div className='w-full h-max flex flex-col items-start justify-center'>
                                <p className='opacity-60 text-[0.8rem]'>Termos e condições:</p>
                                <p className='text-wrap text-left opacity-60 text-[0.8rem]'>As taxas e os termos de pagamento serão estabelecidos no contrato ou acordo antes do início do projeto. Um depósito inicial será exigido antes do início de qualquer trabalho de design. Reservamo-nos o direito de suspender ou interromper o trabalho em caso de não pagamento.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[350px] h-full gap-2 flex flex-col items-center justify-start bg-white rounded-[20px] border-solid border-[1px] p-4 overflow-y-scroll">
                <div className="w-full rounded-lg px-4 h-max flex items-center justify-center border-solid border-[1px]">
                            <button>
                                <Search
                                    size={18}
                                    strokeWidth={1.5}
                                    className="opacity-60"
                                />
                            </button>
                            <input
                                className="ml-3 w-[300px] h-[40px] bg-transparent"
                                type="text"
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Quem está procurando (beta)?"
                            />
                        </div>
                    {clientsFaturasList.length > 0 && filteredClients.map((service, _index) => (
                        <>{
                            service.status === "PENDENTE" && (
                                <div onClick={() => setSelectedService(service)} key={_index} className='cardFatura w-full cursor-pointer h-[80px] gap-2 flex items-center justify-between border-[1px] border-solid rounded-[12px] p-3' data-active={selectedService?.id === service.id}>
                                    <div className='p-3 bg-zinc-50 rounded-[12px] border'>
                                        <FileText strokeWidth={1.5} className='text-zinc-600' />
                                    </div>
                                    <div className='w-full flex flex-col items-start justify-center truncate'>
                                        <p className='text-[0.8rem] w-full flex items-center justify-between rubik'><span><strong className='text-[#092c42]'>Fatura: </strong>{formatDate(service.criadoEm)}</span> <span><strong className='text-[#092c42]'>Serviços:</strong> {service.faturaProdutos.length}</span></p>
                                        <p className='truncate w-[300px]'><strong className='text-[#092c42]'>Solicitante:</strong> {service.cliente.nome.split(' ').length > 1
                                            ? service.cliente.nome.split(' ')[0] + ' ' + service.cliente.nome.split(' ').slice(-1)
                                            : service.cliente.nome}</p>
                                    </div>
                                </div>
                            )
                        }</>
                    ))}
                </div>
            </div >
        </div >
    )
}