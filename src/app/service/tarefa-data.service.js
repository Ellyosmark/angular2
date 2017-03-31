"use strict";
var tarefa_mock_1 = require('../mock/tarefa.mock');
var TarefaDataService = (function () {
    function TarefaDataService() {
    }
    TarefaDataService.prototype.getTarefas = function () {
        return tarefa_mock_1.TAREFAS;
    };
    return TarefaDataService;
}());
exports.TarefaDataService = TarefaDataService;
//# sourceMappingURL=tarefa-data.service.js.map