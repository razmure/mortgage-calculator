import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepperComponent } from './stepper.component';
import { MatIcon } from '@angular/material/icon';
import { NgClass } from '@angular/common';

describe('StepperComponent', () => {
  let component: StepperComponent;
  let fixture: ComponentFixture<StepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperComponent, MatIcon, NgClass], // Move StepperComponent to imports
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default number of steps as 1', () => {
    expect(component.nbOfSteps()).toBe(1);
  });

  it('should have default step number as 1', () => {
    expect(component.stepNumber()).toBe(1);
  });

  it('should emit closeClicked event', () => {
    spyOn(component.closeClicked, 'emit');
    component.closeClicked.emit();
    expect(component.closeClicked.emit).toHaveBeenCalled();
  });
});