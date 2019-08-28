import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtxpdComponent } from './addtxpd.component';

describe('AddtxpdComponent', () => {
  let component: AddtxpdComponent;
  let fixture: ComponentFixture<AddtxpdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtxpdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtxpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
