import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  logout()
  {
    this.authenticationService.logout();
  }

}
