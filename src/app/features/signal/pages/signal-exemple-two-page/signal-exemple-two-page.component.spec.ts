import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalExempleTwoPageComponent } from './signal-exemple-two-page.component';

describe('SignalExempleTwoPageComponent', () => {
  let component: SignalExempleTwoPageComponent;
  let fixture: ComponentFixture<SignalExempleTwoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignalExempleTwoPageComponent],
    });
    fixture = TestBed.createComponent(SignalExempleTwoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
