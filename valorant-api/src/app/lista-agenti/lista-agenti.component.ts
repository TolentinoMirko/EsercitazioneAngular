import { Component } from '@angular/core';
import { Agents } from '../models/agents.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-lista-agenti',
  templateUrl: './lista-agenti.component.html',
  styleUrls: ['./lista-agenti.component.css']
})
export class ListaAgentiComponent {

  obs: Observable <Agents> ;
  data!: Agents;
  url!:any;

  constructor(private http : HttpClient){
    this.obs = this.http.get<Agents>("https://valorant-api.com/v1/agents")
    this.obs.subscribe(this.doSomething)
  }

  doSomething = (data : Agents) => {
    this.data = data
    console.log(data)
  }
}
