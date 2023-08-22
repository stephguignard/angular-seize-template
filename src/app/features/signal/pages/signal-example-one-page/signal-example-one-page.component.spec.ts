import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalExampleOnePageComponent } from './signal-example-one-page.component';

describe('SignalExampleOneComponent', () => {
  let component: SignalExampleOnePageComponent;
  let fixture: ComponentFixture<SignalExampleOnePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignalExampleOnePageComponent],
    });
    fixture = TestBed.createComponent(SignalExampleOnePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
