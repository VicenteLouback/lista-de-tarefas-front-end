import { Component } from '@angular/core';
import { TasksComponent } from "../tasks/tasks.component";

@Component({
  selector: 'app-dashboard',
  imports: [TasksComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
