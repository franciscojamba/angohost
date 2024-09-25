interface IPlanoDominio {
    id: number;
    tipo: string;
    preco: number;
    desconto: number;
    precoComDesconto: number;
  }
  
  interface IDominio {
    id: number;
    dominio: string;
    planoDominioId: number;
    planoDominio: IPlanoDominio;
  }
  
  interface IClienteDominio {
    id: string;
    clienteId: string;
    dominioId: number;
    faturaId: string;
    status: string;
    criadoEm: string;
    atualizadoEm: string;
    expiraEm: string | null;
    Dominio: IDominio;
}

export type { IDominio, IClienteDominio, IPlanoDominio}