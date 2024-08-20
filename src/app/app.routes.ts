import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppShellComponent } from './app-shell/app-shell.component';

export const routes: Routes = [
    { path: 'home', loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent) },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'shell', component: AppShellComponent },
    { path: '**', component: PageNotFoundComponent }
];
