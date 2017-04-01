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
var estoria_data_service_1 = require('./service/estoria-data.service');
var EstoriaComponent = (function () {
    function EstoriaComponent(tarefaDataService, estoriaDataService) {
        this.tarefaDataService = tarefaDataService;
        this.estoriaDataService = estoriaDataService;
    }
    EstoriaComponent.prototype.ngOnInit = function () {
        this.tarefas = this.tarefaDataService.getTarefas();
        this.estorias = this.estoriaDataService.getEstorias();
    };
    EstoriaComponent.prototype.esconderEstoria = function (estoria) {
        estoria.isFinalizado = true;
        alert(" + " + estoria.pontos + "Pontos!");
    };
    EstoriaComponent.prototype.adicionarTarefa = function (tarefa) {
        this.tarefas.push(tarefa);
    };
    EstoriaComponent.prototype.getEstoriaById = function (idEstoria) {
        return this.estorias.find(function (t) { return t.id == idEstoria; });
    };
    EstoriaComponent.prototype.getTarefasByEstoriaId = function (idEstoria) {
        return this.tarefas.find(function (t) { return t.id_estoria === idEstoria; });
    };
    EstoriaComponent = __decorate([
        core_1.Component({
            selector: 'estoria',
            templateUrl: './app/html/estoria.component.html',
            styleUrls: ['./app/css/style.css']
        }), 
        __metadata('design:paramtypes', [tarefa_data_service_1.TarefaDataService, estoria_data_service_1.EstoriaDataService])
    ], EstoriaComponent);
    return EstoriaComponent;
}());
exports.EstoriaComponent = EstoriaComponent;
//# sourceMappingURL=estoria.component.js.map