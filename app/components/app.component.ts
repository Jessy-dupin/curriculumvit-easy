import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {headAppComponent} from './headApp.component';
import {subHeadAppComponent} from './subHeadApp.component';
import {firstPageComponent} from './firstPage/firstPage.component';
import {secondPageComponent} from './secondPage/secondPage.component';
import {loginAppComponent} from './loginApp.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.html',
    directives: [headAppComponent, subHeadAppComponent, firstPageComponent, secondPageComponent, loginAppComponent]
    //directives: [headAppComponent, subHeadAppComponent, firstPageComponent, loginAppComponent, [ROUTER_PROVIDERS]]
})

// @RouteConfig([
//   {path: '/first',  name: 'First',  component: FirstComponent, useAsDefault: true},
//   {path: '/second', name: 'Second', component: SecondComponent},
// ])

export class AppComponent {
	title: string = "My application";
}