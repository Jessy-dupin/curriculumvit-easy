import {Component} from 'angular2/core';
import {tplItemAppComponent} from './tplItemApp.component';

@Component({
    selector: 'my-tpl',
    templateUrl: 'app/templates/template.html',
    directives: [tplItemAppComponent]
})

export class tplAppComponent { }