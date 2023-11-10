import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  routeObs!: Observable<ParamMap>;
  pokemon : any;
  pokemonObs! : Observable<Object>;
  pokemonList : any;

  constructor(
    private route: ActivatedRoute,
    private http : HttpClient) { }
  
  ngOnInit(): void {
      //Ottengo l'observable che notifica le informazioni sulla route attiva
      this.routeObs = this.route.paramMap;
      this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) => {
    let pokemon = params.get('path'); //Ottengo l'id dalla ParamMap
    console.log(pokemon); //Stampo su console
    if (pokemon != null) { //se è diverso dal null allora esegui quello sotto
      this.pokemonObs = this.http.get<any>(`https://pokeapi.co/api/v2/type/${pokemon}`) //va a prendere il json del tipo selezionato dal url con il numero del tipo
      this.pokemonObs.subscribe(this.dosomething)
    }
  }

  dosomething=(data: any)=>{
    this.pokemonList = data;
    console.log(this.pokemonList)
  }
  getLastPart(data: string){
    let url = data.split("/").slice(-2)
    console.log(url[0])
    return url[0]
  }
}

