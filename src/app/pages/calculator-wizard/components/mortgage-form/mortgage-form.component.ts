import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { CardComponent } from '../../../../shared/layout/card/card.component';
import { MatIcon } from '@angular/material/icon';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { MortgageData } from '../../../../core/models/mortgage-data';
import { NgClass } from '@angular/common';
import { SelectDropdownComponent } from '../../../../shared/inputs/select-dropdown/select-dropdown.component';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'mortgage-form',
  standalone: true,
  imports: [
    CardComponent,
    MatIcon,
    ReactiveFormsModule,
    NgClass,
    SelectDropdownComponent,
    MatTooltip
  ],
  templateUrl: './mortgage-form.component.html',
  styleUrl: './mortgage-form.component.scss',
})
export class MortgageFormComponent implements OnInit, OnDestroy {
  @Output()
  public valueChange = new EventEmitter<MortgageData | undefined>();

  private unsubscribe$ = new Subject();

  public form = new FormGroup({
    borrowingAmount: new FormControl<number | null>(null, [
      Validators.required,
    ]),
    purchasePrice: new FormControl<number | null>(null, [Validators.required]),
    prefferedRepaymentPeriod: new FormControl<number | null>(null, [
      Validators.required,
    ]),
    grossHouseholdIncome: new FormControl<number | null>(null, [
      Validators.required,
    ]),
    interestRate: new FormControl<number | null>(null, [Validators.required]),
  });

  public ngOnInit(): void {
    this.form.controls.prefferedRepaymentPeriod.setValue(15);
    this.form.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((value) => {
        this.form.markAsDirty();
        this.valueChange.emit(
          this.form.invalid ? undefined : (value as MortgageData)
        );
      });
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next(null);
    this.unsubscribe$.complete();
  }
}
