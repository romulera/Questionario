import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestoeService { 

  questoes = [
    {
      questao: 'Qual a cor do cavalo Branco de Napoleao ?', 
      resposta: [
        {opcao: 'Amarelo', correta: false},
        {opcao: 'Verde', correta: false},
        {opcao: 'Azul banana', correta: true},
        {opcao: 'Preto', correta: false},
        {opcao: 'Branco', correta: false},
      ], respondido: false
    }, {
      questao: 'Chegou a pouco de fora ?', 
      resposta: [
        {opcao: 'Agora', correta: false},
        {opcao: 'Não', correta: false},
        {opcao: 'Já estava', correta: false},
        {opcao: 'Oxi', correta: false},
        {opcao: 'Prefiro nao dizer', correta: true},
      ], respondido: false
    },{
      questao: 'Pizza é melhor que...?', 
      resposta: [
        {opcao: 'Pastel', correta: false},
        {opcao: 'Salada', correta: false},
        {opcao: 'Picolé de chuchu', correta: false},
        {opcao: 'Hamburguer', correta: false},
        {opcao: 'Nenhuma das anteriores', correta: true},
      ], respondido: false
    }
  ]

  prova = [{

    pergunta: 'quanto é 1+3', 
    participanAnswer: 0,
    resposta: 1,
    options: ["3", "4","6", "9", "15"]
  }, 
  ]

  constructor() { }


  getQuestoes(){
    return this.questoes
  }
}
