import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/class/user.models';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
 @Input() users_list!:User[];
  constructor() { }

  ngOnInit(): void {
  }

}
