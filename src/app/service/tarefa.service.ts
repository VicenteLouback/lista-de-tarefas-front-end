import { Injectable } from '@angular/core';
import { Tarefas } from '../models/dashboard';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  private tarefas: Tarefas[] = [];
  private tarefasSubject = new BehaviorSubject<Tarefas[]>(this.tarefas);

  tarefa$ = this.tarefasSubject.asObservable();

  adicionarTarefa(tarefa: Tarefas){
    this.tarefas.push(tarefa);
    this.tarefasSubject.next(this.tarefas);
  }
  
  listaTarefa(): Tarefas[]{
    return this.tarefas // retorna cópia
  }

  limparTarefas(){
    this.tarefas = [];
    this.tarefasSubject.next(this.tarefas);
  }

    deletarTarefa(index: number){
     this.tarefas.splice(index, 1);
     this.tarefasSubject.next(this.tarefas);
  }

  concluirTarefa(index: number){
    this.tarefas[index].status = 'CONCLUIDA';
    this.tarefasSubject.next(this.tarefas)
  }

  refazerTarefa(index: number){
    this.tarefas[index].status = 'EM ANDAMENTO';
    this.tarefasSubject.next(this.tarefas);
  }
} 
