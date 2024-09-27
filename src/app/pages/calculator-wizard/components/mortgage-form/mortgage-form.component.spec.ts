import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MortgageFormComponent } from './mortgage-form.component';
import { CardComponent } from '../../../../shared/layout/card/card.component';
import { MatIcon } from '@angular/material/icon';
import { SelectDropdownComponent } from '../../../../shared/inputs/select-dropdown/select-dropdown.component';
import { MatTooltip } from '@angular/material/tooltip';

describe('MortgageFormComponent', () => {
  let component: MortgageFormComponent;
  let fixture: ComponentFixture<MortgageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        CardComponent,
        MatIcon,
        SelectDropdownComponent,
        MatTooltip,
        MortgageFormComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with default values', () => {
    const form = component.form;
    expect(form.controls['borrowingAmount'].value).toBeNull();
    expect(form.controls['purchasePrice'].value).toBeNull();
    expect(form.controls['prefferedRepaymentPeriod'].value).toBe(15);
    expect(form.controls['grossHouseholdIncome'].value).toBeNull();
    expect(form.controls['interestRate'].value).toBeNull();
  });

  it('should be invalid when required fields are empty', () => {
    const form = component.form;
    expect(form.valid).toBeFalsy();
  });

  it('should emit valueChange event with valid data', () => {
    spyOn(component.valueChange, 'emit');

    component.form.controls['borrowingAmount'].setValue(100000);
    component.form.controls['purchasePrice'].setValue(120000);
    component.form.controls['prefferedRepaymentPeriod'].setValue(30);
    component.form.controls['grossHouseholdIncome'].setValue(50000);
    component.form.controls['interestRate'].setValue(3.5);

    fixture.detectChanges();

    expect(component.form.valid).toBeTruthy();
    expect(component.valueChange.emit).toHaveBeenCalledWith({
      borrowingAmount: 100000,
      purchasePrice: 120000,
      prefferedRepaymentPeriod: 30,
      grossHouseholdIncome: 50000,
      interestRate: 3.5,
    });
  });
});
