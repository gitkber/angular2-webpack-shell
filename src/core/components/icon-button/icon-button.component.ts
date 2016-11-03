import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-button',
  templateUrl: 'icon-button.component.html',
  styleUrls: [ 'icon-button.component.css' ]
})
export class IconButton {
  @Input() icon: string = 'fa-question-circle';
}
