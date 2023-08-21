import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

export type PersonalInfoForm = ReturnType<PersonalInfoFormService['buildFormGroup']>;
export type PersonalInfoFormData = ReturnType<PersonalInfoForm['getRawValue']>;

@Injectable({
  providedIn: 'root',
})
export class PersonalInfoFormService {
  public buildFormGroup() {
    return new FormGroup({
      firstName: new FormControl<string>('', Validators.required),
      lastName: new FormControl<string>(''),
      age: new FormControl<number | null>(null),
      address: new FormGroup({
        street: new FormControl<string>(''),
        city: new FormControl<string>(''),
        state: new FormControl<string>(''),
        zip: new FormControl<string>(''),
      }),
      aliases: new FormArray([new FormControl<string>('')]),
    });
  }

  // public formDataToPersonalInfo(formData: Partial<PersonalInfoFormData>): PersonalInfoForm {
  //   return {
  //     firstname : formData.firstName
  //   };
  // }
  //
  // public personalInfoToFormData(filter: PersonalInfoForm): PersonalInfoFormData {
  //   return {
  //
  //   };
  // }
}
