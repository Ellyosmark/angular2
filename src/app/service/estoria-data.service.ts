import { ESTORIAS } from '../mock/estorias.mock';
import { Injectable } from '@angular/core';

@Injectable()
export class EstoriaDataService {

    getEstorias(){
        return ESTORIAS;
    }
}