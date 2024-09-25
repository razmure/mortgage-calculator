import { Component } from '@angular/core';
import { MortgageCalculationComponent } from './components/mortgage-calculation/mortgage-calculation.component';
import { MortgageFormComponent } from './components/mortgage-form/mortgage-form.component';
import { StepperComponent } from './components/stepper/stepper.component';

@Component({
  standalone: true,
  imports: [MortgageCalculationComponent, MortgageFormComponent, StepperComponent],
  templateUrl: './calculator-wizard.component.html',
  styleUrl: './calculator-wizard.component.scss',
})
export class CalculatorWizardComponent {}
