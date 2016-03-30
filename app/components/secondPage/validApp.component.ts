import {Component} from 'angular2/core';
import {validAppDetailsComponent} from './validAppDetails.component';
import {validAppItemComponent} from './validAppItem.component';

@Component({
    selector: 'my-valid',
    templateUrl: 'app/templates/templateValid.html',
    directives: [validAppDetailsComponent, validAppItemComponent]
})

export class validAppComponent {}
