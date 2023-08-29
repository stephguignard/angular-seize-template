import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SignalHomePageComponent } from './signal-home-page.component';

describe('SignalHomePageComponent', () => {
  let component: SignalHomePageComponent;
  let fixture: ComponentFixture<SignalHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SignalHomePageComponent, RouterTestingModule],
    });
    fixture = TestBed.createComponent(SignalHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
