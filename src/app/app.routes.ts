import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppShellComponent } from './app-shell/app-shell.component';

export const routes: Routes = [
    { path: 'home', loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent) },
    { path: 'shell', component: AppShellComponent },       // placeholder path for`app-shell features`
    { path: '', redirectTo: 'home', pathMatch: 'full' },   // redirect to `home-component`
    { path: '**', component: PageNotFoundComponent }       // Wildcard route for a 404 page
];
