import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocissueComponent } from './docissue.component';

describe('DocissueComponent', () => {
  let component: DocissueComponent;
  let fixture: ComponentFixture<DocissueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocissueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
