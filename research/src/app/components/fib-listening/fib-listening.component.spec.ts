import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibListeningComponent } from './fib-listening.component';

describe('FibListeningComponent', () => {
  let component: FibListeningComponent;
  let fixture: ComponentFixture<FibListeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FibListeningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FibListeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
