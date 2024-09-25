interface ICiclo {
    id: number;
    nome: string;
    duracao: string;
    multiplicador: number;
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

interface IServicoPlano {
    id: string;
    idCiclo: number;
    clienteId: string;
    planoId: string;
    faturaId: string;
    status: string;
    criadoEm: string;
    dominio: string;
    atualizadoEm: string;
    expiraEm: string | null;
    ciclo: ICiclo;
    Plano: IPlano;
}

export type { IServicoPlano, IPlano, ICiclo }