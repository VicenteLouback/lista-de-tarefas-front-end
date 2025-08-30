import { Routes } from '@angular/router';
import { DashboardComponent}  from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { TasksComponent } from './pages/tasks/tasks.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},

    {path: 'home', component: HomeComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'tasks', component: TasksComponent}
];
