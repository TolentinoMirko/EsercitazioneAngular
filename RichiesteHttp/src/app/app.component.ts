import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from './models/booking.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'RichiesteHttp';
  obs : Observable<Booking[]> = undefined!
  data:Booking[] = undefined!
  
constructor(private http:HttpClient){
}

ngOnInit(): void {
  this.obs = this.http.get<Booking[]>('https://my-json-server.typicode.com/malizia-g/hotel/booking')
  this.obs.subscribe(this.faiqualcosa)
}
faiqualcosa = (data:Booking[]) => {
  this.data = data
}
}
