import { NgModule }                     from '@angular/core';
import { BrowserModule }                from '@angular/platform-browser';
import { AppComponent }                 from './app.component';
import { PageDefault }                  from './app.pagedefault';
import { HomeComponent }                from './app.home';
import { AboutComponent }               from './app.about';
import { DetailComponent }              from './app.detail';
import { routing, appRoutingProviders } from './app.routing';
// import { Routes, RouterModule }         from '@angular/router';
// import { ActivatedRoute, Params }       from '@angular/router';
import { HttpModule }                   from '@angular/http'; // async call

@NgModule({
    imports:      [
                    BrowserModule,
                    routing,
                    HttpModule
                  ],
    declarations: [
                    AppComponent,
                    PageDefault,
                    HomeComponent,
                    AboutComponent,
                    DetailComponent
                  ],
    providers:    [ appRoutingProviders ],
    bootstrap:    [ AppComponent ],
})
export class AppModule { }
