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

  private idCounter = 1;

  adicionarTarefa(tarefa: Omit<Tarefas, 'id'>){
    const novaTarefa: Tarefas = {
      ...tarefa,
      id: this.idCounter++
    };
    this.tarefas.push(novaTarefa);
    this.tarefasSubject.next(this.tarefas);
  }
  
  listaTarefa(): Tarefas[]{
    return this.tarefas // retorna cópia
  }

  limparTarefas(){
    this.tarefas = [];
    this.tarefasSubject.next([...this.tarefas]);
  }

   deletarTarefa(id: number){
    this.tarefas = this.tarefas.filter(t => t.id !== id);
    this.tarefasSubject.next([...this.tarefas]);
  }

  concluirTarefa(id: number){
    const tarefa = this.tarefas.find(t => t.id === id);
    if (tarefa) {
      tarefa.status = 'CONCLUIDA';
      this.tarefasSubject.next([...this.tarefas]);
    }
  }
  getTarefasConcluidas(): number {
  return this.tarefas.filter(t => t.status === 'CONCLUIDA').length;
}

}

