import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ManageTodosComponent} from './manage-todos.component';

describe('ManageTodosComponent', () => {
  let component: ManageTodosComponent;
  let fixture: ComponentFixture<ManageTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
