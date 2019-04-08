import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashMessagesComponent } from './trash-messages.component';

describe('TrashMessagesComponent', () => {
  let component: TrashMessagesComponent;
  let fixture: ComponentFixture<TrashMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrashMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
