import { Component,EventEmitter,Input,OnInit, Output } from '@angular/core';
import { User } from 'src/app/class/user.models';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() users!:User;
  @Output() type=new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }

}
