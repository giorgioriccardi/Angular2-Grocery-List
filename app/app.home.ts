import { Component }                    from '@angular/core';
import { Routes, RouterModule }         from '@angular/router';
import { MyFoodItemService }            from './app.myfooditemservice';

@Component({
    template: `
                <table>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                  </tr>
                  <tr *ngFor="let myData of myFoodItems">
                    <!-- <td><a routerLink="/detail/{{myData.id}}/{{myData.name}}/{{myData.mfg}}/{{myData.pkg}}/{{myData.qty}}" -->
                    <td><a routerLink="/detail/{{myData.id}}" routerLinkActive="active">{{myData.id}}</a></td>
                    <td>{{myData.name}}</td>
                    <!--
                    {{myData.mfg}}
                    {{myData.pkg}}
                    {{myData.qty}}
                    -->
                  </tr>
                </table>
              `,

    // Providers allow us to inject an object instance through the constructor.
    // In this case we enable injection of MyDataService into AppComponent.
    providers: [MyFoodItemService]
})
export class HomeComponent {

    myFoodItems: Array<any>;
    myDataService: MyFoodItemService;

    // Since we are using a provider above we can receive
    // an instance through an instructor.
    constructor(myDataService: MyFoodItemService) {
        // Store local reference to MyDataService.
        this.myDataService = myDataService;

        this.myDataService.getFoodItems()
            // Subscribe to changes in the observable object
            // that is returned by getRemoteData.
            .subscribe(
            // You basically get three handlers.
            // 1. Handle successful data.
            data => {
                this.myFoodItems = data
                console.log("home page data: " + JSON.stringify(data)) // list of the json objects
            },
            // 2. Handle error.
            error => {
                alert(error)
            },
            // 3. Execute final instructions when successful.
            () => {
                console.log("Finished home data")
            });
    }

}
