import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {
  data!:object;  //sarà il valore che conterrà il risultato della richiesta http
  loading : boolean = false; //Una variabile che ci dice se siamo in attesa di una risposta dal server
  o!:Observable<object>; //Un oggetto che notifica quando arriva la risposta http dal server

  constructor(public http: HttpClient) { }

  makeRequest():void{
    this.loading = true;
    this.o = this.http.get('https://jsonplaceholder.typicode.com/posts/1')
    this.o.subscribe(this.getData);

  }

  getData = (d : Object) =>
  {
    this.data = d;
    this.loading = false
  }

  makeCompactPost(): void {
    this.loading = true;
    this.http
      .post('https://jsonplaceholder.typicode.com/posts',
        JSON.stringify({
          body: 'bar',
          title: 'foo',
          userId: 1
        })
      )
      .subscribe(data => {
        this.data = data;
        this.loading = false;
      });
  }

  ngOnInit(): void {
  }

}
