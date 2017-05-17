import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from '../../utilities/service/transaction.service';
import { DatePipe } from '@angular/common';
import { MdDialogRef, MdDialog, MdDialogConfig, MdSnackBar } from "@angular/material";

@Component({
  selector: 'app-transaction-list',
  templateUrl: '../../utilities/other/list.template.html',
  styleUrls: ['../../utilities/other/list.template.css']
})
export class TransactionListComponent implements OnInit {

  title: String = `Transaction List`;
  description: String = `Below you'll find a list of our transactions`;
  items = [];
  headers = ['ID', 'Customer', 'Transaction Date', 'Grand Total'];

  constructor(
      private router: Router,
      private transactionService: TransactionService,
      private datePipe: DatePipe,
      private dialog: MdDialog,
      private snackBar: MdSnackBar
  ) { }

  ngOnInit() {
    this.refreshTransactions();
  }

  refreshTransactions()
  {
    this.items = [];
    this.transactionService.getTransactions().subscribe(response => {
      for (let a = 0; a < response.length; a++)
      {
        const item = response[a];
        const detail = [
          item.id,
          `${item.user.firstName} ${item.user.lastName}`,
          this.datePipe.transform(item.transactionDate, 'shortDate'),
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
    let dialogRef = this.dialog.open(DeleteTransactionDialog);

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.deleteTransaction(item[0]);
    });
  }

  deleteTransaction(id: number)
  {
    this.transactionService.deleteTransaction(id).subscribe(() => {
      this.refreshTransactions();
      this.snackBar.open('Transaction Deleted', 'OK', {
        duration: 1500
      });
    });
  }

}

@Component({
  selector: 'delete-transaction-dialog',
  templateUrl: './delete-transaction-dialog.html',
  styleUrls: [
      './delete-transaction-dialog.css'
  ]
})
export class DeleteTransactionDialog {
  constructor(public dialogRef: MdDialogRef<DeleteTransactionDialog>) {}
}
