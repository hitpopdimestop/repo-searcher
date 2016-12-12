import { Component, Input } from '@angular/core';

@Component({
  selector: 'rs-error',
  templateUrl: './error.component.html'
})
export class ErrorComponent {

  @Input() error;

  onClose() {
    this.error.message = null;
  }

}
