import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2csaComponent } from './b2csa.component';

describe('B2csaComponent', () => {
  let component: B2csaComponent;
  let fixture: ComponentFixture<B2csaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2csaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2csaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
