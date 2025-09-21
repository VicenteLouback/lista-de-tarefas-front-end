import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tarefas } from '../../models/dashboard';
import { DatePipe, NgForOf } from '@angular/common';
import { TarefaService } from '../../service/tarefa.service';
import { NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common'; 

@Component({
  selector: 'app-home',
  imports: [NgForOf, DatePipe, NgStyle, FormsModule, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  tarefas: Tarefas[] = [];

  constructor(private router: Router, private tarefaService: TarefaService){}

  ngOnInit(){
    this.tarefas = this.tarefaService.listaTarefa();
    this.tarefaService.tarefa$.subscribe(t => this.tarefas = t);
  }

  navegarParaCriarTarefa(){
    this.router.navigate(['/tasks']);
  }


  //Contadores
  get totalTarefas():number{
    return this.tarefas.length;
  }

  get concluidas():number{
    return this.tarefas.filter(t => t.status === 'CONCLUIDA').length;
  }

  get pendentes():number{
    return this.tarefas.filter(t => t.status === 'PENDENTE').length;
  }

  get emAndamento(): number {
    return this.tarefas.filter(t => t.status === 'EM ANDAMENTO').length;
  }
  
  getCorPorPrioridade(prioridade: string): any{
    switch(prioridade.toLowerCase()) {
      case 'baixa':
        return {'background-color': '#4CAF50'};
      case 'media':
        return {'background-color': '#FFC107'};
      case 'alta':
        return {'background-color': '#F44336'};
      default:
        return {};
    }
  }
  
  deletarTarefa(index: number){
     this.tarefaService.deletarTarefa(index);
  }

  concluirTarefa(index: number){
    this.tarefaService.concluirTarefa(index);
  }

  getEstiloTarefa(tarefa: any){
    const estilo: any = {};

  // Define a borda pelo status
  if (tarefa.status === 'CONCLUIDA') {
    estilo.border = '5px dotted gray';
    estilo.opacity = '0.8';
  } else {
    estilo.border = '2px solid #000';
    estilo.opacity = '1';
  }

  // Adiciona estilo por prioridade
  const estiloPrioridade = this.getCorPorPrioridade(tarefa.prioridade);
      return {...estiloPrioridade, ...estilo};
  }

  refazerTarefa(index: number){
    this.tarefaService.refazerTarefa(index);
  }
}
