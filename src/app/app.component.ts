import { Component } from '@angular/core';
import { EstoriaComponent } from './estoria.component'

@Component({
    selector: 'meu-app',
    template: `<h1>{{titulo}}</h1>
        <estoria></estoria>
    `
})
export class AppComponent {
    titulo: string = "TaskBoard";    
}