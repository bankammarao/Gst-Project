import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2claComponent } from './b2cla.component';

describe('B2claComponent', () => {
  let component: B2claComponent;
  let fixture: ComponentFixture<B2claComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2claComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2claComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
