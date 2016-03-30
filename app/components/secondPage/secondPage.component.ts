import {Component} from 'angular2/core';

//import {tplAppComponent} from './tplApp.component';

@Component({
    selector: 'my-secondPage',
    templateUrl: 'app/templates/secondPage.html',
    directives: []
})

export class secondPageComponent {
	title: string = "My application";
}