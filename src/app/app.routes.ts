import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LogsComponent } from './logs/logs.component'


export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'logs', component: LogsComponent },
];
