import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tarefas } from '../../models/dashboard';
import { NgForOf } from '@angular/common';
import { TasksComponent } from '../tasks/tasks.component';



@Component({
  selector: 'app-home',
  imports: [NgForOf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  tarefas: Tarefas[] = [];

  constructor(private router: Router, private tarefaService: TasksComponent){}

  ngOnInit(){
    this.tarefas = this.tarefaService.listarTarefas();
  }

  navegarParaCriarTarefa(){
    this.router.navigate(['/tasks']);
  }

  // Função para adicionar tarefas
  adicionarTarefa(tarefa: Tarefas){
    this.tarefas.push(tarefa);
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
    return this.tarefas.filter(t => t.status === 'EM_ANDAMENTO').length;
  }
  
  
}
