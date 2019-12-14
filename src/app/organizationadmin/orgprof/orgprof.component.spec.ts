import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgprofComponent } from './orgprof.component';

describe('OrgprofComponent', () => {
  let component: OrgprofComponent;
  let fixture: ComponentFixture<OrgprofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgprofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
