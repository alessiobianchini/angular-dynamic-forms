import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Example1Component } from './components/example/example1/example-1.component';
import { Example2Component } from './components/example/example2/example-2.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'example1', component: Example1Component },
    { path: 'example2', component: Example2Component },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
