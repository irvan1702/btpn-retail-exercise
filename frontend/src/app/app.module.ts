import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FooterComponent } from './footer/footer.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { GoodListComponent } from './good-list/good-list.component';
import { GoodDetailComponent } from './good-detail/good-detail.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ToolbarComponent,
    NavMenuComponent,
    FooterComponent,
    UserListComponent,
    UserDetailComponent,
    GoodListComponent,
    GoodDetailComponent,
    TransactionListComponent,
    TransactionDetailComponent
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
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
