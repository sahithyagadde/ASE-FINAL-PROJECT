import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgquessetviewComponent } from './orgquessetview.component';

describe('OrgquessetviewComponent', () => {
  let component: OrgquessetviewComponent;
  let fixture: ComponentFixture<OrgquessetviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgquessetviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgquessetviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
