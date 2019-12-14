import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgprofviewComponent } from './orgprofview.component';

describe('OrgprofviewComponent', () => {
  let component: OrgprofviewComponent;
  let fixture: ComponentFixture<OrgprofviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgprofviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgprofviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
