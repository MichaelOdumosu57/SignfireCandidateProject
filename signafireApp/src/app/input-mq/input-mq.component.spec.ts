import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMQComponent } from './input-mq.component';

describe('InputMQComponent', () => {
  let component: InputMQComponent;
  let fixture: ComponentFixture<InputMQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputMQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputMQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
