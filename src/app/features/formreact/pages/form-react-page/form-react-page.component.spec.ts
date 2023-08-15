import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactPageComponent } from './form-react-page.component';

describe('FormReactPageComponent', () => {
  let component: FormReactPageComponent;
  let fixture: ComponentFixture<FormReactPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormReactPageComponent]
    });
    fixture = TestBed.createComponent(FormReactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
