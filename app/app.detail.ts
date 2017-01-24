import { Component }                    from '@angular/core';
import { ActivatedRoute, Params }       from '@angular/router';
import { MyFoodItemService }            from './app.myfooditemservice';

@Component({
    template: `
                <h4>My DetailComponent page.</h4>
                <table>
                  <tr>
                    <th>Type</th>
                    <th>Specs</th>
                  </tr>
                  <tr>
                    <td><strong>Product ID:</strong></td>
                    <td>{{id}}</td>
                  </tr>
                  <tr>
                    <td><strong>Product Name:</strong></td>
                    <td>{{name}}</td>
                  </tr>
                  <tr>
                    <td><strong>Manufacturer:</strong></td>
                    <td>{{mfg}}</td>
                  </tr>
                  <tr>
                    <td><strong>Quantity:</strong></td>
                    <td>{{pkg}}</td>
                  </tr>
                  <tr>
                    <td><strong>Pack Size:</strong></td>
                    <td>{{qty}}</td>
                  </tr>
                </table>
              `,
      providers: [MyFoodItemService]
})
export class DetailComponent {
    private id;
    private name;
    private mfg;
    private pkg;
    private qty;

    myFoodItems: Array<any>;
    myDataService: MyFoodItemService;

    constructor(
        private route: ActivatedRoute, myDataService: MyFoodItemService) {
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

                    // js loop ver 1.0
                    // for ( let j in data ) { // we loop trought the objects
                    //   if ( data[j].id == localID ) { // if the id matches the param id
                    //     for ( let k in data[j] ) { // for each value in the object...
                    //       if ( data[j].hasOwnProperty(k) ) {
                    //           // console.warn( "data[j] is: ", k, data[j][k] );
                    //           this[k] = data[j][k];
                    //       }
                    //     }
                    //     break; // stop the loop
                    //   }
                    // }

                    // ts loop ver 3.0
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
