import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Weapons } from './weapon.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'valorant-api';

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
