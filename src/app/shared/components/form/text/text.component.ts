import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, FormsModule, NgControl, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-text',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.less'],
})
export class TextComponent implements ControlValueAccessor, OnInit {
  @Input() type = 'text';
  @Input() readonly = false;
  @Input() required = false;
  @Input() customValidators: ValidatorFn[] = [];

  inputControl: FormControl = new FormControl();

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: any = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouch: any = () => {};

  constructor(@Optional() @Self() public ngControl?: NgControl) {
    if (ngControl) {
      ngControl.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    this.initializeFormControl();

    this.inputControl.valueChanges.subscribe((value) => {
      if (this.onChange) {
        this.onChange(value);
      }
    });

    this.inputControl.statusChanges.subscribe(() => {
      if (this.onTouch) {
        this.onTouch();
      }
    });
  }

  private initializeFormControl() {
    const validatorFns: ValidatorFn[] = [...this.customValidators];

    if (this.type === 'email') {
      validatorFns.push(Validators.email);
    }

    if (this.required) {
      validatorFns.push(Validators.required);
    }

    this.inputControl.setValidators(validatorFns);
    this.inputControl.updateValueAndValidity();
  }

  writeValue(value: any): void {
    this.inputControl.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.inputControl.disable() : this.inputControl.enable();
  }
}
