import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibReadingComponent } from './fib-reading.component';

describe('FibReadingComponent', () => {
  let component: FibReadingComponent;
  let fixture: ComponentFixture<FibReadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FibReadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FibReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
