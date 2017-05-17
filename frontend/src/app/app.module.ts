import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TitleCasePipe, DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { LoginComponent } from './utilities/login/login.component';
import { AuthGuard } from './utilities/authentication/auth.guard';
import { AuthenticationService } from './utilities/authentication/authentication.service';
import { UserService } from './utilities/service/user.service';
import { GoodService } from './utilities/service/good.service';
import { TransactionService } from './utilities/service/transaction.service';
import { routing } from './app.routing';
import { HomeComponent } from './utilities/home/home.component';
import { ToolbarComponent } from './utilities/toolbar/toolbar.component';
import { NavMenuComponent } from './utilities/nav-menu/nav-menu.component';
import { FooterComponent } from './utilities/footer/footer.component';
import { UserListComponent, DeleteUserDialog } from './users/user-list/user-list.component';
import { GoodListComponent, DeleteGoodDialog } from './goods/good-list/good-list.component';
import { TransactionListComponent, DeleteTransactionDialog } from './transactions/transaction-list/transaction-list.component';
import { GoodFormComponent } from './goods/good-form/good-form.component';
import { TransactionFormComponent, AddGoodDialog } from './transactions/transaction-form/transaction-form.component';
import { UserFormComponent } from './users/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ToolbarComponent,
    NavMenuComponent,
    FooterComponent,
    UserListComponent,
    DeleteUserDialog,
    DeleteGoodDialog,
    AddGoodDialog,
    DeleteTransactionDialog,
    GoodListComponent,
    TransactionListComponent,
    GoodFormComponent,
    TransactionFormComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    UserService,
    GoodService,
    TransactionService,
    TitleCasePipe,
    DatePipe
  ],
  entryComponents: [
    DeleteUserDialog,
    DeleteGoodDialog,
    AddGoodDialog,
    DeleteTransactionDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
