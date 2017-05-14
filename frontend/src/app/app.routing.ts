import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './utilities/login/login.component';
import { HomeComponent } from './utilities/home/home.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { GoodListComponent } from './goods/good-list/good-list.component';
import { GoodDetailComponent } from './goods/good-detail/good-detail.component';
import { TransactionListComponent } from './transactions/transaction-list/transaction-list.component';
import { TransactionDetailComponent } from './transactions/transaction-detail/transaction-detail.component';
import { AuthGuard } from './utilities/authentication/auth.guard';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard]},
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
            { path: ':id', component: GoodDetailComponent},
            { path: 'add', component: GoodListComponent}
        ]
    },
    { path: 'transactions', component: HomeComponent, canActivate: [AuthGuard],
        children: 
        [
            { path: '', component: TransactionListComponent},
            { path: ':id', component: TransactionDetailComponent},
            { path: 'add', component: TransactionListComponent}
        ]
    },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);