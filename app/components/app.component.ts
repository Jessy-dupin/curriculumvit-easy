import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';

import {headAppComponent} from './headApp.component';
import {subHeadAppComponent} from './subHeadApp.component';
import {firstPageComponent} from './firstPage/firstPage.component';
import {secondPageComponent} from './secondPage/secondPage.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.html',
    directives: [headAppComponent, subHeadAppComponent, ROUTER_DIRECTIVES]
    //directives: [headAppComponent, subHeadAppComponent, firstPageComponent, loginAppComponent, [ROUTER_PROVIDERS]]
})

@RouteConfig([
  {path: '/first',  name: 'First',  component: firstPageComponent, useAsDefault: true},
  {path: '/second', name: 'Second', component: secondPageComponent},
  {path: '/*path', redirectTo:['First']}
])
export class AppComponent {
	//title: string = "My application";
}