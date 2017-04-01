import { Component } from '@angular/core';
import { Estoria } from './model/estoria';
import { Tarefa } from './model/tarefa';
import { TarefaDataService } from './service/tarefa-data.service'
import { EstoriaDataService } from './service/estoria-data.service'

@Component({
    selector: 'estoria',
    templateUrl: './app/html/estoria.component.html',
    styleUrls: [ './app/css/style.css' ]
})
export class EstoriaComponent {
    estorias: Estoria[];
    tarefas: Tarefa[];

    constructor(private tarefaDataService: TarefaDataService,
                private estoriaDataService: EstoriaDataService ) {}

    ngOnInit() {
        this.tarefas = this.tarefaDataService.getTarefas();
        this.estorias = this.estoriaDataService.getEstorias();
    }


    esconderEstoria(estoria: Estoria) {
        estoria.isFinalizado = true;
        alert(" + "+estoria.pontos+"Pontos!");
    }

    adicionarTarefa(tarefa: Tarefa) {
        this.tarefas.push(tarefa);
    }
    
    getEstoriaById(idEstoria: number){
        return this.estorias.find(t => t.id == idEstoria);
    }

    getTarefasByEstoriaId(idEstoria: number){
        return this.tarefas.find(t => t.id_estoria === idEstoria);   
    }

}