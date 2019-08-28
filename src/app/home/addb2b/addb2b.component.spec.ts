import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addb2bComponent } from './addb2b.component';

describe('Addb2bComponent', () => {
  let component: Addb2bComponent;
  let fixture: ComponentFixture<Addb2bComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addb2bComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addb2bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
