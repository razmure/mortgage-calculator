import { Injectable } from '@angular/core';
import { MortgageData } from '../models/mortgage-data';

@Injectable({
  providedIn: 'root',
})
export class MortgageService {
  public getMonthlyPayment(mortgageData: MortgageData): number {
    const monthlyInterestRate = mortgageData.interestRate / 100 / 12;

    if (monthlyInterestRate === 0) {
      return (
        mortgageData.borrowingAmount /
        (mortgageData.prefferedRepaymentPeriod * 12)
      );
    }

    const monthlyPayment =
      (mortgageData.borrowingAmount *
        monthlyInterestRate *
        Math.pow(
          1 + monthlyInterestRate,
          mortgageData.prefferedRepaymentPeriod * 12
        )) /
      (Math.pow(
        1 + monthlyInterestRate,
        mortgageData.prefferedRepaymentPeriod * 12
      ) -
        1);
    return monthlyPayment;
  }
}
