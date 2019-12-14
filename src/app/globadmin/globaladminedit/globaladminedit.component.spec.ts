import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobaladmineditComponent } from './globaladminedit.component';

describe('GlobaladmineditComponent', () => {
  let component: GlobaladmineditComponent;
  let fixture: ComponentFixture<GlobaladmineditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobaladmineditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobaladmineditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
