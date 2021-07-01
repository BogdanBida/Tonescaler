import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appMouseWheel]',
})
export class MouseWheelDirective {
  @Output() public wheelUp = new EventEmitter<WheelEvent>();

  @Output() public wheelDown = new EventEmitter<WheelEvent>();

  @HostListener('wheel', ['$event'])
  public wheel(event: WheelEvent): void {
    event.deltaY > 0 ? this.wheelUp.emit(event) : this.wheelDown.emit(event);
  }
}
