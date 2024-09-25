import "@/pages/admin/styles/panel.css";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Check,
    ChevronLeft,
    Cloud,
    GlobeLock,
    KeyRound,
    Mail,
    Search,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import useDetails from "@/pages/admin/hooks/useDetails";
import { useEffect, useState } from "react";
import { CreateCredentialsModal } from "@/pages/admin/components/panel/createCredentials";
import Skeleton from "react-loading-skeleton";
import {
    ServicoDominio,
    ServicoEmail,
    ServicoHospedagem,
    ServicosClientes,
} from "@/pages/admin/interfaces/clientServices.interface";
import "@/pages/admin/styles/globals.css";
import useUtils from "@/utils/useutils";
import { Button } from "@/components/ui/button";
import ilustration from "@/assets/svgs/undraw-empty.svg"
import { TailSpin } from "react-loader-spinner";

const filterServicesById = (
    services: ServicosClientes,
    searchId: string | null
) => {
    const { servicosEmails, servicosDominios, servicosHospedagem } = services;

    const hasMatchingId = (service: { id: string }) => {
        return service.id.includes(searchId as string);
    };

    if (!searchId) {
        return [...servicosEmails, ...servicosDominios, ...servicosHospedagem];
    }

    const filteredEmails = servicosEmails.filter(hasMatchingId);
    const filteredDominios = servicosDominios.filter(hasMatchingId);
    const filteredHospedagem = servicosHospedagem.filter(hasMatchingId);

    return [...filteredEmails, ...filteredDominios, ...filteredHospedagem];
};

