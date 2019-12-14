import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgquesseteditComponent } from './orgquessetedit.component';

describe('OrgquesseteditComponent', () => {
  let component: OrgquesseteditComponent;
  let fixture: ComponentFixture<OrgquesseteditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgquesseteditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgquesseteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
