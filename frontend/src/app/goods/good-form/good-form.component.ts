import { Component, OnInit } from '@angular/core';
import {GoodService} from "../../utilities/service/good.service";
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MdSnackBar} from "@angular/material";

class Good
{
  id: number;
  name: String;
  price: number;
  picture: String;
  itemCategory: any = {
    "id"  : 0,
    "name": null
  };
}

@Component({
  selector: 'app-good-form',
  templateUrl: './good-form.component.html',
  styleUrls: ['./good-form.component.css']
})
export class GoodFormComponent implements OnInit {

  categories;
  form;
  selectedGood = new Good();
  title;

  constructor(
      private goodService: GoodService,
      private formBuilder: FormBuilder,
      private activatedRoute: ActivatedRoute,
      private snackBar: MdSnackBar,
      private router: Router)
  {
    this.goodService.getCategories().subscribe(response => {
      this.categories = response;
    });

    this.activatedRoute.params.subscribe(param => {
      if (param['id'] && !isNaN(param['id']))
      {
        this.goodService.getGood(param['id']).subscribe(selectedGood => {
          this.selectedGood = selectedGood;
          this.title = `Edit ${selectedGood.name}`;
        });
      }
      else
        this.title = 'Add New Item';
    });
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name : this.formBuilder.control('', [Validators.required]),
      price : this.formBuilder.control('', [Validators.required]),
      categoryId: this.formBuilder.control('', [Validators.required])
    });
  }

  onSubmit(data)
  {
    let goodData : any = new FormData(document.querySelector('form'));
    goodData.append('categoryId', data.categoryId);

    if (this.selectedGood.id)
      goodData.append('itemId', this.selectedGood.id);

    this.goodService.modifyGood(goodData).subscribe(response => {
      if (this.selectedGood.id)
      {
        this.snackBar.open(`Successfully Modified ${response.name}`, 'OK', {
          duration: 1500
        });
      }
      else
      {
        this.router.navigate(['goods', response.id]);
        this.snackBar.open(`Successfully Added ${response.name}`, 'OK', {
          duration: 1500
        });
      }
    });
  }
}
