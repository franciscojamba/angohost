export default interface IFatura {
    cliente: {
        nome: string,
        nif: string
    },
    produto: {
        descricao: string,
        ref: string,
        duracao: string,
        inicio: string,
        vencimento: string,
        estado: string
    },
    fatura: {
        descricao: string,
        ref: string,
        emitidaEm: string,
        total: number,
        id: string
    }
}