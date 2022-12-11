import { Component, OnInit } from '@angular/core';
import { Booking } from '../models/booking.model';
import { Input } from '@angular/core';
@Component({
  selector: 'app-prenotazioni',
  templateUrl: './prenotazioni.component.html',
  styleUrls: ['./prenotazioni.component.css']
})
export class PrenotazioniComponent implements OnInit {
 constructor() { }
  @Input() listapren : Booking[] = undefined! ;
 

  ngOnInit(): void {
    
  }
}
