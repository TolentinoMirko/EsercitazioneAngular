import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipiPokemonComponent } from './tipi-pokemon/tipi-pokemon.component';
import { PokemonComponent } from './pokemon/pokemon.component';


const routes: Routes = [
  {path: "",component:TipiPokemonComponent},
  {path: "pokemon/:path",component:PokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
