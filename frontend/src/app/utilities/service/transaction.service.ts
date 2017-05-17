import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TransactionService {
    constructor(private http: Http) { }

    getTransactions() {
        return this.http.get('/api/transaction/all').map(response => {
            return response.json();
        });
    }

    getTransaction(id: number)
    {
        return this.http.get(`/api/transaction/${id}`).map(response => {
            return response.json();
        });
    }

    getTransactionDetails(id: number)
    {
        return this.http.get(`/api/transaction/${id}/details`).map(response => {
            return response.json();
        });
    }

    saveTransaction(payload: FormData)
    {
        return this.http.post('/api/transaction/modify', payload).map(response => {
            return response.json();
        });
    }

    deleteTransaction(id: number)
    {
        return this.http.delete(`/api/transaction/${id}`).map(response => {
            return response.json();
        })
    }
}