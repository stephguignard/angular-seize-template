import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { PersonalInfoForm, PersonalInfoFormService } from '../../services/personal-info-form.service';

@Component({
  selector: 'app-form-react-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-react-page.component.html',
  styleUrls: ['./form-react-page.component.less'],
})
export class FormReactPageComponent {
  personalForm: PersonalInfoForm;

  constructor(
    private fb: FormBuilder,
    private personalInfoFormService: PersonalInfoFormService
  ) {
    this.personalForm = this.personalInfoFormService.buildFormGroup();
  }

  get aliases() {
    return this.personalForm.get('aliases') as FormArray;
  }

  updateProfile() {
    this.personalForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.personalForm.value);
  }
}
