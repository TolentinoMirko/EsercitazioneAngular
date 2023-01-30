import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  query!:string;
  title = 'AngularRouting';
  obsTrack: Observable<object>;
  result:any;



  constructor(public spotify:SpotifyService){
    this.obsTrack = spotify.searchTrack("I Really Want to Stay at Your House");
    this.obsTrack.subscribe((data)=>console.log(data));
    
  }
/*
  submit dell'interfaccia di ricerca
  
     submit(query:HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsTrack = this.spotify.searchTrack(this.query);
    this.obsTrack.subscribe((data) => this.results = data); 
  }

    */
}
