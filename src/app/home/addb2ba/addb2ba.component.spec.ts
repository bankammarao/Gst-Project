import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Addb2baComponent } from './addb2ba.component';

describe('Addb2baComponent', () => {
  let component: Addb2baComponent;
  let fixture: ComponentFixture<Addb2baComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Addb2baComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Addb2baComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
