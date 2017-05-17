import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdSnackBar, MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { GoodService } from '../../utilities/service/good.service';

@Component({
  selector: 'app-good-list',
  templateUrl: '../../utilities/other/list.template.html',
  styleUrls: [
    '../../utilities/other/list.template.css'
  ]
})
export class GoodListComponent implements OnInit {

  title = `Item List`;
  description = `Below you'll find the list of our goods.`;
  headers = ['ID', 'Name', 'Category', 'Price'];
  items = [];

  constructor(
    private goodService : GoodService,
    private router: Router,
    private dialog: MdDialog,
    private snackBar: MdSnackBar
  ) { }

  ngOnInit() {
    this.getGoods();
  }

  getGoods()
  {
    this.items = [];
    this.goodService.getGoods().subscribe(response => {
      for (let a = 0; a < response.length; a++)
      {
        const item = response[a];
        const detail = [
            item.id,
            item.name,
            item.itemCategory.name,
            item.price,
        ];
        this.items.push(detail);
      }
    });
  }

  addClick()
  {
    this.router.navigate(['goods', 'add']);
  }

  editClick(item)
  {
    this.router.navigate(['goods', item[0]]);
  }

  deleteClick(item)
  {
    let config = new MdDialogConfig;

    let dialogRef = this.dialog.open(DeleteGoodDialog, config);
    dialogRef.componentInstance.itemName = item[1];

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.deleteGood(item[0]);
    });
  }

  deleteGood(itemId: number)
  {
    this.goodService.deleteGood(itemId).subscribe(response => {
      this.getGoods();
      this.snackBar.open(`Successfully deleted ${response.name}`, 'OK', {
        duration: 1500
      });
    });
  }
}

@Component({
  selector: 'delete-good-dialog',
  templateUrl: './delete-good-dialog.html',
  styleUrls: [
      './delete-good-dialog.css'
  ]
})
export class DeleteGoodDialog {
  constructor(public dialogRef: MdDialogRef<DeleteGoodDialog>) {}

  itemName;
}