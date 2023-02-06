import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

 constructor(private http: HttpClient) { }

 searchTrack(query: string) {
   const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
   const headers = new HttpHeaders({
     Authorization:
       'Bearer BQAt4XdK4qis5yMNrAjAIGDHL1ZvTPCggGKeWztiU35DoLYRFXkSqqGDonkVONdD-0sq6RmWS8GeTV2mivoZPRH1kfH2DI5524bHfEcfGg5YsjWSboG1pWnAuGXPFr2xAHWG7mC_rgLgmejRsSN3x-TW0-xvYkgO2afc4h2naRA9Su4kqfEOz0pCSz9imuZ9'
   });

   let obsTracks = this.http.get(url, { headers });
   return obsTracks;

 }
} 



