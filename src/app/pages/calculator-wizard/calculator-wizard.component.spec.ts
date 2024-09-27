import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CalculatorWizardComponent } from './calculator-wizard.component';
import { MortgageService } from '../../core/services/mortgage.service';
import { MortgageData } from '../../core/models/mortgage-data';

describe('CalculatorWizardComponent', () => {
  let component: CalculatorWizardComponent;
  let fixture: ComponentFixture<CalculatorWizardComponent>;
  let mortgageService: jasmine.SpyObj<MortgageService>;

  beforeEach(async () => {
    const mortgageServiceSpy = jasmine.createSpyObj('MortgageService', [
      'getMonthlyPayment',
    ]);

    await TestBed.configureTestingModule({
      imports: [CalculatorWizardComponent],
      providers: [{ provide: MortgageService, useValue: mortgageServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorWizardComponent);
    component = fixture.componentInstance;
    mortgageService = TestBed.inject(
      MortgageService
    ) as jasmine.SpyObj<MortgageService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial state', () => {
    expect(component.showPlaceholders).toBeTrue();
    expect(component.monthlyPayment).toBeUndefined();
    expect(component.data).toBeUndefined();
  });

  it('should calculate mortgage and update state', () => {
    const mockData: MortgageData = {
      prefferedRepaymentPeriod: 30,
      purchasePrice: 300000,
      grossHouseholdIncome: 100000,
      borrowingAmount: 250000,
      interestRate: 3.5,
    };
    const mockMonthlyPayment = 1500;

    mortgageService.getMonthlyPayment.and.returnValue(mockMonthlyPayment);

    component.calculateMortgage(mockData);

    expect(component.showPlaceholders).toBeFalse();
    expect(component.data).toEqual(mockData);
    expect(component.monthlyPayment).toBe(mockMonthlyPayment);
    expect(mortgageService.getMonthlyPayment).toHaveBeenCalledWith(mockData);
  });

  it('should handle null data in calculateMortgage', () => {
    component.calculateMortgage(undefined);

    expect(component.showPlaceholders).toBeTrue();
    expect(component.data).toBeNull();
    expect(component.monthlyPayment).toBeUndefined();
  });
});
