import { Component, ElementRef, HostListener, forwardRef } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.scss'],
  imports: [MatIcon],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectDropdownComponent),
      multi: true,
    },
  ],
})
export class SelectDropdownComponent implements ControlValueAccessor {
  dropdownOpen: boolean = false;
  options: number[] = [15, 20, 25, 30, 35];
  selectedOption: number = 30;

  constructor(private eRef: ElementRef) {}

  public toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  public selectOption(option: number): void {
    this.selectedOption = option;
    this.dropdownOpen = false;
    this.onChange(option);
    this.onTouched();
  }

  @HostListener('document:click', ['$event'])
  public clickOut(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.dropdownOpen = false;
    }
  }

  // ControlValueAccessor methods
  writeValue(value: number): void {
    this.selectedOption = value;
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {}
}
