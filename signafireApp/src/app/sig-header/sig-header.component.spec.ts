import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigHeaderComponent } from './sig-header.component';

describe('SigHeaderComponent', () => {
  let component: SigHeaderComponent;
  let fixture: ComponentFixture<SigHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
