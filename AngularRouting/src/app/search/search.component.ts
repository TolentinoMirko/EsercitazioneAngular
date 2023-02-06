import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from 'src/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query!:string;
  title = 'AngularRouting';
  obsTrack!: Observable<object>;
  results:any;



  constructor(public spotify:SpotifyService){
    /*
    questa parte serve per cercare la canzone gia prescelta e inserirla nella console

    this.obsTrack = spotify.searchTrack("I Really Want to Stay at Your House");
    this.obsTrack.subscribe((data)=>console.log(data));
    */
  }

     submit(query:HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsTrack = this.spotify.searchTrack(this.query);
    this.obsTrack.subscribe((data) => this.results = data); 
  }

    
}
