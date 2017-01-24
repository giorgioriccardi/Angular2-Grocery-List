System.register(["@angular/core", "./app.myfooditemservice"], function (exports_1, context_1) {
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
    var core_1, app_myfooditemservice_1, HomeComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_myfooditemservice_1_1) {
                app_myfooditemservice_1 = app_myfooditemservice_1_1;
            }
        ],
        execute: function () {
            HomeComponent = (function () {
                // Since we are using a provider above we can receive
                // an instance through an instructor.
                function HomeComponent(myDataService) {
                    var _this = this;
                    // Store local reference to MyDataService.
                    this.myDataService = myDataService;
                    this.myDataService.getFoodItems()
                        .subscribe(
                    // You basically get three handlers.
                    // 1. Handle successful data.
                    function (data) {
                        _this.myFoodItems = data;
                        console.log("home page data: " + JSON.stringify(data)); // list of the json objects
                    }, 
                    // 2. Handle error.
                    function (error) {
                        alert(error);
                    }, 
                    // 3. Execute final instructions when successful.
                    function () {
                        console.log("Finished home data");
                    });
                }
                return HomeComponent;
            }());
            HomeComponent = __decorate([
                core_1.Component({
                    template: "\n                <table>\n                  <tr>\n                    <th>ID</th>\n                    <th>Name</th>\n                  </tr>\n                  <tr *ngFor=\"let myData of myFoodItems\">\n                    <!-- <td><a routerLink=\"/detail/{{myData.id}}/{{myData.name}}/{{myData.mfg}}/{{myData.pkg}}/{{myData.qty}}\" -->\n                    <td><a routerLink=\"/detail/{{myData.id}}\" routerLinkActive=\"active\">{{myData.id}}</a></td>\n                    <td>{{myData.name}}</td>\n                    <!--\n                    {{myData.mfg}}\n                    {{myData.pkg}}\n                    {{myData.qty}}\n                    -->\n                  </tr>\n                </table>\n              ",
                    // Providers allow us to inject an object instance through the constructor.
                    // In this case we enable injection of MyDataService into AppComponent.
                    providers: [app_myfooditemservice_1.MyFoodItemService]
                }),
                __metadata("design:paramtypes", [app_myfooditemservice_1.MyFoodItemService])
            ], HomeComponent);
            exports_1("HomeComponent", HomeComponent);
        }
    };
});
//# sourceMappingURL=app.home.js.map