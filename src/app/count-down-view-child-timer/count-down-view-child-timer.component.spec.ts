import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownViewChildTimerComponent } from './count-down-view-child-timer.component';

describe('CountDownViewChildTimerComponent', () => {
  let component: CountDownViewChildTimerComponent;
  let fixture: ComponentFixture<CountDownViewChildTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDownViewChildTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownViewChildTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
