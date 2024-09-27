import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PositiveValueDirective } from './positive-value.directive';

@Component({
  template: `<input type="text" positive-value />`,
})
class TestComponent {}

describe('PositiveValueDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let inputElement: HTMLInputElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [PositiveValueDirective],
    });

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    inputElement = fixture.nativeElement.querySelector('input');
  });

  it('should prevent default action for "-" key', () => {
    const event = new KeyboardEvent('keydown', { key: '-' });
    spyOn(event, 'preventDefault');
    inputElement.dispatchEvent(event);
    expect(event.preventDefault).toHaveBeenCalled();
  });

  it('should not prevent default action for other keys', () => {
    const event = new KeyboardEvent('keydown', { key: 'a' });
    spyOn(event, 'preventDefault');
    inputElement.dispatchEvent(event);
    expect(event.preventDefault).not.toHaveBeenCalled();
  });
});
