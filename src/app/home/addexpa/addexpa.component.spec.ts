import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddexpaComponent } from './addexpa.component';

describe('AddexpaComponent', () => {
  let component: AddexpaComponent;
  let fixture: ComponentFixture<AddexpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddexpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddexpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
