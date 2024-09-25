import { Component } from "@angular/core";
import { CardComponent } from "../../../../shared/layout/card/card.component";
import { MatIcon } from "@angular/material/icon";
import { CurrencyPipe } from "@angular/common";

@Component({
    selector: 'mortgage-calculation',
    standalone: true,
    imports: [CardComponent, MatIcon, CurrencyPipe],
    templateUrl: './mortgage-calculation.component.html',
    styleUrl: './mortgage-calculation.component.scss',
  })
  export class MortgageCalculationComponent {
    public monthlyPayment: number = 4555;
  }