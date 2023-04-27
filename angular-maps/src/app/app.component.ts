import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';

  center: any;
  position: any;
  label: string;
  position1: any;
  label1: string;
  circleOptions: any;
  markerOptions: google.maps.MarkerOptions;
  vertices: google.maps.LatLngLiteral[];
  triangleOptions:any;

  constructor() {
    this.center = { lat: 45.506738, lng: 9.190766 };
    this.position = this.center;
    this.label = "ciao";
    this.position1 = { lat: 45.50165719082021, lng: 9.193760217371562 };
    this.label1 = "casa";
    this.circleOptions = { fillColor: 'red' }
    this.triangleOptions = {fillColor:'purple'}
    this.vertices = [
      { lat: this.center.lat + 0.001, lng: this.center.lng - 0.002 },
      { lat: this.center.lat, lng: this.center.lng },
      { lat: this.center.lat - 0.001, lng: this.center.lng - 0.002 }
    ];

    let iconData: google.maps.Icon = {
      url: './assets/img/cat_acrobat.ico',
      scaledSize: new google.maps.Size(60, 60)


    }

    this.markerOptions = { icon: iconData }
  }

  giallo() {
    this.circleOptions = { fillColor: 'yellow' };
    console.log("PROVA")
  }

  blu() {
    this.circleOptions = { fillColor: 'blue' };
    console.log("PROVA")
  }
  verde() {
    this.triangleOptions = { fillColor: 'lime' };
    console.log("PROVA")
  }
}
