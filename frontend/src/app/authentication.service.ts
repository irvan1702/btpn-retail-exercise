import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(username: string, password: string) {
        //Hardcode for now
        let user = {
            "name"    : "admin"
        };
        
        if (username === 'admin' && password === 'admin')
            localStorage.setItem('currentUser', JSON.stringify(user));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}