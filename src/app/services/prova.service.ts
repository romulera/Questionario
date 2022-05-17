import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvaService {

  prova = [{

    pergunta: 'quanto é 1+3', 
    participanAnswer: "0",
    resposta: "1",
    options: ["3", "4","6", "9", "15"]
  }, 
  ]


  

  constructor() { }

  getProvas(){
    return this.prova
  }
}
