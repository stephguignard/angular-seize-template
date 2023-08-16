import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplatePageComponent } from './form-template-page.component';
import {MockBuilder} from "ng-mocks";

describe('ForTemplatePageComponent', () => {
  let component: FormTemplatePageComponent;
  let fixture: ComponentFixture<FormTemplatePageComponent>;

  beforeEach(()=>{
    MockBuilder(FormTemplatePageComponent)
    fixture = TestBed.createComponent(FormTemplatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
