import { Component, Input } from '@angular/core';

@Component({
  selector: 'rs-readme',
  templateUrl: './readme.component.html',
  styles: []
})
export class ReadmeComponent {

  @Input() readme;

  onClose() {
    this.readme.content = null;
  }

}
