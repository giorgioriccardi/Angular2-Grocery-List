import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
// grc
import { FoodItemService } from 'app/food-item.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [FoodItemService]
})
export class DetailComponent implements OnInit {
  private id;
  private name;
  private mfg;
  private pkg;
  private qty;

  myFoodItems: Array <any>;
  myDataService: FoodItemService;

  constructor(
        private route: ActivatedRoute, myDataService: FoodItemService) {
        this.myDataService = myDataService;
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let localID    = params['id'];
            // let localName  = params['name'];
            // let localMfg   = params['mfg'];
            // let localPkg   = params['pkg'];
            // let localQty   = params['qty'];
            this.id        = localID;
            // this.name      = localName;
            // this.mfg       = localMfg;
            // this.pkg       = localPkg;
            // this.qty       = localQty;

            this.myDataService.getFoodItems()
                // Subscribe to changes in the observable object
                // that is returned by getRemoteData.
                .subscribe(
                // You basically get three handlers.
                // 1. Handle successful data.
                data => {
                    this.myFoodItems = data;
                    // let strData  = JSON.stringify(data);
                    // alert(strData);

                    // here is the loop that loops through this.data.id and foreach key gets the value
                    for ( let foodItemString in this.myFoodItems ) {
                        let foodItem = JSON.parse( foodItemString );
                        if ( this.myFoodItems[foodItemString].id == localID ) { // if the id matches the param id
                          for ( let k in this.myFoodItems[foodItemString] ) { // for each value in the object...
                            if ( this.myFoodItems[foodItemString].hasOwnProperty(k) ) {
                                this[k] = this.myFoodItems[foodItemString][k];
                            }
                          }
                        break; // stop the loop
                      }
                    }
                },
                // 2. Handle error.
                error => {
                    alert(error);
                },
                // 3. Execute final instructions when successful.
                () => {
                    console.log("Finished detail data");
                });

        });
    }
}
