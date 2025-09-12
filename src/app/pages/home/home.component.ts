import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tarefas } from '../../models/dashboard';
import { DatePipe, NgForOf } from '@angular/common';
import { TasksComponent } from '../tasks/tasks.component';
import { TarefaService } from '../../service/tarefa.service';



@Component({
  selector: 'app-home',
  imports: [NgForOf, DatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  tarefas: Tarefas[] = [];

  constructor(private router: Router, private tarefaService: TarefaService){}

  ngOnInit(){
    this.tarefas = this.tarefaService.listaTarefa();
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
  
  
}
