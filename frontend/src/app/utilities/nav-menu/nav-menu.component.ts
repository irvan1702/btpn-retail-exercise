import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  @Input() active;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  linkTo(url: String)
  {
    this.router.navigate([url]);
  }

}
