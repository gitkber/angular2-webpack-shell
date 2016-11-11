import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user',
  templateUrl: 'user.component.html',
  styleUrls: [ 'user.component.css' ]
})
export class User {
  private user: any = {};

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      const key = params['key'];

      let user = firebase.database().ref('/users/' + key);

      user.once('value').then((data) => {
        this.user = data.val();
        console.log(data.val());
      });
    });
  }
}
