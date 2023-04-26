import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  page = 4

  display: 'list'|'card'='list'

  users: User []=[
    {
      id: "sfq54+hfjhkhg+lgh4il45",
      nom: "Adrien",
      image: "https://i.pravatar.cc/150?img=2",
      role: 'admin',
      date_creation: new Date(),
      derniere_maj: new Date(),
      fortune: 250000,
      privileges: {
        creation: true,
        lecture: true,
        modification: true,
        suppression: true
      }
    },
    {
      id: "sfq54+hfjhkhg+lgh4il125",
      nom: "Samuel",
      image: "https://i.pravatar.cc/150?img=7",
      role: 'secretaire',
      date_creation: new Date(),
      derniere_maj: new Date(),
      fortune: 2500000,
      privileges: {
        creation: false,
        lecture: true,
        modification: true,
        suppression: false
      }
    },
    {
      id: "sfq54+hfjhkhg+51654",
      nom: "Daniel",
      image: "https://i.pravatar.cc/150?img=3",
      role: 'client',
      date_creation: new Date(),
      derniere_maj: new Date(),
      fortune: 1250000,
      privileges: {
        creation: false,
        lecture: true,
        modification: false,
        suppression: false
      }
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
