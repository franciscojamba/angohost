interface IFatura {
    id: string,
    planoId: number,
    clienteId: string,
    total: number,
    criadoEm: string,
    atualizadoEm: string,
    reference: string,
    status: string,
    faturaProdutos: IFaturaProduto[]
}

interface IPlano {
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

interface IServico {
    id: string;
    clienteId: string;
    faturaId: string;
    planoId: string;
    planoDominioId: string | null;
    emailId: string | null;
    status: string;
    criadoEm: string;
    atualizadoEm: string;
    Plano: IPlano;
}

interface IFaturaProduto {
    id: number;
    faturaId: string;
    planoId: string;
    dominioId: string | null;
    emailId: string | null;
    quantidade: number;
    preco: number;
    plano: IPlano;
    dominio: {
        dominio: string,
        id: number,
        planoDominioId: number
    } | null;
    email: unknown;
  }

interface ICliente {
    id: string,
    nome: string,
    email: string,
    telefone: string,
    nif: string,
    senha: string,
    role: "Particular" | "Empresa",
    endereco: {
        endereco: string,
        id: string,
        pais: string,
        provincia: string
    },
    faturas: IFatura[]
}

export type { ICliente, IFatura, IPlano, IServico, IFaturaProduto }