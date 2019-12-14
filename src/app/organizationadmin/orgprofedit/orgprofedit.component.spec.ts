import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgprofeditComponent } from './orgprofedit.component';

describe('OrgprofeditComponent', () => {
  let component: OrgprofeditComponent;
  let fixture: ComponentFixture<OrgprofeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgprofeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgprofeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
