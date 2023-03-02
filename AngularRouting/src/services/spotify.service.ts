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
       'Bearer BQBq1Wg-1e23qR4fsc5LWcto1dtIXK78F158FhwuIk4-fh0ulauBZj3uDQiwjrnTHKBAWk7si0YoO6LKLor3DPzXBMWhrc20yRpDNT2W2InIZh2hplVWyqQUyhSWf_Ok8ZZ7J6_49qCnSZwxX6TJaR-VU6x_nX47ALRYDfZ2OiBfNlg4iu6SoIPQeJ9Lc-0R'
   });

   let obsTracks = this.http.get(url, { headers });
   return obsTracks;

 }
} 



