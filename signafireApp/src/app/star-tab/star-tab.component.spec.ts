import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarTabComponent } from './star-tab.component';

describe('StarTabComponent', () => {
  let component: StarTabComponent;
  let fixture: ComponentFixture<StarTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
