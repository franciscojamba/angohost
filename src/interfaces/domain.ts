interface domain {
    domain_status?: string, 
    nameservers: string[], 
    dns_records: dns_record
}

interface dns_record {
    host: string, 
    type: string, 
    value: string
}

interface IDomain {
    id: number,
    tipo: string,
    preco: number,
    desconto: number,
}

interface IDomainExtension {
    id: number,
    tipo: string,
    preco: number,
    desconto: number,
}

export type { domain, IDomain, IDomainExtension }