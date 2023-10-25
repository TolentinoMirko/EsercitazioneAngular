import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonType } from './type.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ripasso-es-debito';
  obs: Observable <PokemonType> ;
  data!: PokemonType;
  constructor(private http : HttpClient){
    this.obs = this.http.get<PokemonType>("https://pokeapi.co/api/v2/type")
    this.obs.subscribe(this.doSomething)
  }

  doSomething = (data : PokemonType) => {
    this.data = data
  }
}
