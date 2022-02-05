import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibReadingWritingComponent } from './fib-reading-writing.component';

describe('FibReadingWritingComponent', () => {
  let component: FibReadingWritingComponent;
  let fixture: ComponentFixture<FibReadingWritingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FibReadingWritingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FibReadingWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
