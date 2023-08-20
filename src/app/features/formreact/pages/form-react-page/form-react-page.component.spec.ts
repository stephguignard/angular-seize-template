import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockBuilder } from 'ng-mocks';

import { FormReactPageComponent } from './form-react-page.component';

describe('FormReactPageComponent', () => {
  let component: FormReactPageComponent;
  let fixture: ComponentFixture<FormReactPageComponent>;

  beforeEach(() => {
    MockBuilder([FormReactPageComponent], []);
    fixture = TestBed.createComponent(FormReactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
