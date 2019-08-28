import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdnuraComponent } from './cdnura.component';

describe('CdnuraComponent', () => {
  let component: CdnuraComponent;
  let fixture: ComponentFixture<CdnuraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdnuraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdnuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
