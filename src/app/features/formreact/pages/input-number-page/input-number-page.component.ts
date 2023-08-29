import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberComponent } from '../../../../shared/components/form/input-number/input-number.component';

@Component({
  selector: 'app-input-number-page',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InputNumberComponent],
  templateUrl: './input-number-page.component.html',
  styleUrls: ['./input-number-page.component.less'],
})
export class InputNumberPageComponent {
  standaloneValue: number | null = 3;
  reactiveForm: FormGroup;
  templateValue: number | null = 5;

  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      reactiveValue: [4],
    });
  }

  submitReactive() {
    console.log('Valeur soumise (réactif):', this.reactiveForm.get('reactiveValue')?.value);
  }

  submitTemplate(value: any) {
    console.log('Valeur soumise (template):', value.templateValue);
  }
}
