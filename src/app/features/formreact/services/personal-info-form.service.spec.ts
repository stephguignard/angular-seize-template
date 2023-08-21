import { TestBed } from '@angular/core/testing';

import { PersonalInfoForm } from './personal-info-form.service';

describe('PersonalInfoFormService', () => {
  let service: PersonalInfoForm;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalInfoForm);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
