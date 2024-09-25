interface Planos {
    id?: number
    titulo: string
    preco: number
    recursos: string[]
    planoPopular: boolean
    descricao: string
    descontos: number
    precoComDesconto: number
    categoriaId: number
}

type UserType = "ADMIN" | "IT" | "FINANCEIRO"
interface Usuario {
    id: string
    nome: string
    email: string
    senha: string
    role: UserType
}

interface Categoria {
    id: number,
    tipo: string,
    planos: Planos[]
}

export type { Categoria }
export type { Usuario }
export type { Planos } 