import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgprofaddComponent } from './orgprofadd.component';

describe('OrgprofaddComponent', () => {
  let component: OrgprofaddComponent;
  let fixture: ComponentFixture<OrgprofaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgprofaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgprofaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
