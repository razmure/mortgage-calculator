import { Component, computed, input } from '@angular/core';
import { CardComponent } from '../../../../shared/layout/card/card.component';
import { MatIcon } from '@angular/material/icon';
import { CurrencyPipe, DecimalPipe, NgClass } from '@angular/common';

@Component({
  selector: 'mortgage-calculation',
  standalone: true,
  imports: [DecimalPipe, CardComponent, MatIcon, CurrencyPipe, NgClass],
  templateUrl: './mortgage-calculation.component.html',
  styleUrl: './mortgage-calculation.component.scss',
})
export class MortgageCalculationComponent {
  public monthlyPayment = input<number>();
  public term = input<number>();
  public purchasePrice = input<number>();
  public grossHouseholdIncome = input<number>();
  public borrowingAmount = input<number>();
  public showPlaceholders = input<boolean>(true);

  public debtToIncome = computed<number>(() => {
    const borrowingAmount = this.borrowingAmount();
    const grossHouseholdIncome = this.grossHouseholdIncome();
    if (borrowingAmount && grossHouseholdIncome) {
      return borrowingAmount / grossHouseholdIncome;
    }
    return 0;
  });

  public loanToValue = computed<number>(() => {
    const borrowingAmount = this.borrowingAmount();
    const purchasePrice = this.purchasePrice();
    if (borrowingAmount && purchasePrice) {
      return (borrowingAmount / purchasePrice) * 100;
    }
    return 0;
  });
}
