import {Component} from 'angular2/core';
import {validAppComponent} from './validApp.component';
import {validAppBtnComponent} from './validAppBtn.component';

@Component({
    selector: 'my-secondPage',
    templateUrl: 'app/templates/secondPage.html',
    directives: [validAppComponent, validAppBtnComponent]
})

export class secondPageComponent {
	title: string = "My application";
}
