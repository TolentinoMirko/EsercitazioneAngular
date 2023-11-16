import { Component } from '@angular/core';
import { Weapons } from '../models/weapon.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-lista-armi',
  templateUrl: './lista-armi.component.html',
  styleUrls: ['./lista-armi.component.css']
})
export class ListaArmiComponent {
  obs: Observable <Weapons> ;
  data!: Weapons;
  url!:any;

  constructor(private http : HttpClient){
    this.obs = this.http.get<Weapons>("https://valorant-api.com/v1/weapons")
    this.obs.subscribe(this.doSomething)
  }

  doSomething = (data : Weapons) => {
    this.data = data
    console.log(data)
  }
}
