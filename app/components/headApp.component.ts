import {Component, View, provide} from 'angular2/core';

import {loginAppComponent} from './loginApp.component';


@Component({
    selector: 'my-head',
    templateUrl: 'app/templates/header.html',
    directives: [loginAppComponent]
})

export class headAppComponent {
  
}
