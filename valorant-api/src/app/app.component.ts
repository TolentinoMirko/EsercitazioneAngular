import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Weapons } from './models/weapon.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'valorant-api';

}
