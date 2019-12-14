import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgquessetaddComponent } from './orgquessetadd.component';

describe('OrgquessetaddComponent', () => {
  let component: OrgquessetaddComponent;
  let fixture: ComponentFixture<OrgquessetaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgquessetaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgquessetaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
