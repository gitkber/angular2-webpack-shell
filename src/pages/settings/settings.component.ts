import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'settings',
  templateUrl: 'settings.component.html',
  styleUrls: [ 'settings.component.css' ]
})
export class Settings {
  constructor(private router: Router) {
  }

  private go() {
    this.router.navigate([ '/dashboard' ]);
  }
}
