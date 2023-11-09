import { RouterModule, Routes } from "@angular/router";
import { PokemonComponent } from "./pokemon/pokemon.component";
import { TipiPokemonComponent } from "./tipi-pokemon/tipi-pokemon.component";
import { NgModule } from "@angular/core";



const routes: Routes = [
  {path: "",component:TipiPokemonComponent},
  {path: "pokemon/:path",component:PokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
