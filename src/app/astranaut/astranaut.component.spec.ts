import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstranautComponent } from './astranaut.component';

describe('AstranautComponent', () => {
  let component: AstranautComponent;
  let fixture: ComponentFixture<AstranautComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstranautComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AstranautComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
