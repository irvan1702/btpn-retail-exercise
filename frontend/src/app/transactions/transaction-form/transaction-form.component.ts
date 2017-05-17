import { Component, OnInit } from '@angular/core';
import { UserService } from '../../utilities/service/user.service';
import { GoodService } from '../../utilities/service/good.service';
import { TransactionService } from '../../utilities/service/transaction.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MdDialog, MdDialogConfig, MdDialogRef, MdSnackBar } from '@angular/material';

class User
{
  id: number;
  firstName: String;
  lastName: String;
  address: String;
  phone: String;
  email: String;
  registerDate: Date;
  userRole: Object = {
    'id' : 1,
    'roleName': null,
    'roleDesc': null
  };
}

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: [
      './transaction-form.component.css',
      '../../utilities/other/table.style.css'
  ]
})
export class TransactionFormComponent implements OnInit {

  filteredUsers;
  targetTransaction;
  totalPrice = 0;
  grandTotal = 0;
  users;
  selectedGoods = [];
  title: String;
  selectedUser = new User();
  userCtrl: FormControl;
  discount = 0;
  foldDiscount = 0;

  constructor(
      private userService: UserService,
      private transactionService: TransactionService,
      private activatedRoute: ActivatedRoute,
      private snackBar: MdSnackBar,
      private router: Router,
      private dialog: MdDialog
  )
  {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });

    this.userCtrl = new FormControl();
    this.filteredUsers = this.userCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterUsers(name));

    this.activatedRoute.params.subscribe(params => {
      if (params['id'] && !isNaN(params['id']))
      {
        this.targetTransaction = params['id'];

        this.transactionService.getTransaction(params['id']).subscribe(response => {
          this.selectedUser = response.user;
          this.title = `Edit Transaction #${response.id}`;
        });

        this.transactionService.getTransactionDetails(params['id']).subscribe(response => {
          for (let a = 0; a < response.length; a++) {
            const detail = response[a];
            this.selectedGoods.push({
              item: detail.item,
              singlePrice: detail.item.price,
              qty: detail.qty,
              discount: detail.discount,
              subtotal: detail.subtotal,
            });

            this.recalculateDiscount();
            this.recalculateSum();
          }
        });
      }
      else
        this.title = `Add New Transaction`;
    });
  }

  ngOnInit() {
  }

  filterUsers(val: string) {
    return val ? this.users.filter(s => new RegExp(`${val}`, 'gi').test(`${s.firstName} ${s.lastName}`))
        : this.users;
  }

  toggleAddGoodDialog()
  {

    let config = new MdDialogConfig;

    let dialogRef = this.dialog.open(AddGoodDialog, config);

    dialogRef.afterClosed().subscribe(result => {
      if (result)
      {
        if (!this.goodExists(result))
          this.selectedGoods.push(this.calculateDiscount(result));
        this.recalculateSum();
      }
    });
  }

  goodExists(goodObject): boolean
  {
    for (let a = 0; a < this.selectedGoods.length; a++)
    {
      let item = this.selectedGoods[a];
      if (item.item.id === goodObject.item.id)
      {
        item.qty += goodObject.qty;
        this.calculateDiscount(item);
        return true;
      }
    }
    return false;
  }

  changeQty(code: string, itemId: number): void
  {
    for (let a = 0; a < this.selectedGoods.length; a++)
    {
      let item = this.selectedGoods[a];
      if (item.item.id === itemId)
      {
        if (code === 'up')
          item.qty++;
        else
        {
          item.qty--;
        }
        this.calculateDiscount(item);
      }
    }
    this.recalculateSum();
  }

  toggleDelete(itemId: number): void
  {
    this.selectedGoods = this.selectedGoods.filter(item => {return (item.item.id !== itemId)});
    this.recalculateSum();
  }

  updateCustomer($event)
  {
    this.userService.getUser($event.value).subscribe(response => {
      this.selectedUser = response;
      this.recalculateDiscount();
    });
  }

  calculateDiscount(result)
  {
    if (!this.selectedUser.id)
      return result;
    else
    {
      switch(this.selectedUser.userRole['id'])
      {
        case 1:
          // Employee
          this.discount = 0.3;
          break;
        case 2:
          // Affiliate
          this.discount = 0.15;
          break;
        case 3:
          // Customer
          let currentDate = new Date().getTime();
          let registerDate: any = this.selectedUser.registerDate;
          let difference = Math.round(Math.abs(currentDate - registerDate) / (1000 * 3600 * 24));
          if (difference > 730)
              this.discount = 0.05;
          break;
        default:
          break;
      }

      let discountPrice;
      let totalPrice = result.qty * result.singlePrice;

      if (result.item.itemCategory.name.toLowerCase() === 'grocery' || result.item.itemCategory.name.toLowerCase() === 'groceries')
        discountPrice = 0;
      else
        discountPrice = this.discount * totalPrice;

      let subtotal = totalPrice - discountPrice;
      result.discount = discountPrice;
      result.subtotal = subtotal;

      return result;
    }
  }

  recalculateDiscount()
  {
      for (let a = 0; a < this.selectedGoods.length; a++)
          this.calculateDiscount(this.selectedGoods[a]);

      this.recalculateSum();
  }

  recalculateSum()
  {
      this.totalPrice = 0;
      this.foldDiscount = 0;
      this.grandTotal = 0;
      if (this.selectedGoods.length > 0)
      {
          for (let a = 0; a < this.selectedGoods.length; a++)
              this.totalPrice += this.selectedGoods[a].subtotal;

          this.foldDiscount = Math.floor(this.totalPrice / 100) * 5;
          this.grandTotal = this.totalPrice - this.foldDiscount;
      }
  }

  saveTransaction()
  {
      if (this.selectedGoods.length === 0 || !this.selectedUser.id)
          return false;
      else
      {
          // Construct Payload Object
        let payload = new FormData();
        payload.append('transactionDetails', JSON.stringify(this.selectedGoods));
        payload.append('customerId', this.selectedUser.id);
        payload.append('totalPrice', this.totalPrice);
        payload.append('discount', this.foldDiscount);
        payload.append('grandTotal', this.grandTotal);

        if (this.targetTransaction)
          payload.append('id', this.targetTransaction);

        this.transactionService.saveTransaction(payload).subscribe(response => {
          this.selectedGoods = [];
          if (this.targetTransaction)
          {
            this.snackBar.open('Transaction Edited Successfully', 'OK', {
              duration: 1500
            });
          }
          else
          {
            this.router.navigate(['transactions', response.id]);
            this.snackBar.open('Transaction Added Successfully', 'OK', {
              duration: 1500
            });
          }
        });
      }
  }
}

