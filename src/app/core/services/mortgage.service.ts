import { Injectable } from '@angular/core';
import { MortgageData } from '../models/mortgage-data';
import { MortgageCalculations } from '../models/mortgage-calculations';

@Injectable({
  providedIn: 'root',
})
export class MortgageService {
  public getMonthlyPayment(
    mortgageData: MortgageData
  ): number {
    const monthlyInterestRate = (mortgageData.interestRate / 100) / 12;
    const monthlyPayment =
      (mortgageData.borrowingAmount *
      monthlyInterestRate *
      Math.pow(
        1 + monthlyInterestRate,
        mortgageData.prefferedRepaymentPeriod * 12
      ))/(Math.pow(
        1 + monthlyInterestRate,
        mortgageData.prefferedRepaymentPeriod * 12
      )-1);
    return monthlyPayment;
  }
}
