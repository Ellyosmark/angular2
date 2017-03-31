import {NgModule, Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app/app.component';
import {EstoriaComponent} from './app/estoria.component';
import {TarefaComponent} from './app/tarefa.component';
import {TarefaDataService} from './app/service/tarefa-data.service';
import {EstoriaDataService} from './app/service/estoria-data.service';


@NgModule({
    declarations: [ AppComponent, EstoriaComponent, TarefaComponent ],
    imports: [ BrowserModule ],
    bootstrap: [ AppComponent ],
    providers: [TarefaDataService, EstoriaDataService]
 
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);