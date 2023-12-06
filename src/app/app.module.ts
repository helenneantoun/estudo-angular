import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ComponentcabecalhoComponent } from './componentcabecalho/componentcabecalho.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComponentcabecalhoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
