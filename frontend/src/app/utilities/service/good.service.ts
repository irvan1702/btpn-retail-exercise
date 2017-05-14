import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GoodService {
    constructor(private http: Http) { }

    getGoods() {
        return this.http.get('/api/item/all').map(response => {
            return response.json();
        });
    }

    getGood(id: number)
    {

    }
}