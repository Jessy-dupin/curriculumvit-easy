import {Component} from 'angular2/core';
import {headAppComponent} from './headApp.component';
import {subHeadAppComponent} from './subHeadApp.component';
import {tplAppComponent} from './tplApp.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.html',
    directives: [headAppComponent, subHeadAppComponent, tplAppComponent]
})

export class AppComponent {
	title: string = "My application";
}