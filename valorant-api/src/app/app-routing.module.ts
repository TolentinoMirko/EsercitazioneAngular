import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaArmiComponent } from './lista-armi/lista-armi.component';
import { ListaAgentiComponent } from './lista-agenti/lista-agenti.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"agenti",component:ListaAgentiComponent},
  {path:"armi",component:ListaArmiComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
