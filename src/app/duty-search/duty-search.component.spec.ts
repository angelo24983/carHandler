import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DutySearchComponent } from './duty-search.component';

describe('DutySearchComponent', () => {
  let component: DutySearchComponent;
  let fixture: ComponentFixture<DutySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DutySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DutySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
