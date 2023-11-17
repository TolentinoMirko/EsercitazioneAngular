import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaArmiComponent } from './lista-armi/lista-armi.component';
import { ListaAgentiComponent } from './lista-agenti/lista-agenti.component';
import { HomeComponent } from './home/home.component';
import { DettagliAgenteComponent } from './dettagli-agente/dettagli-agente.component';
import { DettagliArmiComponent } from './dettagli-armi/dettagli-armi.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaArmiComponent,
    ListaAgentiComponent,
    HomeComponent,
    DettagliAgenteComponent,
    DettagliArmiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
