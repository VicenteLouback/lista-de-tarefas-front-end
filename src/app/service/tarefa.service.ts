import { Injectable } from '@angular/core';
import { Tarefas } from '../models/dashboard';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private tarefas: Tarefas[] = [];

  adicionarTarefa(tarefa: Tarefas){
    this.tarefas.push(tarefa);
  }
  
  listaTarefa(): Tarefas[]{
    return [...this.tarefas] // retorna cópia
  }

  limparTarefas(){
    this.tarefas = [];
  }
} 
