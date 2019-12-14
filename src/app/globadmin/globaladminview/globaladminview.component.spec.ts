import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobaladminviewComponent } from './globaladminview.component';

describe('GlobaladminviewComponent', () => {
  let component: GlobaladminviewComponent;
  let fixture: ComponentFixture<GlobaladminviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobaladminviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobaladminviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
