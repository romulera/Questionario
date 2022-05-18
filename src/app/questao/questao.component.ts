import { Component, OnInit } from '@angular/core';
import { Questao } from '../questao';
import { QuestoeService } from '../services/questoe.service';

@Component({
  selector: 'app-questao',
  templateUrl: './questao.component.html',
  styleUrls: ['./questao.component.css']
})
export class QuestaoComponent implements OnInit {

  //variavel que ira receber a collection
  questoes: Questao[] = [];

  //contador da questao para incrementar e guardar a questão que o candidato parou 
  questaoAtual = 0;

  //desabilitar o radio
  answerSelected = false;

  //contador de respostas
  respostaCorreta = 0;
  repostaIncorreta = 0;

  //randomizando as questoes
 // randomize: number = 0;

  constructor(
    private questoresServices: QuestoeService
  ) { }

  ngOnInit(): void {

    this.questoes = this.questoresServices.getQuestoes();

    //this.randomize = Math.floor(Math.random() * this.questoes.length)

  }
  //método que avança para proxima questao
  onAnswer(opcao: boolean){
    this.answerSelected = true;
    setTimeout(() => {
      this.questaoAtual++;
      this.answerSelected = false
    }, 3000);

    if(opcao) {
      this.respostaCorreta++;
    } else {
      this.repostaIncorreta++;
    }

    
    
  }

}
