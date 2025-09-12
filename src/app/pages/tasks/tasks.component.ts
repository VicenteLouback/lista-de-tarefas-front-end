import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tarefas } from '../../models/dashboard';
import { FormsModule, Validators } from '@angular/forms';
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
    this.router.navigate(['/']);
  }

  criarTarefa() {
    
    const partesDaData = this.data.split('-');
    const ano = parseInt(partesDaData[0], 10);
    const mes = parseInt(partesDaData[1], 10) - 1; // O mês em JavaScript é base 0
    const dia = parseInt(partesDaData[2], 10);

    const dataCorrigida = new Date(ano, mes, dia);
    
    const novaTarefa: Tarefas = {
      titulo: this.titulo,
      descricao: this.descricao,
      prioridade: this.prioridade,
      status: 'EM ANDAMENTO',
      data: dataCorrigida
    };

    this.tarefaService.adicionarTarefa(novaTarefa);
    this.router.navigate(['/home']);
  }
}
