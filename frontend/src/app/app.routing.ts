import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { GoodListComponent } from './good-list/good-list.component';
import { GoodDetailComponent } from './good-detail/good-detail.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'users', component: HomeComponent, canActivate: [AuthGuard],
        children: 
        [
            { path: '', component: UserListComponent},
            { path: ':id', component: UserDetailComponent}
        ]
    },
    { path: 'goods', component: HomeComponent, canActivate: [AuthGuard],
        children: 
        [
            { path: '', component: GoodListComponent},
            { path: ':id', component: GoodDetailComponent}
        ]
    },
    { path: 'transactions', component: HomeComponent, canActivate: [AuthGuard],
        children: 
        [
            { path: '', component: TransactionListComponent},
            { path: ':id', component: TransactionDetailComponent}
        ]
    },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);