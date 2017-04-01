export class Tarefa {
    id: number;
    id_estoria: number;
    nome: string;
    descricao: string;

    constructor(id: number, id_estoria : number, nome : string, descricao:string) {
        this.id = id;
        this.id_estoria = id_estoria;
        this.nome = nome;
        this.descricao = descricao;
    }
}