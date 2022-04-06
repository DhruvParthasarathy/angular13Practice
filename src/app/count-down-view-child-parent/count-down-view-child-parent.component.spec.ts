import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountDownViewChildParentComponent } from './count-down-view-child-parent.component';

describe('CountDownViewChildParentComponent', () => {
  let component: CountDownViewChildParentComponent;
  let fixture: ComponentFixture<CountDownViewChildParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountDownViewChildParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountDownViewChildParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
