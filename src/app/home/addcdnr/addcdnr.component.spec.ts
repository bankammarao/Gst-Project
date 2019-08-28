import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcdnrComponent } from './addcdnr.component';

describe('AddcdnrComponent', () => {
  let component: AddcdnrComponent;
  let fixture: ComponentFixture<AddcdnrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcdnrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcdnrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
