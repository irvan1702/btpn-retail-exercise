import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionFormComponent } from './transaction-form.component';
import { MaterialModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TransactionService } from "../../utilities/service/transaction.service";
import { UserService } from "../../utilities/service/user.service";
import { GoodService } from "../../utilities/service/good.service";
import { routing } from "../../app.routing";
import { HomeComponent } from "../../utilities/home/home.component";
import { GoodListComponent } from "../../goods/good-list/good-list.component";
import { TransactionListComponent } from "../transaction-list/transaction-list.component";
import { UserListComponent } from "../../users/user-list/user-list.component";
import { GoodFormComponent } from "../../goods/good-form/good-form.component";
import { UserFormComponent } from "../../users/user-form/user-form.component";
import { LoginComponent } from "../../utilities/login/login.component";
import { FooterComponent } from "app/utilities/footer/footer.component";
import { ToolbarComponent } from "app/utilities/toolbar/toolbar.component";
import { NavMenuComponent } from "../../utilities/nav-menu/nav-menu.component";
import { APP_BASE_HREF } from "@angular/common";

describe('TransactionFormComponent', () => {
  let component: TransactionFormComponent;
  let fixture: ComponentFixture<TransactionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        routing
      ],
      declarations: [
        TransactionFormComponent,
        HomeComponent,
        GoodFormComponent,
        GoodListComponent,
        TransactionListComponent,
        UserListComponent,
        UserFormComponent,
        LoginComponent,
        ToolbarComponent,
        FooterComponent,
        NavMenuComponent
      ],
      providers: [
        TransactionService,
        UserService,
        GoodService,
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should fail', () => {
    let state: boolean = false;

    expect(state).toBe(true);
  });
});
