import { Component, OnInit } from '@angular/core';
// grc
import { Routes, RouterModule } from '@angular/router';
import { FoodItemService } from 'app/food-item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

  // Providers allow us to inject an object instance through the constructor.
  // In this case we enable injection of FoodItemService into AppComponent.
  providers: [FoodItemService]
})
export class HomeComponent implements OnInit {

  myFoodItems: Array<any>;
  myDataService: FoodItemService;

  // Since we are using a provider above we can receive
    // an instance through an instructor.
    constructor(myDataService: FoodItemService) {
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

  ngOnInit() {
  }

}
