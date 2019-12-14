import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobaladminaddComponent } from './globaladminadd.component';

describe('GlobaladminaddComponent', () => {
  let component: GlobaladminaddComponent;
  let fixture: ComponentFixture<GlobaladminaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobaladminaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobaladminaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
