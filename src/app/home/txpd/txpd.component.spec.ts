import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TxpdComponent } from './txpd.component';

describe('TxpdComponent', () => {
  let component: TxpdComponent;
  let fixture: ComponentFixture<TxpdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TxpdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TxpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
