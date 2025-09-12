import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Tarefas } from '../../models/dashboard';
import { FormsModule } from '@angular/forms';
import { TarefaService } from '../../service/tarefa.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})

export class TasksComponent {
  titulo: string = '';
  descricao: string = '';
  prioridade: 'BAIXA' | 'MEDIA' | 'ALTA' = 'BAIXA';
  data: string = '';

  constructor(private router: Router, private tarefaService: TarefaService){}

  voltarParaPaginaPrincipal(){
    this.router.navigate(['/home']);
  }

  criarTarefa() {
    const novaTarefa: Tarefas = {
      titulo: this.titulo,
      descricao: this.descricao,
      prioridade: this.prioridade,
      status: 'EM ANDAMENTO',
      data: new Date(this.data)
    };

    this.tarefaService.adicionarTarefa(novaTarefa);
    this.router.navigate(['/home']);
  }
}
