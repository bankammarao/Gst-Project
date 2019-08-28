import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TxpdaComponent } from './txpda.component';

describe('TxpdaComponent', () => {
  let component: TxpdaComponent;
  let fixture: ComponentFixture<TxpdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TxpdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TxpdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
