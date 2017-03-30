import { Component } from '@angular/core';
import { Tarefa } from './model/tarefa';
import { TAREFAS } from './mock/tarefa.mock';

@Component({
    selector: 'tarefa',
    templateUrl: './app/html/tarefa.component.html',
    styleUrls: [ './app/css/style.css' ]
})
export class TarefaComponent {
    tarefas: Tarefa[];

    ngOnInit(){
        this.tarefas = TAREFAS;
    }
}