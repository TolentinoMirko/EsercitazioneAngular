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
       'Bearer BQAett0bqslbRdFJcr2q61H8qPgXgnS9rGY-XS_0wRLo8TjNdJWOVZ4-ehHQErAABBqIfaf0frJB92QuHTuJgrqqCosZ5yTOQomGNiF4spZ7Gy9EZ50f5cXzDFmUuHET17BKvTzmJhPHglKTE8iPxqjdcTxZSUodzMF3otJyGztjiHWjvnkUXzFfG4VCCf0w'
   });

   let obsTracks = this.http.get(url, { headers });
   return obsTracks;

 }
} 



