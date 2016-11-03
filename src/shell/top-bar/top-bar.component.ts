import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'top-bar',
  templateUrl: 'top-bar.component.html',
  styleUrls: [ 'top-bar.component.css' ]
})
export class TopBar {
  @Output() switchMenuClick: EventEmitter<any> = new EventEmitter();

  private switchMenuClicked() {
    this.switchMenuClick.emit();
  }
}
