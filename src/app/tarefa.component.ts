import { Component } from '@angular/core';
import { Tarefa } from './model/tarefa';
import { TarefaDataService } from './service/tarefa-data.service'

@Component({
    selector: 'tarefa',
    templateUrl: './app/html/tarefa.component.html',
    styleUrls: [ './app/css/style.css' ]
})
export class TarefaComponent {
    tarefas: Tarefa[];

    constructor(private tarefaDataService: TarefaDataService) {}

    ngOnInit(){
        this.tarefas = this.tarefaDataService.getTarefas();
    }
}