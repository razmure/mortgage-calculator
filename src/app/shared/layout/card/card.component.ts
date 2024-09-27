import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'card',
  standalone: true,
  imports: [MatCard, MatCardContent, NgClass],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  public noPadding = input<boolean>(false);
}
