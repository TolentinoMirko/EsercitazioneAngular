import { HttpClient } from '@angular/common/http';
import { AfterViewInit } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { Observable } from 'rxjs';
import { GeoFeatureCollection } from './models/geojson.model';
import { Ci_vettore } from './models/ci_vett.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'server mappe';
  //Variabile che conterrà i nostri oggetti GeoJson
  geoJsonObject! : GeoFeatureCollection;
  //Observable per richiedere al server python i dati sul DB
  obsGeoData!: Observable<GeoFeatureCollection>;
  // Centriamo la mappa
  center: google.maps.LatLngLiteral = { lat: 45.506738, lng: 9.190766 };
  zoom = 16;
  obsCiVett! : Observable<Ci_vettore[]>; //Crea un observable per ricevere i vettori energetici
  markerList! : google.maps.MarkerOptions[];



  constructor(public http: HttpClient) {
    //Facciamo iniettare il modulo HttpClient dal framework Angular (ricordati di importare la libreria)
    
  }

  ngAfterViewInit(): void {
    
  }
  
  //Metodo che scarica i dati nella variabile geoJsonObject
  prepareData = (data: GeoFeatureCollection) => {
    this.geoJsonObject = data
    console.log( this.geoJsonObject );
  }

  prepareCiVettData = (data: Ci_vettore[]) =>
  {
    console.log(data); //Verifica di ricevere i vettori energetici
    this.markerList = []; //NB: markers va dichiarata tra le proprietà markers : Marker[]
    for (const iterator of data) { //Per ogni oggetto del vettore creo un Marker
      let m : google.maps.MarkerOptions = 
      {
       position : new google.maps.LatLng (iterator.WGS84_X, iterator.WGS84_Y),
       icon : this.findImage(iterator.CI_VETTORE),
       label : iterator.CI_VETTORE 
      }
      //Marker(iterator.WGS84_X,iterator.WGS84_Y,iterator.CI_VETTORE);
      this.markerList.push(m);
  }
}
findImage(label: string) : google.maps.Icon {
  if (label.includes("Gas")) {
    return { url: './assets/img/gas.ico', scaledSize: new google.maps.Size(32,32) };
  }
  if (label.includes("elettrica")) {
    return { url: './assets/img/electricity.ico', scaledSize: new google.maps.Size(32,32) };
  }
  //Se non viene riconosciuta nessuna etichetta ritorna l'icona undefined
    return {url: './assets/img/undefined.ico' , scaledSize: new google.maps.Size(32,32)}
}


 //Una volta che la pagina web è caricata, viene lanciato il metodo ngOnInit scarico i    dati 
  //dal server
  ngOnInit() {
    this.obsGeoData = this.http.get<GeoFeatureCollection>("https://5000-tolentinomi-esercitazio-bs2zyv1u4ow.ws-eu98.gitpod.io/ci_vettore/50");
    this.obsGeoData.subscribe(this.prepareData);
  }

}


  