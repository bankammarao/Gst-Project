import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addb2csComponent } from './addb2cs.component';

describe('Addb2csComponent', () => {
  let component: Addb2csComponent;
  let fixture: ComponentFixture<Addb2csComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addb2csComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addb2csComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
