import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcdnurComponent } from './addcdnur.component';

describe('AddcdnurComponent', () => {
  let component: AddcdnurComponent;
  let fixture: ComponentFixture<AddcdnurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcdnurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcdnurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
