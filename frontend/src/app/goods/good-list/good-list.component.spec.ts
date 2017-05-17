import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodListComponent } from './good-list.component';
import { MaterialModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GoodService } from "../../utilities/service/good.service";
import { RouterTestingModule } from "@angular/router/testing";

describe('GoodListComponent', () => {
  let component: GoodListComponent;
  let fixture: ComponentFixture<GoodListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        BrowserAnimationsModule,
        RouterTestingModule
      ],
      declarations: [ GoodListComponent ],
      providers: [
        GoodService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
