import { Tarefa } from './tarefa';

export class Estoria {
    id:number;
    nome: string;
    descricao: string;
    pontos: number;
    isFinalizado: Boolean;
    tarefas: Tarefa[];
}