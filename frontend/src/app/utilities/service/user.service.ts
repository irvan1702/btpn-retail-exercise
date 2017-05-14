import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getUsers() {
        return this.http.get('/api/user/all').map(response => {
            return response.json();
        });
    }

    modifyUser(object: FormData)
    {
        return this.http.post('api/user/modify', object).map(response => {
            return response.json();
        });
    }

    getUser(id: number)
    {

    }

    getRoles()
    {
        return this.http.get('api/role/all').map(response => {
            return response.json();
        });
    }
}