import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NilComponent } from './nil.component';

describe('NilComponent', () => {
  let component: NilComponent;
  let fixture: ComponentFixture<NilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
