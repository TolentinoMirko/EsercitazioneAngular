import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularRouting';
  obsTrack: Observable<object>;
  constructor(public SpotifyService:SpotifyService){
    this.obsTrack = SpotifyService.searchTrack("I Really Want to Stay at Your House");
    this.obsTrack.subscribe((data)=>console.log(data));

  }
}
