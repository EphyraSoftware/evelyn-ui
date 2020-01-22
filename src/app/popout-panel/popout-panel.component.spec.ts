import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PopoutPanelComponent} from './popout-panel.component';

describe('PopoutPanelComponent', () => {
  let component: PopoutPanelComponent;
  let fixture: ComponentFixture<PopoutPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoutPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoutPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