@Component({
  selector: 'add-good-dialog',
  templateUrl: './add-good-dialog.html',
  styleUrls: [
      'add-good-dialog.css'
  ]
})
export class AddGoodDialog implements OnInit{

  goods;
  selectedGood;
  form;

  constructor(
      public dialogRef: MdDialogRef<AddGoodDialog>,
      public goodService: GoodService,
      public formBuilder: FormBuilder
  ) {}

  ngOnInit()
  {
    this.goodService.getGoods().subscribe(goods => {
      this.goods = goods;
    });

    this.form = this.formBuilder.group({
      itemId  : this.formBuilder.control(0, [Validators.required]),
      itemName: this.formBuilder.control('', [Validators.required]),
      qty     : this.formBuilder.control(0, [Validators.required]),
      price   : this.formBuilder.control({value: 0, disabled: true}, [Validators.required]),
      subtotal: this.formBuilder.control({value: 0, disabled: true}, [Validators.required])
    });
  }

  onItemChange($event)
  {
    this.goodService.getGood($event.value).subscribe(response => {
      this.selectedGood = response;
      this.form.get('qty').setValue(1);
      this.form.get('itemName').setValue(response.name);
      this.form.get('price').setValue(response.price);
      this.form.get('subtotal').setValue(response.price);
    });
  }

  calculateSubtotal($event)
  {
    const qty = $event.target.value;
    const price = this.form.get('price').value;
    this.form.get('subtotal').setValue(qty * price);
  }

  closeDialog(state: boolean)
  {
    if (state && this.form.valid)
    {
      let result = {
        item        : this.selectedGood,
        singlePrice : this.form.get('price').value,
        qty         : this.form.get('qty').value,
        discount    : 0,
        subtotal    : this.form.get('subtotal').value,
      };
      return this.dialogRef.close(result);
    }

    return this.dialogRef.close(false);
  }
}