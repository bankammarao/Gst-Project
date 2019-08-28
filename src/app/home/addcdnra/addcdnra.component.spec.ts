import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcdnraComponent } from './addcdnra.component';

describe('AddcdnraComponent', () => {
  let component: AddcdnraComponent;
  let fixture: ComponentFixture<AddcdnraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcdnraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcdnraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
