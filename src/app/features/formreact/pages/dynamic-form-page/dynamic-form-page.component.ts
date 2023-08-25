import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-dynamic-form-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-form-page.component.html',
  styleUrls: ['./dynamic-form-page.component.less'],
})
export class DynamicFormPageComponent {
  fields = [
    { name: 'username', type: 'text', value: '', validators: [Validators.required] },
    { name: 'password', type: 'password', value: '' },
    { name: 'email', type: 'email', value: '', validators: [Validators.required, Validators.email] },
    { name: 'role', type: 'select', value: 'User', options: ['User', 'Admin', 'Guest'] },
    {
      name: 'skills',
      type: 'array',
      skills: [
        { name: 'Programming', level: 'Advanced', validators: { name: [Validators.required] } },
        { name: 'Design', level: 'Beginner', validators: { name: [Validators.required] } },
      ],
    },
  ];

  form: FormGroup;

  get skills(): FormArray {
    return this.form.get('skills') as FormArray;
  }

  constructor(private logger: NGXLogger) {
    this.form = new FormGroup({});
    this.initializeForm();
  }

  private initializeForm() {
    this.fields.forEach((field) => {
      if (field.type !== 'array') {
        this.form.addControl(field.name, new FormControl(field.value || '', field.validators || []));
      }
    });
    this.form.addControl('skills', new FormArray(this.getInitialSkills()));
  }

  private getInitialSkills(): FormGroup[] {
    const skillsField = this.fields.find((field) => field.name === 'skills');
    if (skillsField && skillsField.skills) {
      return skillsField.skills.map(
        (skill) =>
          new FormGroup({
            name: new FormControl(skill.name, skill.validators?.name || []),
            level: new FormControl(skill.level),
          })
      );
    }
    return [];
  }

  addSkill(): void {
    this.skills.push(
      new FormGroup({
        name: new FormControl('', Validators.required),
        level: new FormControl(''),
      })
    );
  }

  removeSkill(index: number): void {
    this.skills.removeAt(index);
  }

  sendData() {
    this.logger.debug('data vaut ', this.form.getRawValue());
  }
}
