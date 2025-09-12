export interface Dashboard {
}

 export interface Tarefas{
    titulo: string;
    descricao: string;
    data: Date;
    prioridade: 'BAIXA' | 'MEDIA' | 'ALTA';
    status: 'PENDENTE' | 'EM ANDAMENTO' | 'CONCLUIDA';
 }