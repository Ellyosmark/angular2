import {NgModule, Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app/app.component';
import {EstoriaComponent} from './app/estoria.component';
import {TarefaComponent} from './app/tarefa.component';


@NgModule({
    declarations: [ AppComponent, EstoriaComponent, TarefaComponent ],
    imports: [ BrowserModule ],
    bootstrap: [ AppComponent ]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);