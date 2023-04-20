import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';

  center:any;
  position:any;
  label:string;
  position1:any;
  label1:string;

  constructor(){
    this.center={lat: 45.506738, lng: 9.190766};
    this.position = this.center;
    this.label = "ciao";
    this.position1={lat:45.50165719082021,lng: 9.193760217371562};
    this.label1 = "casa";
  }

}
