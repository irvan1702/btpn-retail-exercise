import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionListComponent } from './transaction-list.component';
import { MaterialModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TransactionService } from "../../utilities/service/transaction.service";
import { RouterTestingModule } from "@angular/router/testing";
import { DatePipe } from "@angular/common";

describe('TransactionListComponent', () => {
  let component: TransactionListComponent;
  let fixture: ComponentFixture<TransactionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
          MaterialModule,
          BrowserAnimationsModule,
          RouterTestingModule
      ],
      declarations: [ TransactionListComponent ],
      providers: [
        TransactionService,
        DatePipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
