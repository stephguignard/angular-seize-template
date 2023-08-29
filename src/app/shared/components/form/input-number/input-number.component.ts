import { CommonModule } from '@angular/common';
import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Optional,
  Output,
  Self,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-input-number',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.less'],
})
export class InputNumberComponent implements ControlValueAccessor, AfterViewInit, AfterViewChecked {
  @ViewChild('inputElem') inputElem!: ElementRef;
  @Input() value: number | null = null;
  @Input() required = false;
  @Output() valueChange = new EventEmitter<number | null>();

  displayValue = '';

  private lastValidValue = '';

  private onChange = (value: number | null) => {};
  private onTouched = () => {};
  private onValidatorChange = () => {};
  private cursorPosition = 0;

  constructor(
    private logger: NGXLogger,
    @Optional() @Self() public ngControl?: NgControl
  ) {
    if (ngControl) {
      ngControl.valueAccessor = this;
    }
  }

  ngAfterViewInit(): void {
    this.logger.debug('call ngAfterViewInit()');
  }

  ngAfterViewChecked(): void {
    this.inputElem.nativeElement.selectionStart = this.inputElem.nativeElement.selectionEnd = this.cursorPosition;
    this.logger.debug('call ngAfterViewChecked()');
  }

  writeValue(value: number | null): void {
    this.value = value;
    this.displayValue = this.formatNumber(value ? value.toString().replace('.', ',') : '');
    this.lastValidValue = this.displayValue;
    // this.validate();
  }

  registerOnChange(fn: (value: number | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onValidatorChange = fn;
  }

  validate(): any {
    if (this.required && !this.value) {
      return { required: true };
    }
    return null;
  }

  onInput(event: any): void {
    const inputValue = this.cleanInput(event.target.value);
    if (!this.isValidInput(event.target.value)) {
      this.displayValue = this.lastValidValue;
      this.inputElem.nativeElement.value = this.displayValue;
      return;
    }

    const initialCursorPosition = event.target.selectionStart;
    const apostrophesBeforeCursor = this.countApostrophes(inputValue.substring(0, initialCursorPosition));

    const numericValue = this.parseNumber(inputValue);
    this.displayValue = this.formatNumber(numericValue ? numericValue.toString() : '');

    const newApostrophesBeforeCursor = this.countApostrophes(this.displayValue.substring(0, initialCursorPosition));
    const difference = newApostrophesBeforeCursor - apostrophesBeforeCursor;

    this.cursorPosition = initialCursorPosition + difference;

    if (this.onValidatorChange) {
      this.onValidatorChange();
    }

    if (this.onChange) {
      this.onChange(numericValue);
    }
    this.valueChange.emit(numericValue);

    this.lastValidValue = this.displayValue;
  }

  private cleanInput(value: string): string {
    return value.replace(/,/g, '.').replace(/[^0-9.'']/g, '');
  }

  private isValidInput(value: string): boolean {
    return /^[0-9,.']*$/g.test(value);
  }

  private formatNumber(value: string): string {
    let [whole, fraction] = value.split('.');

    // Insert apostrophes for thousands
    whole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, "'");
    let formatted = whole;

    // Garder le point pour l'affichage
    if (fraction) {
      formatted += '.' + fraction;
    }

    return formatted;
  }

  private parseNumber(value: string): number | null {
    const cleaned = value.replace(',', '.').replace(/[^\d.]/g, '');
    const result = parseFloat(cleaned);
    return !isNaN(result) ? result : null;
  }

  private countApostrophes(input: string): number {
    return (input.match(/'/g) || []).length;
  }
}
