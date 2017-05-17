import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoodService } from '../../utilities/service/good.service';
import { MaterialModule } from '@angular/material';

import { GoodFormComponent } from './good-form.component';
import { routing } from "../../app.routing";
import { HomeComponent } from "../../utilities/home/home.component";
import { UserListComponent } from "../../users/user-list/user-list.component";
import { UserFormComponent } from "../../users/user-form/user-form.component";
import { TransactionListComponent } from "../../transactions/transaction-list/transaction-list.component";
import { TransactionFormComponent } from "../../transactions/transaction-form/transaction-form.component";
import { GoodListComponent } from "../good-list/good-list.component";
import { LoginComponent } from "../../utilities/login/login.component";
import { ToolbarComponent } from "../../utilities/toolbar/toolbar.component";
import { FooterComponent } from "../../utilities/footer/footer.component";
import { NavMenuComponent } from "../../utilities/nav-menu/nav-menu.component";
import { APP_BASE_HREF } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe('GoodFormComponent', () => {
  let component: GoodFormComponent;
  let fixture: ComponentFixture<GoodFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule,
        routing
      ],
      declarations: [
          GoodFormComponent,
          GoodListComponent,
          TransactionListComponent,
          TransactionFormComponent,
          UserListComponent,
          UserFormComponent,
          HomeComponent,
          LoginComponent,
          ToolbarComponent,
          FooterComponent,
          NavMenuComponent
      ],
      providers: [
        GoodService,
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
