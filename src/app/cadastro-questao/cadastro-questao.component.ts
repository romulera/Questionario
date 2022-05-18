import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cadastro-questao',
  templateUrl: './cadastro-questao.component.html',
  styleUrls: ['./cadastro-questao.component.css']
})
export class CadastroQuestaoComponent implements OnInit {
 

  personalData: FormGroup = new FormGroup({
    questao: new FormControl('', [Validators.required, Validators.minLength(10)]),
    opcao1: new FormControl('', [Validators.required]),
    opcao2: new FormControl('', [Validators.required]),
    opcao3: new FormControl('', [Validators.required]),
    opcao4: new FormControl('', [Validators.required]),
    opcao5: new FormControl('', [Validators.required]),
   

})

reactiveForm = new FormGroup({
  questao: new FormControl('', [Validators.required]),
  
  resposta: new FormGroup({
      opcao1: new FormControl(''),
      correta: new FormControl(''),
    })
       
    
  })

submit(): void {

  console.log(`Questao= ${this.personalData.controls['questao'].value}`);  
  console.log(`Opcao1 = ${this.personalData.controls['opcao1'].value}`); 
  console.log(`Opcao2 = ${this.personalData.controls['opcao2'].value}`);
  console.log(`Opcao3 = ${this.personalData.controls['opcao3'].value}`);
  console.log(`Opcao4 = ${this.personalData.controls['opcao4'].value}`);  
  console.log(`Opcao5 = ${this.personalData.controls['opcao5'].value}`);
 // console.log(this.personalData)
  console.log(this.reactiveForm)

}

constructor() { 
   
}

ngOnInit(): void {
  this.personalData.reset();
}

}