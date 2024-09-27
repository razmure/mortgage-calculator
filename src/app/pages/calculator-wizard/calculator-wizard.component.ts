import { Component } from '@angular/core';
import { MortgageCalculationComponent } from './components/mortgage-calculation/mortgage-calculation.component';
import { MortgageFormComponent } from './components/mortgage-form/mortgage-form.component';
import { StepperComponent } from '../../shared/layout/stepper/stepper/stepper.component';
import { MortgageData } from '../../core/models/mortgage-data';
import { MortgageService } from '../../core/services/mortgage.service';

@Component({
  standalone: true,
  imports: [
    MortgageCalculationComponent,
    MortgageFormComponent,
    StepperComponent,
  ],
  templateUrl: './calculator-wizard.component.html',
  styleUrl: './calculator-wizard.component.scss',
})
export class CalculatorWizardComponent {
  constructor(private mortgageService: MortgageService) {}

  public showPlaceholders = true;
  public monthlyPayment?: number;
  public data?: MortgageData | null;

  public calculateMortgage(data?: MortgageData): void {
    this.showPlaceholders = !data;
    if (!data) {
      this.data = null;
      return;
    }
    this.data = data;
    this.monthlyPayment = this.mortgageService.getMonthlyPayment(data);
  }
}
