interface Ciclo {
    id: string;
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
    ciclos: {
        planoId: string;
        cicloId: number;
        ciclo: Ciclo;
    }[];
}

export type { IPlano, Ciclo }