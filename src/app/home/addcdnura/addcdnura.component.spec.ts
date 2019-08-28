import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcdnuraComponent } from './addcdnura.component';

describe('AddcdnuraComponent', () => {
  let component: AddcdnuraComponent;
  let fixture: ComponentFixture<AddcdnuraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcdnuraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcdnuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
