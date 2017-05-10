import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {    
    this.authenticationService.logout();

    this.form = this.formBuilder.group({
      username  : this.formBuilder.control('', [Validators.required]),
      password  : this.formBuilder.control('', [Validators.required])
    });
  }

  onSubmit(formValues)
  {
    if (this.form.valid)
    {
      this.authenticationService.login(formValues.username, formValues.password);
      this.router.navigate(['home']);
    }
  }
}
