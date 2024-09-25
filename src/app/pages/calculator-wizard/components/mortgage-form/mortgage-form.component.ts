import { Component } from "@angular/core";
import { CardComponent } from "../../../../shared/layout/card/card.component";
import { MatIcon } from "@angular/material/icon";

@Component({
    selector: 'mortgage-form',
    standalone: true,
    imports: [CardComponent, MatIcon],
    templateUrl: './mortgage-form.component.html',
    styleUrl: './mortgage-form.component.scss',
  })
  export class MortgageFormComponent {}