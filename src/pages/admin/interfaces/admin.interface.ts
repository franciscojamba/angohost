export interface IAdmin {
    id: string;
    nome: string;
    email: string;
    role: string;
}

export interface IClientsList {
    id: string;
    nif: string;
    nome: string;
    email: string;
    role: "Empresa" | "Particular";
}