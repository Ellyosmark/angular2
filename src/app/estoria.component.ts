import { Component } from '@angular/core';
import { Estoria } from './model/estoria';
import { Tarefa } from './model/tarefa';
import { ESTORIAS } from './mock/estorias.mock';
import { TAREFAS } from './mock/tarefa.mock';

@Component({
    selector: 'estoria',
    templateUrl: './app/html/estoria.component.html',
    styleUrls: [ './app/css/style.css' ]
})
export class EstoriaComponent {
    estorias: Estoria[];
    tarefas: Tarefa[];

    ngOnInit() {
        this.estorias = ESTORIAS;
        this.tarefas = TAREFAS;
    }

    getTarefasByEstoriaId(idEstoria: number){
        return this.tarefas.find(t => t.id_estoria === idEstoria);
    }
}