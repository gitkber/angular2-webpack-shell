import { Component, Input } from '@angular/core';

@Component({
  selector: 'text-button',
  templateUrl: 'text-button.component.html',
  styleUrls: [ 'text-button.component.css' ]
})
export class TextButton {
  @Input() icon: string;
  @Input() label: string;
}
