import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaArmiComponent } from './lista-armi/lista-armi.component';
import { ListaAgentiComponent } from './lista-agenti/lista-agenti.component';
import { HomeComponent } from './home/home.component';
import { DettagliAgenteComponent } from './dettagli-agente/dettagli-agente.component';
import { DettagliArmiComponent } from './dettagli-armi/dettagli-armi.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"agenti",component:ListaAgentiComponent},
  {path:"armi",component:ListaArmiComponent},
  {path:"agenti/:path",component:DettagliAgenteComponent},
  {path:"armi/:path",component:DettagliArmiComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
