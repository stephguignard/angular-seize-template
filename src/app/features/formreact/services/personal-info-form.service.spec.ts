import { TestBed } from '@angular/core/testing';

import { PersonalInfoFormService } from './personal-info-form.service';

describe('PersonalInfoFormService', () => {
  let service: PersonalInfoFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalInfoFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
