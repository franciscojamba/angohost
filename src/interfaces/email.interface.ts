type Status ="PENDENTE"|"ATIVO"|"CANCELADO"|"SUSPENSO"

export interface IServicoEmail {
    id: string;
    clienteId: string;
    faturaId: string;
    emailId: number;
    dominio: string;
    status: Status;
    criadoEm: string;
    atualizadoEm: string;
    expiraEm: string;

}