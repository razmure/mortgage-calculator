import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MortgageCalculationComponent } from './mortgage-calculation.component';
import { CurrencyPipe, DecimalPipe } from '@angular/common';

describe('MortgageCalculationComponent', () => {
  let component: MortgageCalculationComponent;
  let fixture: ComponentFixture<MortgageCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MortgageCalculationComponent],
      providers: [CurrencyPipe, DecimalPipe],
    }).compileComponents();

    fixture = TestBed.createComponent(MortgageCalculationComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate debt to income ratio correctly', () => {
    component.borrowingAmount = (() => 45000) as any;
    component.grossHouseholdIncome = (() => 100000) as any;
    expect(component.debtToIncome()).toBeCloseTo(0.45, 2);
  });

  it('should calculate loan to value ratio correctly', () => {
    component.borrowingAmount = (() => 80000) as any;
    component.purchasePrice = (() => 100000) as any;
    expect(component.loanToValue()).toBeCloseTo(80, 2);
  });

  it('should show placeholders when showPlaceholders is true', () => {
    component.showPlaceholders = (() => true) as any;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.monthly-payment-amount').textContent).toContain('€4,550');
  });

  it('should not show placeholders when showPlaceholders is false', () => {
    component.showPlaceholders = (() => false) as any;
    component.monthlyPayment = (() => 1234) as any;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.monthly-payment-amount').textContent).toContain('€1,234');
  });
});
