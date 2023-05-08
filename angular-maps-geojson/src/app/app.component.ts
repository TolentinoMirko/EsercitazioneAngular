import { AfterViewInit } from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps'
import { GEOJSON, GeoFeatureCollection } from './models/geojson.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements AfterViewInit { //quando c'è implements significa che sta implementando una funzione (è sotto)
  title = 'server mappe';
  //Aggiungiamo latitudine e longitudine di un luogo
  center: google.maps.LatLngLiteral = { lat: 45.506738, lng: 9.190766 };
  geoJsonObject: GeoFeatureCollection;
  fillColor: string = "#FF0000";  //Colore delle zone catastali

  markerList: google.maps.MarkerOptions[] = [];
  zoom = 9;

  constructor() {

    //Questi dati dovremmo scaricarli dal server, per ora li abbiamo copiati nel file     gojson.model.ts
    this.geoJsonObject = GEOJSON;
    console.log(this.geoJsonObject); //stampo l'oggetto geoJsonObject sulla console
    //console.log(this.geoJsonObject.features[0].geometry.coordinates[0][0]) per entrare dentro i "numeri" bisogna mettere le parentesi quadre
  }


  @ViewChild('mapRef') mapRef!: GoogleMap; //<- Ottiene l’oggetto GoogleMap
  ngAfterViewInit() { //<- Quando è stata inizializzata l’interfaccia
    this.mapRef.data.addGeoJson(this.geoJsonObject);//aggiunge il geojson geoJsonObject all'interno della mappa 
    this.mapRef.data.setStyle(this.styleFunc)
  }


  styleFunc = (feature:any) =>{//per le funzione la quale vengono passate dei parametri bisogna utilizzare le arrow function
    console.log(feature.h.id)//google maps cambia in i o h e significano in sostanza properties
    let newColor = "#FF0000"; //RED
    if(feature.h.id == 0) newColor = "#00FF00"; //GREEN
    else newColor = "#0000FF"; //BLUE
    return ({
      clickable: false,
      fillColor: newColor,
      strokeWeight: 1
    });
  }
  }


