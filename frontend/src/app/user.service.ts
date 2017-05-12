import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getUsers() {
        return this.http.get('/api/user/all').subscribe(response => {
            return response.json();
        });
    }

    getUser(id: number)
    {

    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}