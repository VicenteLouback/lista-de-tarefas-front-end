import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Tarefas } from '../../models/dashboard';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
@Injectable({
  providedIn: 'root'
})
export class TasksComponent {

  constructor(private router: Router){}

  voltarParaPaginaPrincipal(){
    this.router.navigate(['/home']);
  }

  private tarefas: Tarefas[] = [];

  adicionarTarefa(tarefa: Tarefas){
    this.tarefas.push(tarefa);
  }

  listarTarefas(): Tarefas[]{
    return [...this.tarefas];
  }
  
  limparTarefas() {
    this.tarefas = [];
  }
}
