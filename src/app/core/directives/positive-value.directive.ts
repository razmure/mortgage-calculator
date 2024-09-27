import { Directive, HostListener } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[positive-value]',
})
export class PositiveValueDirective {
  @HostListener('keydown', ['$event'])
  public onKeyDown(e: KeyboardEvent): void {
    if (e.key === '-') {
      e.preventDefault();
    }
  }
}
