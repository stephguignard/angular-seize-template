import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoggerTestingModule } from 'ngx-logger/testing';

import { InputNumberPageComponent } from './input-number-page.component';

describe('InputNumberPageComponent', () => {
  let component: InputNumberPageComponent;
  let fixture: ComponentFixture<InputNumberPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InputNumberPageComponent, LoggerTestingModule],
    });
    fixture = TestBed.createComponent(InputNumberPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
