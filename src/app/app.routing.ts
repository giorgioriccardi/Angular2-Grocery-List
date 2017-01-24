import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DetailComponent } from './detail/detail.component';
import { PagedefaultComponent } from './pagedefault/pagedefault.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail/:id', component: DetailComponent },
  // { path: 'detail/:id/:name/:mfg/:pkg/:qty', component: DetailComponent }, // detail/:id/:name/:mfg/:pkg/:qty
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PagedefaultComponent }
];

export const appRoutingProviders: any[] = [

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
