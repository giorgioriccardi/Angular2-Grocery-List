import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DetailComponent } from './detail/detail.component';
import { PagedefaultComponent } from './pagedefault/pagedefault.component';

// grc
import { routing, appRoutingProviders } from './app.routing';
import { FoodItemService } from 'app/food-item.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DetailComponent,
    PagedefaultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    FoodItemService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
