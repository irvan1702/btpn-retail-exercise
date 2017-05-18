import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionFormComponent } from './transaction-form.component';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionService } from '../../utilities/service/transaction.service';
import { UserService } from '../../utilities/service/user.service';
import { GoodService } from '../../utilities/service/good.service';
import { routing } from '../../app.routing';
import { HomeComponent } from '../../utilities/home/home.component';
import { GoodListComponent } from '../../goods/good-list/good-list.component';
import { TransactionListComponent } from '../transaction-list/transaction-list.component';
import { UserListComponent } from '../../users/user-list/user-list.component';
import { GoodFormComponent } from '../../goods/good-form/good-form.component';
import { UserFormComponent } from '../../users/user-form/user-form.component';
import { LoginComponent } from '../../utilities/login/login.component';
import { FooterComponent } from 'app/utilities/footer/footer.component';
import { ToolbarComponent } from 'app/utilities/toolbar/toolbar.component';
import { NavMenuComponent } from '../../utilities/nav-menu/nav-menu.component';
import { APP_BASE_HREF } from '@angular/common';

describe('TransactionFormComponent', () => {
  let component: TransactionFormComponent;
  let fixture: ComponentFixture<TransactionFormComponent>;

  let sampleCart = [
    {
      "item": {
        "id": 1,
        "name": "Sawi Putih",
        "price": 25,
        "picture": null,
        "itemCategory": {
          "id": 1,
          "name": "Grocery"
        }
      },
      "qty": 4,
      "singlePrice": 25,
      "discount": 0,
      "subtotal": 100
    },
    {
      "item": {
        "id": 4,
        "name": "Sapu Ijuk",
        "price": 50,
        "picture": null,
        "itemCategory": {
          "id": 2,
          "name": "Home and Furnishing"
        }
      },
      "qty": 2,
      "singlePrice": 50,
      "discount": 0,
      "subtotal": 100
    }
  ];

  let sampleCartAdvanced = [
    {
      "item": {
        "id": 1,
        "name": "Sawi Putih",
        "price": 25,
        "picture": null,
        "itemCategory": {
          "id": 1,
          "name": "Grocery"
        }
      },
      "qty": 23,
      "singlePrice": 25,
      "discount": 0,
      "subtotal": 575
    },
    {
      "item": {
        "id": 4,
        "name": "Sapu Ijuk",
        "price": 50,
        "picture": null,
        "itemCategory": {
          "id": 2,
          "name": "Home and Furnishing"
        }
      },
      "qty": 5,
      "singlePrice": 50,
      "discount": 0,
      "subtotal": 250
    },
    {
      "item": {
        "id": 3,
        "name": "Greenfields Full Cream",
        "price": 100,
        "picture": null,
        "itemCategory": {
          "id": 1,
          "name": "Grocery"
        }
      },
      "qty": 120,
      "singlePrice": 100,
      "discount": 0,
      "subtotal": 12000
    },
    {
      "item": {
        "id": 6,
        "name": "Coffee Table",
        "price": 350,
        "picture": null,
        "itemCategory": {
          "id": 2,
          "name": "Home and Furnishing"
        }
      },
      "qty": 2,
      "singlePrice": 350,
      "discount": 0,
      "subtotal": 700
    }
  ];

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

  it('should count discounts correctly: Customer less than 2 years', () => {
    component.selectedGoods = sampleCart;
    component.selectedUser = {
      'id' : 1,
      'firstName': 'Kenneth',
      'lastName': 'Jones',
      'address': 'Jl. Kebon Sirih 4 No. 10, Jakarta Selatan',
      'phone': '+628147348239',
      'email': 'kenneth.jones@gmail.com',
      'registerDate': new Date(2016, 0, 4),
      'userRole': {
        'id': 3,
        'roleName': 'customer',
        'roleDesc': 'Your average everyday customer'
      }
    };
    component.recalculateDiscount();

    expect(component.totalPrice).toEqual(200);
    expect(component.foldDiscount).toEqual(10);
    expect(component.grandTotal).toEqual(190);
  });

  it('should count discounts correctly: Customer less than 2 years - Advanced', () => {
    component.selectedGoods = sampleCartAdvanced;
    component.selectedUser = {
      'id' : 1,
      'firstName': 'Kenneth',
      'lastName': 'Jones',
      'address': 'Jl. Kebon Sirih 4 No. 10, Jakarta Selatan',
      'phone': '+628147348239',
      'email': 'kenneth.jones@gmail.com',
      'registerDate': new Date(2016, 0, 4),
      'userRole': {
        'id': 3,
        'roleName': 'customer',
        'roleDesc': 'Your average everyday customer'
      }
    };
    component.recalculateDiscount();

    expect(component.totalPrice).toEqual(13525);
    expect(component.foldDiscount).toEqual(675);
    expect(component.grandTotal).toEqual(12850);
  });

  it('should count discounts correctly: Customer over than 2 years', () => {
    component.selectedGoods = sampleCart;
    component.selectedUser = {
      'id' : 1,
      'firstName': 'Kenneth',
      'lastName': 'Jones',
      'address': 'Jl. Kebon Sirih 4 No. 10, Jakarta Selatan',
      'phone': '+628147348239',
      'email': 'kenneth.jones@gmail.com',
      'registerDate': new Date(2012, 0, 4),
      'userRole': {
        'id': 3,
        'roleName': 'customer',
        'roleDesc': 'Your average everyday customer'
      }
    };
    component.recalculateDiscount();

    expect(component.totalPrice).toEqual(195);
    expect(component.foldDiscount).toEqual(5);
    expect(component.grandTotal).toEqual(190);
  });

  it('should count discounts correctly: Customer over than 2 years - Advanced', () => {
    component.selectedGoods = sampleCartAdvanced;
    component.selectedUser = {
      'id' : 1,
      'firstName': 'Kenneth',
      'lastName': 'Jones',
      'address': 'Jl. Kebon Sirih 4 No. 10, Jakarta Selatan',
      'phone': '+628147348239',
      'email': 'kenneth.jones@gmail.com',
      'registerDate': new Date(2012, 0, 4),
      'userRole': {
        'id': 3,
        'roleName': 'customer',
        'roleDesc': 'Your average everyday customer'
      }
    };
    component.recalculateDiscount();

    expect(component.totalPrice).toEqual(13477.5);
    expect(component.foldDiscount).toEqual(670);
    expect(component.grandTotal).toEqual(12807.5);
  });

  it('should count discounts correctly: Store Affiliate', () => {
    component.selectedGoods = sampleCart;
    component.selectedUser = {
      'id' : 1,
      'firstName': 'Kenneth',
      'lastName': 'Jones',
      'address': 'Jl. Kebon Sirih 4 No. 10, Jakarta Selatan',
      'phone': '+628147348239',
      'email': 'kenneth.jones@gmail.com',
      'registerDate': new Date(2012, 0, 4),
      'userRole': {
        "id": 2,
        "roleName": "affiliate",
        "roleDesc": "Store affiliate"
      },
    };
    component.recalculateDiscount();

    expect(component.totalPrice).toEqual(185);
    expect(component.foldDiscount).toEqual(5);
    expect(component.grandTotal).toEqual(180);
  });

  it('should count discounts correctly: Store Affiliate - Advanced', () => {
    component.selectedGoods = sampleCartAdvanced;
    component.selectedUser = {
      'id' : 1,
      'firstName': 'Kenneth',
      'lastName': 'Jones',
      'address': 'Jl. Kebon Sirih 4 No. 10, Jakarta Selatan',
      'phone': '+628147348239',
      'email': 'kenneth.jones@gmail.com',
      'registerDate': new Date(2012, 0, 4),
      'userRole': {
        "id": 2,
        "roleName": "affiliate",
        "roleDesc": "Store affiliate"
      },
    };
    component.recalculateDiscount();

    expect(component.totalPrice).toEqual(13382.5);
    expect(component.foldDiscount).toEqual(665);
    expect(component.grandTotal).toEqual(12717.5);
  });

  it('should count discounts correctly: Store Employee', () => {
    component.selectedGoods = sampleCart;
    component.selectedUser = {
      'id' : 1,
      'firstName': 'Kenneth',
      'lastName': 'Jones',
      'address': 'Jl. Kebon Sirih 4 No. 10, Jakarta Selatan',
      'phone': '+628147348239',
      'email': 'kenneth.jones@gmail.com',
      'registerDate': new Date(2012, 0, 4),
      'userRole': {
        "id": 1,
        "roleName": "employee",
        "roleDesc": "Common store employee"
      }
    };
    component.recalculateDiscount();

    expect(component.totalPrice).toEqual(170);
    expect(component.foldDiscount).toEqual(5);
    expect(component.grandTotal).toEqual(165);
  });

  it('should count discounts correctly: Store Employee - Advanced', () => {
    component.selectedGoods = sampleCartAdvanced;
    component.selectedUser = {
      'id' : 1,
      'firstName': 'Kenneth',
      'lastName': 'Jones',
      'address': 'Jl. Kebon Sirih 4 No. 10, Jakarta Selatan',
      'phone': '+628147348239',
      'email': 'kenneth.jones@gmail.com',
      'registerDate': new Date(2012, 0, 4),
      'userRole': {
        "id": 1,
        "roleName": "employee",
        "roleDesc": "Common store employee"
      }
    };
    component.recalculateDiscount();

    expect(component.totalPrice).toEqual(13240);
    expect(component.foldDiscount).toEqual(660);
    expect(component.grandTotal).toEqual(12580);
  });
});
