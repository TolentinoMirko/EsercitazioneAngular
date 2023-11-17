import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dettagli-agente',
  templateUrl: './dettagli-agente.component.html',
  styleUrls: ['./dettagli-agente.component.css']
})
export class DettagliAgenteComponent {
  routeObs!: Observable<ParamMap>;
  agente : any;
  agenteObs! : Observable<Object>;
  agenteList : any;

  constructor(
    private route: ActivatedRoute,
    private http : HttpClient) { }
  
  ngOnInit(): void {
      //Ottengo l'observable che notifica le informazioni sulla route attiva
      this.routeObs = this.route.paramMap;
      this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) => {
    let agente = params.get('path'); //Ottengo l'id dalla ParamMap
    console.log(agente); //Stampo su console
    if (agente != null) { //se è diverso dal null allora esegui quello sotto
      this.agenteObs = this.http.get<any>(`https://valorant-api.com/v1/agents/${agente}`) //va a prendere il json del tipo selezionato dal url con il numero del tipo
      this.agenteObs.subscribe(this.dosomething)
    }
  }

  dosomething=(data: any)=>{
    this.agenteList = data;
    console.log(this.agenteList)
  }
}
