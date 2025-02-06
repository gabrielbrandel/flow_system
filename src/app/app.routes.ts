import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent }, // Página inicial
    { path: '**', redirectTo: '' } // Redireciona URLs desconhecidas para a home
];
