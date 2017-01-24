System.register(["@angular/router", "./app.home", "./app.about", "./app.detail", "./app.pagedefault"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, app_home_1, app_about_1, app_detail_1, app_pagedefault_1, appRoutes, appRoutingProviders, routing;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_home_1_1) {
                app_home_1 = app_home_1_1;
            },
            function (app_about_1_1) {
                app_about_1 = app_about_1_1;
            },
            function (app_detail_1_1) {
                app_detail_1 = app_detail_1_1;
            },
            function (app_pagedefault_1_1) {
                app_pagedefault_1 = app_pagedefault_1_1;
            }
        ],
        execute: function () {
            appRoutes = [
                { path: 'home', component: app_home_1.HomeComponent },
                { path: 'about', component: app_about_1.AboutComponent },
                { path: 'detail/:id', component: app_detail_1.DetailComponent },
                // { path: 'detail/:id/:name/:mfg/:pkg/:qty', component: DetailComponent }, // detail/:id/:name/:mfg/:pkg/:qty
                { path: '', redirectTo: '/home', pathMatch: 'full' },
                { path: '**', component: app_pagedefault_1.PageDefault }
            ];
            exports_1("appRoutingProviders", appRoutingProviders = []);
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes));
        }
    };
});
//# sourceMappingURL=app.routing.js.map