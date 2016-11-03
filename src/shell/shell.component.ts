import { Component } from '@angular/core';

@Component({
  selector: 'shell',
  templateUrl: 'shell.component.html',
  styleUrls: [ 'shell.component.css' ]
})
export class Shell {
  private isMenuVisible: boolean = false;

  private swithMenuVisibility() {
    this.isMenuVisible = !this.isMenuVisible;
    console.log('shell')
  }
}
