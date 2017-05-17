import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './utilities/login/login.component';
import { HomeComponent } from './utilities/home/home.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { GoodListComponent } from './goods/good-list/good-list.component';
import { GoodFormComponent } from './goods/good-form/good-form.component';
import { TransactionListComponent } from './transactions/transaction-list/transaction-list.component';
import { TransactionFormComponent } from './transactions/transaction-form/transaction-form.component';
import { AuthGuard } from './utilities/authentication/auth.guard';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'users', component: HomeComponent, canActivate: [AuthGuard],
        children: 
        [
            { path: '', component: UserListComponent},
            { path: ':id', component: UserFormComponent},
            { path: 'add', component: UserFormComponent}
        ]
    },
    { path: 'goods', component: HomeComponent, canActivate: [AuthGuard],
        children: 
        [
            { path: '', component: GoodListComponent},
            { path: ':id', component: GoodFormComponent},
            { path: 'add', component: GoodFormComponent}
        ]
    },
    { path: 'transactions', component: HomeComponent, canActivate: [AuthGuard],
        children: 
        [
            { path: '', component: TransactionListComponent},
            { path: ':id', component: TransactionFormComponent},
            { path: 'add', component: TransactionFormComponent}
        ]
    },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);