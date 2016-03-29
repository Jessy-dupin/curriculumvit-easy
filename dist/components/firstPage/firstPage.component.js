System.register(['angular2/core', './tplApp.component', './tplConfirmApp.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tplApp_component_1, tplConfirmApp_component_1;
    var firstPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tplApp_component_1_1) {
                tplApp_component_1 = tplApp_component_1_1;
            },
            function (tplConfirmApp_component_1_1) {
                tplConfirmApp_component_1 = tplConfirmApp_component_1_1;
            }],
        execute: function() {
            firstPageComponent = (function () {
                function firstPageComponent() {
                    this.title = "My application";
                }
                firstPageComponent = __decorate([
                    core_1.Component({
                        selector: 'my-firstPage',
                        templateUrl: 'app/templates/firstPage.html',
                        directives: [tplApp_component_1.tplAppComponent, tplConfirmApp_component_1.tplConfirmAppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], firstPageComponent);
                return firstPageComponent;
            }());
            exports_1("firstPageComponent", firstPageComponent);
        }
    }
});
//# sourceMappingURL=firstPage.component.js.map