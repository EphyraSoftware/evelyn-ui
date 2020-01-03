import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NotificationHostComponent} from './notification-host.component';

describe('NotificationHostComponent', () => {
  let component: NotificationHostComponent;
  let fixture: ComponentFixture<NotificationHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
