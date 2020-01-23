import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CalendarImportModalComponent} from './calendar-import-modal.component';

describe('CalendarImportModalComponent', () => {
  let component: CalendarImportModalComponent;
  let fixture: ComponentFixture<CalendarImportModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarImportModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarImportModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
