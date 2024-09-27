import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectDropdownComponent } from './select-dropdown.component';
import { By } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

describe('SelectDropdownComponent', () => {
  let component: SelectDropdownComponent;
  let fixture: ComponentFixture<SelectDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatIconModule, SelectDropdownComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle dropdown', () => {
    const dropdown = fixture.debugElement.query(By.css('.dropdown'));
    dropdown.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.dropdownOpen).toBeTrue();

    dropdown.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.dropdownOpen).toBeFalse();
  });

  it('should select an option', () => {
    const option = component.options[1];
    component.selectOption(option);
    expect(component.selectedOption).toBe(option);
    expect(component.dropdownOpen).toBeFalse();
  });

  it('should write value', () => {
    const value = 25;
    component.writeValue(value);
    expect(component.selectedOption).toBe(value);
  });

  it('should register onChange', () => {
    const fn = jasmine.createSpy('onChange');
    component.registerOnChange(fn);
    component.selectOption(20);
    expect(fn).toHaveBeenCalledWith(20);
  });

  it('should register onTouched', () => {
    const fn = jasmine.createSpy('onTouched');
    component.registerOnTouched(fn);
    component.selectOption(20);
    expect(fn).toHaveBeenCalled();
  });

  it('should close dropdown when clicking outside', () => {
    component.dropdownOpen = true;
    fixture.detectChanges();
    document.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.dropdownOpen).toBeFalse();
  });
});