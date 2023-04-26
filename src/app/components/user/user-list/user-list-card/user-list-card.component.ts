import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-list-card',
  templateUrl: './user-list-card.component.html',
  styleUrls: ['./user-list-card.component.css']
})
export class UserListCardComponent implements OnInit {

  @Input() user!: User

  constructor() { }

  ngOnInit(): void {
  }

}
