import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addb2claComponent } from './addb2cla.component';

describe('Addb2claComponent', () => {
  let component: Addb2claComponent;
  let fixture: ComponentFixture<Addb2claComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addb2claComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addb2claComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
