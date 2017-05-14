import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from '../../utilities/service/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: '../../utilities/other/list.template.html',
  styleUrls: ['../../utilities/other/list.template.css']
})
export class TransactionListComponent implements OnInit {

  title: String = `Transaction List`;
  description: String = `Below you'll find a list of our transactions`;
  items = [];
  headers = ['ID', 'Transaction Date', 'Grand Total'];

  constructor(
      private router: Router,
      private transactionService: TransactionService
  ) { }

  ngOnInit() {
    this.transactionService.getTransactions().subscribe(response => {
      for (let a = 0; a < response.length; a++)
      {
        const item = response[a];
        const detail = [
          item.id,
          item.transactionDate,
          item.grandTotal
        ];
        this.items.push(detail);
      }
    });
  }

  addClick()
  {
    this.router.navigate(['transactions', 'add']);
  }

  editClick(item)
  {
    this.router.navigate(['transactions', item[0]]);
  }

  deleteClick(item)
  {

  }

}
