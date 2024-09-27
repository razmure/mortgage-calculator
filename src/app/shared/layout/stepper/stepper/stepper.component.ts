import { NgClass } from '@angular/common';
import {
  Component,
  computed,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'stepper',
  standalone: true,
  imports: [MatIcon, NgClass],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss',
})
export class StepperComponent {
  public nbOfSteps = input<number>(1);
  public stepNumber = input<number>(1);

  @Output()
  public closeClicked = new EventEmitter<void>();

  public steps = computed<number[]>(() => {
    return Array.from({ length: this.nbOfSteps() }, (_, s) => s + 1);
  });
}
