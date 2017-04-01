"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var tarefa_data_service_1 = require('./service/tarefa-data.service');
var TarefaComponent = (function () {
    function TarefaComponent(tarefaDataService) {
        this.tarefaDataService = tarefaDataService;
    }
    TarefaComponent.prototype.ngOnInit = function () {
        this.tarefas = this.tarefaDataService.getTarefas();
    };
    TarefaComponent.prototype.adicionarTarefa = function () {
        console.log('hahaha');
        //this.tarefas.push(tarefa);
    };
    TarefaComponent = __decorate([
        core_1.Component({
            selector: 'tarefa',
            templateUrl: './app/html/tarefa.component.html',
            styleUrls: ['./app/css/style.css']
        }), 
        __metadata('design:paramtypes', [tarefa_data_service_1.TarefaDataService])
    ], TarefaComponent);
    return TarefaComponent;
}());
exports.TarefaComponent = TarefaComponent;
//# sourceMappingURL=tarefa.component.js.map