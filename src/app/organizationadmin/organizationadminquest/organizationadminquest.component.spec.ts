import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationadminquestComponent } from './organizationadminquest.component';

describe('OrganizationadminquestComponent', () => {
  let component: OrganizationadminquestComponent;
  let fixture: ComponentFixture<OrganizationadminquestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationadminquestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationadminquestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
