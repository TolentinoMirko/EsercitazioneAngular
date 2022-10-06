import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-gionny',
  templateUrl: './gionny.component.html',
  styleUrls: ['./gionny.component.css']
})
export class GionnyComponent implements OnInit {
  @Input() pupa :string;
  constructor() { }

  ngOnInit(): void {
  }

}
