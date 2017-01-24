System.register(["@angular/core", "@angular/router", "./app.myfooditemservice"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, app_myfooditemservice_1, DetailComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_myfooditemservice_1_1) {
                app_myfooditemservice_1 = app_myfooditemservice_1_1;
            }
        ],
        execute: function () {
            DetailComponent = (function () {
                function DetailComponent(route, myDataService) {
                    this.route = route;
                    this.myDataService = myDataService;
                }
                DetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.forEach(function (params) {
                        var localID = params['id'];
                        // let localName  = params['name'];
                        // let localMfg   = params['mfg'];
                        // let localPkg   = params['pkg'];
                        // let localQty   = params['qty'];
                        _this.id = localID;
                        // this.name      = localName;
                        // this.mfg       = localMfg;
                        // this.pkg       = localPkg;
                        // this.qty       = localQty;
                        _this.myDataService.getFoodItems()
                            .subscribe(
                        // You basically get three handlers.
                        // 1. Handle successful data.
                        function (data) {
                            _this.myFoodItems = data;
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
                            for (var foodItemString in _this.myFoodItems) {
                                var foodItem = JSON.parse(foodItemString);
                                if (_this.myFoodItems[foodItemString].id == localID) {
                                    for (var k in _this.myFoodItems[foodItemString]) {
                                        if (_this.myFoodItems[foodItemString].hasOwnProperty(k)) {
                                            _this[k] = _this.myFoodItems[foodItemString][k];
                                        }
                                    }
                                    break; // stop the loop
                                }
                            }
                        }, 
                        // 2. Handle error.
                        function (error) {
                            alert(error);
                        }, 
                        // 3. Execute final instructions when successful.
                        function () {
                            console.log("Finished detail data");
                        });
                    });
                };
                return DetailComponent;
            }());
            DetailComponent = __decorate([
                core_1.Component({
                    template: "\n                <h4>My DetailComponent page.</h4>\n                <table>\n                  <tr>\n                    <th>Type</th>\n                    <th>Specs</th>\n                  </tr>\n                  <tr>\n                    <td><strong>Product ID:</strong></td>\n                    <td>{{id}}</td>\n                  </tr>\n                  <tr>\n                    <td><strong>Product Name:</strong></td>\n                    <td>{{name}}</td>\n                  </tr>\n                  <tr>\n                    <td><strong>Manufacturer:</strong></td>\n                    <td>{{mfg}}</td>\n                  </tr>\n                  <tr>\n                    <td><strong>Quantity:</strong></td>\n                    <td>{{pkg}}</td>\n                  </tr>\n                  <tr>\n                    <td><strong>Pack Size:</strong></td>\n                    <td>{{qty}}</td>\n                  </tr>\n                </table>\n              ",
                    providers: [app_myfooditemservice_1.MyFoodItemService]
                }),
                __metadata("design:paramtypes", [router_1.ActivatedRoute, app_myfooditemservice_1.MyFoodItemService])
            ], DetailComponent);
            exports_1("DetailComponent", DetailComponent);
        }
    };
});
//# sourceMappingURL=app.detail.js.map