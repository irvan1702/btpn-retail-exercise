import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodFormComponent } from './good-form.component';

describe('GoodFormComponent', () => {
  let component: GoodFormComponent;
  let fixture: ComponentFixture<GoodFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
