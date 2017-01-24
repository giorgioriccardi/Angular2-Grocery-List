import { Component }          from '@angular/core';
import { Observable }         from 'rxjs/Observable';

// This component consumes the re-usable service. (grc whatever it means)
@Component({
    selector: 'my-app',
    template:
      `
        <h1>Warehouse GRC</h1>
        <h3>Final Assignment 4</h3>
        <nav>
          <a routerLink="/home" routerLinkActive="active">Home</a> |
          <a routerLink="/about" routerLinkActive="active">About</a>
        </nav>
        <br>
        <hr>
        <!-- Where router should display a view -->
        <router-outlet></router-outlet>
      `
})
export class AppComponent {

}
