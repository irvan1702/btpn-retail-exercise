import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  activeRoute;

  constructor( private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activeRoute = this.activatedRoute.url['value'][0].path;
  }

}
