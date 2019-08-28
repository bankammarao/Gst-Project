import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxpayerstypeComponent } from './taxpayerstype.component';

describe('TaxpayerstypeComponent', () => {
  let component: TaxpayerstypeComponent;
  let fixture: ComponentFixture<TaxpayerstypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxpayerstypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxpayerstypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
