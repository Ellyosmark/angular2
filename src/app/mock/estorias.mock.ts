import { Estoria } from '../model/estoria';
import { Tarefa } from '../model/tarefa';
import { TAREFAS } from './tarefa.mock';

export var ESTORIAS: Estoria[] = [
    {
        id: 1,
        nome: 'Estória 1',
        descricao: 'Essa é a primeira estória de usuário',
        pontos: 10,
        tarefas: TAREFAS
    },
    {
        id: 2,
        nome: 'Estória 2',
        descricao: 'Essa é a segunda estória de usuário',
        pontos: 8,
        tarefas: TAREFAS
    },
    {
        id: 3,
        nome: 'Estória 3',
        descricao: 'Essa é a terceira estória de usuário',
        pontos: 5,
        tarefas: TAREFAS
    }
]