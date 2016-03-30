import {Component} from 'angular2/core';

import {tplAppComponent} from './tplApp.component';
import {tplConfirmAppComponent} from './tplConfirmApp.component';

@Component({
    selector: 'my-firstPage',
    templateUrl: 'app/templates/firstPage.html',
    directives: [tplAppComponent, tplConfirmAppComponent]
})

export class firstPageComponent {
	title: string = "My application";
}