export default function DetailsView() {
    const {
        currentClient,
        getClient,
        isLoading,
        services,
        setCurrentService,
        currentService,
        isLoadingServices,
        getServices,
        ativateService,
        isLoadingAtivateService
    } = useDetails();
    const [opened, setOpened] = useState(false);
    const { id } = useParams();
    const [searchTerm, setSearchTerm] = useState("");
    const router = useNavigate();

    const { formatDate } = useUtils();

    const filteredServices = filterServicesById(services, searchTerm);

    useEffect(() => {
        getClient(id as string);
        getServices(id as string);
    }, []);

    const red = "#AA2523";
    const green = "#12753A";
    const yellow = "#F2CB67";
    const gray = "#777";

    const redFore = "#9C25231";
    const greenFore = "#12753A11";
    const yellowFore = "#F2CB6711";
    const grayFore = "#ebebeb";

    return (
        <div className="w-full h-full py-6 px-3">
            <div
                className="w-full gap-[20px] flex items-center justify-between"
                style={{ height: "100%" }}
            >
                <div className="flex-[1] h-full rounded-[20px] border-solid border-[1px] flex items-start flex-col justify-start">
                    <div className="bg-[#F6F8FC] w-full h-[300px] rounded-[20px] p-5 px-9">
                        <div className="w-full h-max flex items-center justify-between">
                            <div className="flex items-center justify-start gap-3">
                                <button
                                    onClick={() => router(-1)}
                                    className="w-[40px] h-[40px] rounded-[10px] flex items-center justify-center bg-[#ffffff] hover:bg-[#f6f8fc] transition-colors duration-300 border"
                                >
                                    <ChevronLeft />
                                </button>
                                <h1 className="font-semibold text-[#3a3a3a] text-[2rem]">
                                    Cliente
                                </h1>
                            </div>
                        </div>
                        <div className="w-full h-max flex items-start justify-between mt-[40px]">
                            <div className="flex-[1px] h-full flex flex-col items-start justify-between">
                                <div className="w-full flex items-start justify-between">
                                    <div className="flex flex-col">
                                        <h1
                                            style={{ lineHeight: "20px" }}
                                            className="font-semibold mb-3 text-[#19213D] text-[1rem]"
                                        >
                                            Detalhes do cliente
                                        </h1>
                                        <ul className="flex flex-col list-none gap-1 opacity-70">
                                            <li>
                                                ID do cliente:{" "}
                                                <strong>
                                                    {isLoading ? (
                                                        <Skeleton className="w-[200px] h-5" />
                                                    ) : (
                                                        currentClient?.id
                                                    )}
                                                </strong>
                                            </li>
                                            <li>
                                                Nome:{" "}
                                                <strong>
                                                    {isLoading ? (
                                                        <Skeleton className="w-[100px] h-5" />
                                                    ) : (
                                                        currentClient?.nome
                                                    )}
                                                </strong>
                                            </li>
                                            <li>
                                                E-Mail:{" "}
                                                <strong>
                                                    {isLoading ? (
                                                        <Skeleton className="w-[150px] h-4" />
                                                    ) : (
                                                        currentClient?.email
                                                    )}
                                                </strong>
                                            </li>
                                            <li>
                                                NIF:{" "}
                                                <strong>
                                                    {isLoading ? (
                                                        <Skeleton className="w-[150px] h-4" />
                                                    ) : (
                                                        currentClient?.nif
                                                    )}
                                                </strong>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[500px] flex flex-col p-6 overflow-y-scroll">
                        <Table>
                            <TableHeader>
                                <TableRow className="border-b border-gray-200">
                                    <TableHead className="w-[100px] p-2">
                                        Estado
                                    </TableHead>
                                    <TableHead className="p-2">
                                        Descrição
                                    </TableHead>
                                    {currentService &&
                                        "Dominio" in currentService && currentService.Dominio.chaveEpp &&
                                        <TableHead className="p-2">
                                            ChaveEpp
                                        </TableHead>
                                    }
                                    <TableHead className="p-2">
                                        Início
                                    </TableHead>
                                    <TableHead className="p-2">
                                        Término
                                    </TableHead>
                                    <TableHead className="p-2">Ações</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {currentService &&
                                    "Dominio" in currentService && (
                                        <TableRow className="border-b border-gray-200">
                                            <TableCell className="font-medium p-2">
                                                {currentService.status}
                                            </TableCell>
                                            <TableCell className="p-2">
                                                Domínio{" "}
                                                {currentService.Dominio.dominio}
                                            </TableCell>
                                            {currentService.Dominio.chaveEpp &&
                                                <TableCell className="p-2">
                                                   
                                                    {currentService.Dominio.chaveEpp}
                                                </TableCell>
                                            }
                                            <TableCell className="p-2">
                                                {formatDate(
                                                    currentService.criadoEm
                                                )}
                                            </TableCell>
                                            <TableCell className="p-2">
                                                {currentService.expiraEm
                                                    ? formatDate(
                                                        currentService.expiraEm
                                                    )
                                                    : "Pendente"}
                                            </TableCell>
                                            <TableCell className="p-2">
                                                {currentService.status ===
                                                    "ATIVO" && (
                                                        <button
                                                            onClick={() =>
                                                                setOpened(true)
                                                            }
                                                            className="bg-[var(--primary)] hover:bg-[var(--primary)] text-white px-2.5 py-1.5 rounded-md text-[0.8rem] font-light flex items-center justify-center gap-1.5 border"
                                                        >
                                                            Criar credenciais{" "}
                                                            <KeyRound
                                                                width={15}
                                                                strokeWidth={1.5}
                                                            />
                                                        </button>
                                                    )}
                                                {currentService.status ===
                                                    "PENDENTE" && (
                                                        <Button onClick={() => ativateService(currentService.id, id as string)} className="bg-[var(--primary)] hover:bg-[var(--primary)] text-white px-2.5 py-1.5 rounded-md text-[0.8rem] font-light flex items-center justify-center gap-1.5 border">
                                                            {
                                                                isLoadingAtivateService ?
                                                                    <TailSpin color="#fff" width={15} />
                                                                    :
                                                                    <>
                                                                        Ativar
                                                                        <Check
                                                                            width={15}
                                                                            strokeWidth={1.5}
                                                                        />
                                                                    </>
                                                            }
                                                        </Button>
                                                    )}
                                            </TableCell>
                                        </TableRow>
                                    )}

                                {currentService &&
                                    "Plano" in currentService && (
                                        <TableRow className="border-b border-gray-200">
                                            <TableCell className="font-medium p-2">
                                                {currentService.status}
                                            </TableCell>
                                            <TableCell className="p-2">
                                                {currentService.Plano.titulo}{" "}
                                                Domínio:{" "}
                                                <span className="opacity-70">
                                                    {currentService.dominio}
                                                </span>
                                            </TableCell>
                                            <TableCell className="p-2">
                                                {formatDate(
                                                    currentService.criadoEm
                                                )}
                                            </TableCell>
                                            <TableCell className="p-2">
                                                {currentService.expiraEm
                                                    ? formatDate(
                                                        currentService.expiraEm
                                                    )
                                                    : "Pendente"}
                                            </TableCell>
                                            <TableCell className="p-2">
                                                {currentService.status ===
                                                    "ATIVO" && (
                                                        <button
                                                            onClick={() =>
                                                                setOpened(true)
                                                            }
                                                            className="bg-[var(--primary)] hover:bg-[var(--primary)] text-white px-2.5 py-1.5 rounded-md text-[0.8rem] font-light flex items-center justify-center gap-1.5 border"
                                                        >
                                                            Criar credenciais{" "}
                                                            <KeyRound
                                                                width={15}
                                                                strokeWidth={1.5}
                                                            />
                                                        </button>
                                                    )}
                                                {currentService.status ===
                                                    "PENDENTE" && (
                                                        <Button onClick={() => ativateService(currentService.id, id as string)} className="bg-[var(--primary)] hover:bg-[var(--primary)] hover:bg-[var(--primary)] text-white px-3 py-1.5 rounded-md text-[0.8rem] font-light flex items-center justify-center gap-1.5 border">
                                                            {
                                                                isLoadingAtivateService ?
                                                                    <TailSpin color="#fff" width={15} />
                                                                    :
                                                                    <>
                                                                        Ativar
                                                                        <Check
                                                                            width={15}
                                                                            strokeWidth={1.5}
                                                                        />
                                                                    </>
                                                            }
                                                        </Button>
                                                    )}
                                            </TableCell>
                                        </TableRow>
                                    )}

                                {currentService &&
                                    "Email" in currentService && (
                                        <TableRow className="border-b border-gray-200">
                                            <TableCell className="font-medium p-2">
                                                {currentService.status}
                                            </TableCell>
                                            <TableCell className="p-2">
                                                E-Mail Domínio:{" "}
                                                <span className="opacity-70">
                                                    {
                                                        currentService.Email
                                                            .dominio
                                                    }
                                                </span>{" "}
                                                Contas:{" "}
                                                <span className="opacity-70">
                                                    {
                                                        currentService.Email
                                                            .quantidade
                                                    }
                                                </span>
                                            </TableCell>
                                            <TableCell className="p-2">
                                                {formatDate(
                                                    currentService.criadoEm
                                                )}
                                            </TableCell>
                                            <TableCell className="p-2">
                                                {currentService.expiraEm
                                                    ? formatDate(
                                                        currentService.expiraEm
                                                    )
                                                    : "Pendente"}
                                            </TableCell>
                                            <TableCell className="p-2">
                                                {currentService.status ===
                                                    "ATIVO" && (
                                                        <button
                                                            onClick={() =>
                                                                setOpened(true)
                                                            }
                                                            className="bg-[var(--primary)] text-white px-2.5 py-1.5 rounded-md text-[0.8rem] font-light flex items-center justify-center gap-1.5 border"
                                                        >
                                                            Criar credenciais{" "}
                                                            <KeyRound
                                                                width={15}
                                                                strokeWidth={1.5}
                                                            />
                                                        </button>
                                                    )}
                                                {currentService.status ===
                                                    "PENDENTE" && (
                                                        <Button onClick={() => ativateService(currentService.id, id as string)} className="bg-[var(--primary)] text-white px-2.5 py-1.5 rounded-md text-[0.8rem] font-light flex items-center justify-center gap-1.5 border">
                                                            {
                                                                isLoadingAtivateService ?
                                                                    <TailSpin color="#fff" width={15} />
                                                                    :
                                                                    <>
                                                                        Ativar
                                                                        <Check
                                                                            width={15}
                                                                            strokeWidth={1.5}
                                                                        />
                                                                    </>
                                                            }
                                                        </Button>
                                                    )}
                                            </TableCell>
                                        </TableRow>
                                    )}
                            </TableBody>
                        </Table>

                        <div className="w-full flex items-end justify-center flex-grow-[1]">
                            <div className="w-full h-max flex flex-col items-start justify-center">
                                <p className="opacity-60 text-[0.8rem]">
                                    Termos e condições:
                                </p>
                                <p className="text-wrap text-left opacity-60 text-[0.8rem]">
                                    As taxas e os termos de pagamento serão
                                    estabelecidos no contrato ou acordo antes do
                                    início do projeto. Um depósito inicial será
                                    exigido antes do início de qualquer trabalho
                                    de design. Reservamo-nos o direito de
                                    suspender ou interromper o trabalho em caso
                                    de não pagamento.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {isLoadingServices ? (
                    <div className="w-[400px] h-full gap-2 flex flex-col items-center justify-start bg-white rounded-[20px] border-solid border-[1px] p-4 overflow-y-scroll">
                        <Skeleton className="w-[350px] h-[40px] rounded-[12px]" />
                        <Skeleton className="w-[350px] h-[80px] rounded-[12px]" />
                        <Skeleton className="w-[350px] h-[80px] rounded-[12px]" />
                        <Skeleton className="w-[350px] h-[80px] rounded-[12px]" />
                        <Skeleton className="w-[350px] h-[80px] rounded-[12px]" />
                        <Skeleton className="w-[350px] h-[80px] rounded-[12px]" />
                        <Skeleton className="w-[350px] h-[80px] rounded-[12px]" />
                        <Skeleton className="w-[350px] h-[80px] rounded-[12px]" />
                    </div>
                ) : (
                    <div className="w-[400px] h-full gap-2 flex flex-col items-center justify-start bg-white rounded-[20px] border-solid border-[1px] p-4">
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
                                placeholder="Que serviço está procurando (beta)?"
                            />
                        </div>

                        <div className="w-full h-full flex flex-col items-center justify-start gap-y-2 overflow-y-scroll">
                            {filteredServices.map((service, index) => (
                                <>
                                    {"Dominio" in service && (
                                        // Serviço de domínio
                                        <div
                                            data-active={
                                                currentService?.id ===
                                                service.id
                                            }
                                            onClick={() =>
                                                setCurrentService(service)
                                            }
                                            key={index}
                                            className="cardFatura w-full cursor-pointer h-[80px] gap-2 flex items-center justify-between border-[1px] border-solid rounded-[12px] p-3"
                                        >
                                            <div
                                                style={{
                                                    backgroundColor:
                                                        service.status ===
                                                            "ATIVO"
                                                            ? greenFore
                                                            : service.status ===
                                                                "PENDENTE"
                                                                ? yellowFore
                                                                : service.status ===
                                                                    "CANCELADO"
                                                                    ? grayFore
                                                                    : redFore,
                                                }}
                                                className="p-3 rounded-[8px]"
                                            >
                                                <GlobeLock
                                                    strokeWidth={1.5}
                                                    color={`${service.status ===
                                                        "ATIVO"
                                                        ? green
                                                        : service.status ===
                                                            "PENDENTE"
                                                            ? yellow
                                                            : service.status ===
                                                                "CANCELADO"
                                                                ? gray
                                                                : red
                                                        }`}
                                                />
                                            </div>
                                            <div className="w-full flex flex-col items-start justify-center">
                                                <p className="text-[0.8rem]">
                                                    <strong className="text-[#092c42]">
                                                        Serviço de domínio
                                                    </strong>
                                                </p>
                                                <p>
                                                    <strong className="text-[#092c42]">
                                                        Domínio:
                                                    </strong>
                                                    {"  "}
                                                    {service.Dominio.dominio}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                    {"Email" in service && (
                                        <div
                                            data-active={
                                                currentService?.id ===
                                                service.id
                                            }
                                            key={index}
                                            onClick={() =>
                                                setCurrentService(service)
                                            }
                                            className="cardFatura w-full cursor-pointer h-[80px] gap-2 flex items-center justify-between border-[1px] border-solid rounded-[12px] p-3"
                                        >
                                            <div
                                                style={{
                                                    backgroundColor:
                                                        service.status ===
                                                            "ATIVO"
                                                            ? greenFore
                                                            : service.status ===
                                                                "PENDENTE"
                                                                ? yellowFore
                                                                : service.status ===
                                                                    "CANCELADO"
                                                                    ? grayFore
                                                                    : redFore,
                                                }}
                                                className="p-3 rounded-[8px]"
                                            >
                                                <Mail
                                                    strokeWidth={1.5}
                                                    className="text-zinc-600"
                                                    color={`${service.status ===
                                                        "ATIVO"
                                                        ? green
                                                        : service.status ===
                                                            "PENDENTE"
                                                            ? yellow
                                                            : service.status ===
                                                                "CANCELADO"
                                                                ? gray
                                                                : red
                                                        }`}
                                                />
                                            </div>
                                            <div className="w-full flex flex-col items-start justify-center">
                                                <p className="text-[0.8rem]">
                                                    <strong className="text-[#092c42]">
                                                        Serviço de email
                                                    </strong>
                                                </p>
                                                <p>
                                                    <strong className="text-[#092c42]">
                                                        Domínio:
                                                    </strong>{" "}
                                                    {service.dominio} -{" "}
                                                    <strong className="text-[#092c42]">
                                                        Contas:{" "}
                                                    </strong>{" "}
                                                    {service.Email.quantidade}{" "}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                    {"Plano" in service && (
                                        // Serviço de hospedagem
                                        <div
                                            data-active={
                                                currentService?.id ===
                                                service.id
                                            }
                                            onClick={() =>
                                                setCurrentService(service)
                                            }
                                            key={index}
                                            className="cardFatura w-full cursor-pointer h-[80px] gap-2 flex items-center justify-between border-[1px] border-solid rounded-[12px] p-3"
                                        >
                                            <div
                                                style={{
                                                    backgroundColor:
                                                        service.status ===
                                                            "ATIVO"
                                                            ? greenFore
                                                            : service.status ===
                                                                "PENDENTE"
                                                                ? yellowFore
                                                                : service.status ===
                                                                    "CANCELADO"
                                                                    ? grayFore
                                                                    : redFore,
                                                }}
                                                className="p-3 bg-zinc-50 rounded-[8px]"
                                            >
                                                <Cloud
                                                    strokeWidth={1.5}
                                                    className="text-zinc-600"
                                                    color={`${service.status ===
                                                        "ATIVO"
                                                        ? green
                                                        : service.status ===
                                                            "PENDENTE"
                                                            ? yellow
                                                            : service.status ===
                                                                "CANCELADO"
                                                                ? gray
                                                                : red
                                                        }`}
                                                />
                                            </div>
                                            <div className="w-full flex flex-col items-start justify-center">
                                                <p className="text-[0.8rem]">
                                                    <strong className="text-[#092c42]">
                                                        Plano:{" "}
                                                        {service.Plano.titulo}
                                                    </strong>
                                                </p>
                                                <p>
                                                    <strong className="text-[#092c42]">
                                                        Domínio :
                                                    </strong>{" "}
                                                    {service.dominio}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </>
                            ))}
                            {filteredServices.length === 0 && (
                                <div className="w-full h-full flex items-center justify-center flex-col">
                                    <img src={ilustration} className="w-[100px] mb-3" alt="Ilustração de um computador com um sinal de internet" />
                                    <p>Sem serviços</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
            <CreateCredentialsModal
                name={currentClient?.nome as string}
                opened={opened}
                setOpened={setOpened}
                email={currentClient?.email as string}
                clientId={currentClient?.id as string}
                service={
                    currentService as
                    | ServicoDominio
                    | ServicoEmail
                    | ServicoHospedagem
                }
            />
        </div>
    );
}

