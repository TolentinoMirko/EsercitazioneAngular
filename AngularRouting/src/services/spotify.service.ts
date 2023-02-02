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
       'Bearer BQC25hRIHZVlndt4uEBlDlOmzEgHo9QAFOF4MElkLtjRvz0jO6BO-WvVMtEyzC98LrmHYqqHGxFAjr2s4MlWKbl-uuhiiN2Q5ALWjcDGzhEWBYEKo-x7dik8JuMDNZiuuAvk5fFUs2zFoxJlIXvvOpVE-yWwc7WqK7sgXPbtrAsqyBZdDQ1H-D1fhZY1fNYo'
   });

   let obsTracks = this.http.get(url, { headers });
   return obsTracks;

 }
} 



