import { Component, OnInit } from '@angular/core';
import { UserService } from '../../utilities/service/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';

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
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  roles;
  form;
  user;
  title;

  constructor(
      private userService: UserService,
      private formBuilder: FormBuilder,
      private activatedRoute: ActivatedRoute,
      private snackBar: MdSnackBar,
      private router: Router
  ) 
  { 
    this.userService.getRoles().subscribe(roles => {
      this.roles = roles;
    });
    
    this.user = new User();

    this.activatedRoute.params.subscribe(params => {
      if (params['id'] && !isNaN(params['id']))
      {
        this.userService.getUser(params['id']).subscribe(response => {
          this.user = response;
          this.title = `Edit User ${response.firstName} ${response.lastName}`;
        });
      }
      else
        this.title = `Add New User`;
    });
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName : this.formBuilder.control('', [Validators.required]),
      lastName : this.formBuilder.control('', [Validators.required]),
      roleId: this.formBuilder.control('', [Validators.required]),
      address: this.formBuilder.control('', [Validators.required]),
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      phone: this.formBuilder.control('', [Validators.required])
    });
  }

  onSubmit(formData)
  {
    let userData:any = new FormData(document.querySelector("form"));
    if (this.user.id)
      userData.append('id', this.user.id);
    
    userData.append('roleId', formData.roleId)

    this.userService.modifyUser(userData).subscribe(response => {
      if (this.user.id)
        this.snackBar.open(`Successfully edited ${response.firstName} ${response.lastName}`, 'OK', {
          duration: 1500
        });
      else
      {
        this.snackBar.open(`Successfully added ${response.firstName} ${response.lastName}`, 'OK', {
          duration: 1500
        });
        this.router.navigate(['/users']);
      }
    })
  }
}