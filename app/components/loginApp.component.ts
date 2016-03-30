import {Component} from 'angular2/core';

import {RouteConfig, Router, APP_BASE_HREF, ROUTER_PROVIDERS, ROUTER_DIRECTIVES, CanActivate} from 'angular2/router';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {AuthHttp, tokenNotExpired, JwtHelper} from 'angular2-jwt';

@Component({
    selector: 'my-login',
    templateUrl: 'app/templates/login.html'
})

export class loginAppComponent {
	lock = new Auth0Lock('1kkbLOIrJR8dZw22yP96MSqWrRXQmZl7', 'elisescolaro.eu.auth0.com');

	constructor() {
		console.log(this.lock);
	}

	login() {
		console.log("login");
		this.lock.show(function(err:string, profile:string, id_token:string) {

		if(err) {
			throw new Error(err);
		}

		localStorage.setItem('profile', JSON.stringify(profile));
		localStorage.setItem('id_token', id_token);

		});
	}

	logout() {
		localStorage.removeItem('profile');
		localStorage.removeItem('id_token');
	}

	loggedIn() {
		return tokenNotExpired();
	}
}