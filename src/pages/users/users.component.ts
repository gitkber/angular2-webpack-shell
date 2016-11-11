import { Component } from '@angular/core';

@Component({
  selector: 'users',
  templateUrl: 'users.component.html',
  styleUrls: [ 'users.component.css' ]
})
export class Users {
  private users: any = [];

  constructor() {
    let users = firebase.database().ref('/users');
    
    users.once('value').then((data) => {
      const users = data.val();
      this.users = Object.keys(users).map((key: any) => {
        let user = users[key];
        user.key = key;
        return user;
      });
    });
  }
}
