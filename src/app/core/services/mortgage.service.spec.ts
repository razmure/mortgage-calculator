import { TestBed } from '@angular/core/testing';
import { MortgageService } from './mortgage.service';
import { MortgageData } from '../models/mortgage-data';

describe('MortgageService', () => {
  let service: MortgageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MortgageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate the correct monthly payment', () => {
    const mortgageData: MortgageData = {
      borrowingAmount: 200000,
      interestRate: 5,
      prefferedRepaymentPeriod: 30,
      purchasePrice: 250000,
      grossHouseholdIncome: 75000,
    };

    const monthlyPayment = service.getMonthlyPayment(mortgageData);
    expect(monthlyPayment).toBeCloseTo(1073.64, 2);
  });

  it('should return 0 for a borrowing amount of 0', () => {
    const mortgageData: MortgageData = {
      borrowingAmount: 0,
      interestRate: 5,
      prefferedRepaymentPeriod: 30,
      purchasePrice: 250000,
      grossHouseholdIncome: 75000,
    };

    const monthlyPayment = service.getMonthlyPayment(mortgageData);
    expect(monthlyPayment).toBe(0);
  });

  it('should handle zero interest rate', () => {
    const mortgageData: MortgageData = {
      borrowingAmount: 200000,
      interestRate: 0,
      prefferedRepaymentPeriod: 30,
      purchasePrice: 250000,
      grossHouseholdIncome: 75000,
    };

    const monthlyPayment = service.getMonthlyPayment(mortgageData);
    expect(monthlyPayment).toBeCloseTo(555.56, 2);
  });
});
