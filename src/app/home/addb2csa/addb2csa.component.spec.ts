import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addb2csaComponent } from './addb2csa.component';

describe('Addb2csaComponent', () => {
  let component: Addb2csaComponent;
  let fixture: ComponentFixture<Addb2csaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addb2csaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addb2csaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
