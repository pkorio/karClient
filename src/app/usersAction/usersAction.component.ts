import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './usersAction.component.html',
  styleUrls: ['./usersAction.component.css']
})
export class UsersActionComponent {
  constructor(private router: Router){}
  usersAction = [
    {
      id: 1
    },
    {
      id: 15
    },
    {
      id: 3
    }
  ];

  loadUserAction() {
    this.router.navigate(['/userAction', this.usersAction['id'] ]);
  }
}
