import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { CreateUserModal } from "@/pages/admin/components/panel/createUserDialog";
import useAdminStore from "@/pages/admin/contexts/adminStore";
import { ListFilter, Plus, Search, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '@/pages/admin/styles/globals.css'
import Skeleton from "react-loading-skeleton";

export default function ListView() {

    const [opened, setOpened] = useState(false)
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState<"Todos" | "Empresa" | "Particular">("Todos")
    const { clients, actions: {
        getClientsList
    } } = useAdminStore()

    async function getClients() {
        await getClientsList()
    }

    const filteredClients = clients.filter(client =>
        (client.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.nif.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (filter === "Todos" || client.role === filter)
    );


    useEffect(() => {
        getClients()
    }, [])

    if (clients.length === 0) {
        return (
            <div className="w-full h-full flex flex-col bg-white px-3 mt-6 overflow-hidden">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 style={{ lineHeight: '40px' }} className='font-semibold text-[#3a3a3a] text-[2rem]'><Skeleton width={200} className="rounded-md" /></h1>
                        <p className="text-[0.9rem] mt-2 opacity-70"><Skeleton width={350} className="rounded-md" /></p>
                    </div>
                    <div className="w-[150px]">
                        <Skeleton width={150} height={42} className="rounded-md" />
                    </div>
                </div>
                <div className="w-full h-[1px] bg-zinc-100 mt-4 mb-4" />
                <div className="w-full flex items-center justify-between mb-6">
                    <Skeleton width={400} height={40} className="rounded-md" />
                    <div>
                        <Skeleton width={100} height={42} className="rounded-md" />
                    </div>
                </div>
                <div className="w-full flex-grow-[1] overflow-y-scroll">
                    <Table className="w-full my-2">
                        <TableHeader>
                            <TableRow>
                                <TableHead><Skeleton width={30} height={30} className="rounded-md" /></TableHead>
                                <TableHead><Skeleton width={300} height={30} className="rounded-md" /></TableHead>
                                <TableHead><Skeleton width={150} height={30} className="rounded-md" /></TableHead>
                                <TableHead><Skeleton width={200} height={30} className="rounded-md" /></TableHead>
                                <TableHead><Skeleton width={60} height={30} className="rounded-md" /></TableHead>
                                <TableHead><Skeleton width={120} height={30} className="rounded-md" /></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="w-full">
                            <TableRow className="w-full">
                                <TableCell className="w-full"><Skeleton className="rounded-md w-full h-[50px]" /></TableCell>
                                <TableCell className="w-full"><Skeleton className="rounded-md w-full h-[50px]" /></TableCell>
                                <TableCell className="w-full"><Skeleton className="rounded-md w-full h-[50px]" /></TableCell>
                                <TableCell className="w-full"><Skeleton className="rounded-md w-full h-[50px]" /></TableCell>
                                <TableCell className="w-full"><Skeleton className="rounded-md w-full h-[50px]" /></TableCell>
                                <TableCell className="w-full"><Skeleton className="rounded-md w-full h-[50px]" /></TableCell>
                            </TableRow>
                            <TableRow className="w-full">
                                <TableCell className="w-full"><Skeleton className="rounded-md w-full h-[50px]" /></TableCell>
                                <TableCell className="w-full"><Skeleton className="rounded-md w-full h-[50px]" /></TableCell>
                                <TableCell className="w-full"><Skeleton className="rounded-md w-full h-[50px]" /></TableCell>
                                <TableCell className="w-full"><Skeleton className="rounded-md w-full h-[50px]" /></TableCell>
                                <TableCell className="w-full"><Skeleton className="rounded-md w-full h-[50px]" /></TableCell>
                                <TableCell className="w-full"><Skeleton className="rounded-md w-full h-[50px]" /></TableCell>
                            </TableRow>
                            <TableRow className="w-full">
                                <TableCell className="w-full"><Skeleton className="rounded-md w-full h-[50px]" /></TableCell>
                                <TableCell className="w-full"><Skeleton className="rounded-md w-full h-[50px]" /></TableCell>
                                <TableCell className="w-full"><Skeleton className="rounded-md w-full h-[50px]" /></TableCell>
                                <TableCell className="w-full"><Skeleton className="rounded-md w-full h-[50px]" /></TableCell>
                                <TableCell className="w-full"><Skeleton className="rounded-md w-full h-[50px]" /></TableCell>
                                <TableCell className="w-full"><Skeleton className="rounded-md w-full h-[50px]" /></TableCell>
                            </TableRow>
                            <TableRow className="w-full">
                                <TableCell className="w-full"><Skeleton className="rounded-md w-full h-[50px]" /></TableCell>
                                <TableCell className="w-full"><Skeleton className="rounded-md w-full h-[50px]" /></TableCell>
                                <TableCell className="w-full"><Skeleton className="rounded-md w-full h-[50px]" /></TableCell>
                                <TableCell className="w-full"><Skeleton className="rounded-md w-full h-[50px]" /></TableCell>
                                <TableCell className="w-full"><Skeleton className="rounded-md w-full h-[50px]" /></TableCell>
                                <TableCell className="w-full"><Skeleton className="rounded-md w-full h-[50px]" /></TableCell>
                            </TableRow>
                            <TableRow className="w-full">
                                <TableCell className="w-full"><Skeleton className="rounded-md w-full h-[50px]" /></TableCell>
                                <TableCell className="w-full"><Skeleton className="rounded-md w-full h-[50px]" /></TableCell>
                                <TableCell className="w-full"><Skeleton className="rounded-md w-full h-[50px]" /></TableCell>
                                <TableCell className="w-full"><Skeleton className="rounded-md w-full h-[50px]" /></TableCell>
                                <TableCell className="w-full"><Skeleton className="rounded-md w-full h-[50px]" /></TableCell>
                                <TableCell className="w-full"><Skeleton className="rounded-md w-full h-[50px]" /></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <CreateUserModal opened={opened} setOpened={setOpened} />
                </div>
            </div>
        )
    }

    return (
        <div className="w-full h-full flex flex-col bg-white px-3 mt-6 overflow-hidden">
            <div className="flex items-center justify-between">
                <div>
                    <h1 style={{ lineHeight: '40px' }} className='font-semibold text-[#3a3a3a] text-[2rem]'>Clientes</h1>
                    <p className="text-[0.9rem] mt-2 opacity-70">Veja todas as informações dos seus clientes</p>
                </div>
                <div className="w-[150px]">
                    <button onClick={() => setOpened(true)} className="bg-[var(--primary)] gap-1 mt-2 rounded-lg w-full h-[42px] flex items-center justify-center text-[0.85rem] text-[rgb(var(--background))]"><Plus width={20} /> Adicionar</button>
                </div>
            </div>
            <div className="w-full h-[1px] bg-zinc-100 mt-4 mb-4" />
            <div className="w-full flex items-center justify-between mb-6">
                <div className="w-max rounded-lg px-4 h-max flex items-center justify-center border-solid border-[1px]">
                    <button><Search size={18} strokeWidth={1.5} className="opacity-60" /></button>
                    <input
                        className="ml-3 w-[300px] h-[40px] bg-transparent"
                        type="text"
                        placeholder="À quem está procurando?"
                        value={searchTerm} // Liga o estado ao valor do input
                        onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o estado com o termo digitado
                    />
                </div>
                <div>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <button className="border-solid border-[1px] text-[0.8rem] py-2 px-4 rounded-[8px] flex items-center justify-center gap-1.5"><ListFilter size={16} strokeWidth={1.5} />{filter}</button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Filtros</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="filterItem" data-current={filter === "Todos"} onClick={() => setFilter("Todos")}>Todos</DropdownMenuItem>
                            <DropdownMenuItem className="filterItem" data-current={filter === "Empresa"} onClick={() => setFilter("Empresa")}>Empresas</DropdownMenuItem>
                            <DropdownMenuItem className="filterItem" data-current={filter === "Particular"} onClick={() => setFilter("Particular")}>Particulares</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                </div>
            </div>
            <div className="w-full flex-grow-[1] overflow-y-scroll">
                <Table className="w-full">
                    <TableCaption className="mb-4">
                        {filteredClients.length} clientes encontrados
                    </TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>N</TableHead>
                            <TableHead>Nome</TableHead>
                            <TableHead>NIF</TableHead>
                            <TableHead>E-Mail</TableHead>
                            <TableHead>Tipo</TableHead>
                            <TableHead>Ações</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="w-full">

                        {filteredClients && filteredClients.map((client, _index) => (
                            <TableRow key={client.id}>
                                <TableCell className="font-medium">{_index + 1}</TableCell>
                                <TableCell>{client.nome}</TableCell>
                                <TableCell>{client.nif}</TableCell>
                                <TableCell>{client.email}</TableCell>
                                <TableCell>{client.role}</TableCell>
                                <TableCell className=""><Link to={`/security/admin/clients/details/${client.id}`} className="border py-2 px-4 rounded-[8px] flex items-center justify-center gap-1.5"><User size={16} strokeWidth={1.5} />Detalhes</Link></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <CreateUserModal opened={opened} setOpened={setOpened} />
            </div>
        </div>
    )
}