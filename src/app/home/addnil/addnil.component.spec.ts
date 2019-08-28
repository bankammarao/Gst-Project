import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnilComponent } from './addnil.component';

describe('AddnilComponent', () => {
  let component: AddnilComponent;
  let fixture: ComponentFixture<AddnilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
