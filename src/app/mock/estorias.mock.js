"use strict";
var tarefa_mock_1 = require('./tarefa.mock');
exports.ESTORIAS = [
    {
        id: 1,
        nome: 'Estória 1',
        descricao: 'Essa é a primeira estória de usuário',
        pontos: 10,
        isFinalizado: false,
        tarefas: tarefa_mock_1.TAREFAS
    },
    {
        id: 2,
        nome: 'Estória 2',
        descricao: 'Essa é a segunda estória de usuário',
        pontos: 8,
        isFinalizado: false,
        tarefas: tarefa_mock_1.TAREFAS
    },
    {
        id: 3,
        nome: 'Estória 3',
        descricao: 'Essa é a terceira estória de usuário',
        pontos: 5,
        isFinalizado: false,
        tarefas: tarefa_mock_1.TAREFAS
    }
];
//# sourceMappingURL=estorias.mock.js.map