import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplatePageComponent } from './form-template-page.component';

describe('ForTemplatePageComponent', () => {
  let component: FormTemplatePageComponent;
  let fixture: ComponentFixture<FormTemplatePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormTemplatePageComponent]
    });
    fixture = TestBed.createComponent(FormTemplatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
