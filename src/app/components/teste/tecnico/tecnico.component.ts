import { Component, OnInit } from '@angular/core';
import { Prova } from 'src/app/prova';
import { ProvaService } from 'src/app/services/prova.service';



@Component({
  selector: 'app-tecnico',
  templateUrl: './tecnico.component.html',
  styleUrls: ['./tecnico.component.css']
})
export class TecnicoComponent implements OnInit {

  prova: Prova[] = [];

  

  constructor(
    private provaService: ProvaService

  ) { }

  ngOnInit(): void {

    this.prova = this.provaService.getProvas()
  }

}
