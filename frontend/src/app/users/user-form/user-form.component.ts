import { Component, OnInit } from '@angular/core';
import { UserService } from '../../utilities/service/user.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  roles;
  form;

  constructor(
      private userService: UserService,
      private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.userService.getRoles().subscribe(roles => {
      this.roles = roles;
    });

    this.form = this.formBuilder.group({
      firstName : this.formBuilder.control('', [Validators.required])
    });
  }

}
