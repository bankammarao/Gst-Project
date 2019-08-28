import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtxpdaComponent } from './addtxpda.component';

describe('AddtxpdaComponent', () => {
  let component: AddtxpdaComponent;
  let fixture: ComponentFixture<AddtxpdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtxpdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtxpdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
