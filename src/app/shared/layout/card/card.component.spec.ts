import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { MatCardModule } from '@angular/material/card';
import { By } from '@angular/platform-browser';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule, CardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have noPadding as false by default', () => {
    expect(component.noPadding()).toBeFalse();
  });

  it('should apply m-3 class when noPadding is false', () => {
    component.noPadding = (() => false) as any;
    fixture.detectChanges();
    const cardContent = fixture.debugElement.query(By.css('mat-card-content'));
    expect(cardContent.classes['m-3']).toBeTrue();
  });

  it('should not apply m-3 class when noPadding is true', () => {
    component.noPadding = (() => true) as any;
    fixture.detectChanges();
    const cardContent = fixture.debugElement.query(By.css('mat-card-content'));
    expect(cardContent.classes['m-3']).toBeFalsy();
  });
});
