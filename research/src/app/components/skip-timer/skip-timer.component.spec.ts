import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkipTimerComponent } from './skip-timer.component';

describe('SkipTimerComponent', () => {
  let component: SkipTimerComponent;
  let fixture: ComponentFixture<SkipTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkipTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkipTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
