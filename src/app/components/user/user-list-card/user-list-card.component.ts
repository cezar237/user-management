import { Component,EventEmitter,Input,OnInit, Output } from '@angular/core';
import { User } from 'src/app/class/user.models';

@Component({
  selector: 'app-user-list-card',
  templateUrl: './user-list-card.component.html',
  styleUrls: ['./user-list-card.component.css']
})
export class UserListCardComponent implements OnInit {
  @Input() users!:User;
  @Output() type=new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {


  }

}
