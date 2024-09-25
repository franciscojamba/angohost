interface ICliente {
    id: string;
    nome: string;
    email: string;
    telefone: string;
    nif: string;
    senha: string;
    enderecoId: string;
    role: string;
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
  
  interface IFaturaProduto {
    id: number;
    faturaId: string;
    planoId: string;
    dominioId: string | null;
    emailId: string | null;
    quantidade: number;
    preco: number;
    dominio:{
        id: string,
        dominio: string,
        planoDominioId: string
    };
    plano: IPlano;
  }
  
  interface IFatura {
    id: string;
    clienteId: string;
    total: number;
    status: string;
    criadoEm: string;
    atualizadoEm: string;
    reference: string;
    cliente: ICliente;
    faturaProdutos: IFaturaProduto[];
  }

  export type { ICliente, IFatura, IFaturaProduto, IPlano }
  