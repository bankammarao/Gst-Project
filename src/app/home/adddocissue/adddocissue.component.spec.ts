import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddocissueComponent } from './adddocissue.component';

describe('AdddocissueComponent', () => {
  let component: AdddocissueComponent;
  let fixture: ComponentFixture<AdddocissueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddocissueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddocissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
