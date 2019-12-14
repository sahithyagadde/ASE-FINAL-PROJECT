import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobadminComponent } from './globadmin.component';

describe('GlobadminComponent', () => {
  let component: GlobadminComponent;
  let fixture: ComponentFixture<GlobadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
