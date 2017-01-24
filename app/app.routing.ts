import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';
import { AppComponent }          from './app.component';
import { HomeComponent }         from './app.home';
import { AboutComponent }        from './app.about';
import { DetailComponent }       from './app.detail';
import { PageDefault }           from './app.pagedefault';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail/:id', component: DetailComponent },
  // { path: 'detail/:id/:name/:mfg/:pkg/:qty', component: DetailComponent }, // detail/:id/:name/:mfg/:pkg/:qty
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageDefault }
];

export const appRoutingProviders: any[] = [

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
