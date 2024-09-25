import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCard, MatCardContent } from '@angular/material/card';
import { CardComponent } from './shared/layout/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
