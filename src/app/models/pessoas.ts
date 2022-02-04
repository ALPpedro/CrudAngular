export interface TodoListResponse {
    content: Pessoas[];
    totalElements: number;
}

export interface Pessoas{
    id: any;
    nome: string
    dataDeNascimento: any;
    rg: string;
    cpf: string;
    telefone: string;
}