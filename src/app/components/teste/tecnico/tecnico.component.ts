import { Component, OnInit } from '@angular/core';
import { ProvaService } from 'src/app/services/prova.service';



@Component({
  selector: 'app-tecnico',
  templateUrl: './tecnico.component.html',
  styleUrls: ['./tecnico.component.css']
})
export class TecnicoComponent implements OnInit {

  

  

  constructor(
    private prova: ProvaService

  ) { }

  ngOnInit(): void {
  }

}
