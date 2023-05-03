import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user.models';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  page!:number;
  users!: User[];
  

  constructor() { }

  ngOnInit(): void {
    this.users=[
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
      },
      {
        id: "sfq+hfjhkhg+lgh4il45",
        nom: "Noa",
        image: "https://i.pravatar.cc/150?img=1",
        role: 'admin',
        date_creation: new Date(),
        derniere_maj: new Date(),
        fortune: 2781000,
        privileges: {
          creation: true,
          lecture: true,
          modification: false,
          suppression: true
        }
      },
      {
        id: "sfq54+hfjhkhggh4il125",
        nom: "Anaba",
        image: "https://i.pravatar.cc/150?img=6",
        role: 'secretaire',
        date_creation: new Date(),
        derniere_maj: new Date(),
        fortune: 2745000,
        privileges: {
          creation: false,
          lecture: true,
          modification: true,
          suppression: true
        }
      }
    ];
  }

}
