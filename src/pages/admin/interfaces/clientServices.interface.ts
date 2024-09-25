interface ServicoEmail {
    id: string;
    clienteId: string;
    faturaId: string;
    emailId: string;
    dominio: string;
    status: "PENDENTE" | "ATIVO" | "CANCELADO";
    criadoEm: string;
    atualizadoEm: string;
    expiraEm: string | null;
    Email: {
        id: string;
        preco: number;
        quantidade: number;
        dominio: string;
        planoEmailId: number;
    }
}

interface ServicoDominio {
    id: string;
    clienteId: string;
    dominioId: string;
    faturaId: string;
    status: "PENDENTE" | "ATIVO" | "CANCELADO";
    criadoEm: string;
    atualizadoEm: string;
    expiraEm: string | null;
    Dominio: {
        id: string;
        dominio: string;
        chaveEpp: string | null;
        planoDominioId: number;
    }
}

interface ServicoHospedagem {
    id: string;
    idCiclo: number;
    dominio: string;
    clienteId: string;
    planoId: string;
    faturaId: string;
    status: "PENDENTE" | "ATIVO" | "CANCELADO";
    criadoEm: string;
    atualizadoEm: string;
    expiraEm: string | null;
    Plano: {
        id: string;
        titulo: string;
        recursos: string[];
        planoPopular: boolean;
        descricao: string;
        preco: number;
        descontos: number;
        precoComDesconto: number;
        categoriaId: number;
    }

}

interface ServicosClientes {
    servicosEmails: ServicoEmail[];
    servicosDominios: ServicoDominio[];
    servicosHospedagem: ServicoHospedagem[];
}


export type { ServicoEmail, ServicoDominio, ServicoHospedagem, ServicosClientes }