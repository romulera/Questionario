import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestaoComponent } from './questao/questao.component';
import { CadastroQuestaoComponent } from './cadastro-questao/cadastro-questao.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Material/material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { VideoComponent } from './components/video/video/video.component';
import { LogicaComponent } from './components/teste/logica/logica.component';
import { TecnicoComponent } from './components/teste/tecnico/tecnico.component';
import { ProvaService } from './services/prova.service';


@NgModule({
  declarations: [
    AppComponent,
    QuestaoComponent,
    CadastroQuestaoComponent,
    VideoComponent,
    LogicaComponent,
    TecnicoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProvaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
