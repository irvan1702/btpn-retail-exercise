import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router
  ) { }

  ngOnInit() {
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

  }
}
