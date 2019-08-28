import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addb2clComponent } from './addb2cl.component';

describe('Addb2clComponent', () => {
  let component: Addb2clComponent;
  let fixture: ComponentFixture<Addb2clComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addb2clComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addb2clComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
