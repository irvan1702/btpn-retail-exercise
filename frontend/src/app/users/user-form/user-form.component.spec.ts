import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormComponent } from './user-form.component';
import { TransactionFormComponent } from "../../transactions/transaction-form/transaction-form.component";
import { HomeComponent } from "../../utilities/home/home.component";
import { GoodFormComponent } from "../../goods/good-form/good-form.component";
import { GoodListComponent } from "../../goods/good-list/good-list.component";
import { TransactionListComponent } from "../../transactions/transaction-list/transaction-list.component";
import { UserListComponent } from "../user-list/user-list.component";
import { LoginComponent } from "../../utilities/login/login.component";
import { ToolbarComponent } from "../../utilities/toolbar/toolbar.component";
import { FooterComponent } from "../../utilities/footer/footer.component";
import { NavMenuComponent } from "../../utilities/nav-menu/nav-menu.component";
import { MaterialModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { routing } from "../../app.routing";
import { UserService } from "../../utilities/service/user.service";
import { APP_BASE_HREF } from "@angular/common";

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

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
        UserService,
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
