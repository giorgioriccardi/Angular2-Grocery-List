import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DetailComponent } from './detail/detail.component';
import { PagedefaultComponent } from './pagedefault/pagedefault.component';
var appRoutes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'detail/:id', component: DetailComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PagedefaultComponent }
];
export var appRoutingProviders = [];
export var routing = RouterModule.forRoot(appRoutes);
//# sourceMappingURL=../../../src/app/app.routing.js.map