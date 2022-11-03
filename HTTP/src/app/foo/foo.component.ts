import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css']
})
export class FooComponent implements OnInit {
  data:object;
  loading : boolean;
  o:Observable<object>;

  constructor(public http: HttpClient) { }

  makeRequest():void{
    this.loading = true;
    this.o = this.http.get('https://jsonplaceholder.typicode.com/posts/1')
    this.o.subscribe(this.getData);

  }

  getData = (d : Object) =>
  {
    
  }

  ngOnInit(): void {
  }

}
