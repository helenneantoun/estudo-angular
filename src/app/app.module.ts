import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ComponentcabecalhoComponent } from './componentcabecalho/componentcabecalho.component';
import { RodapeComponent } from './componente/rodape/rodape.component';
import { CriarPensamentosComponent } from './componentes/pensamentos/criar-pensamentos/criar-pensamentos.component';
import { FormsModule } from '@angular/forms';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { PensamentoComponent } from './componentes/pensamentos/pensamento/pensamento.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComponentcabecalhoComponent,
    RodapeComponent,
    CriarPensamentosComponent,
    ListarPensamentoComponent,
    PensamentoComponent,
  ],
  imports: [
    BrowserModule ,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
