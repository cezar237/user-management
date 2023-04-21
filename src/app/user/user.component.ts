import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserserviceService } from '../services/userservice.service';
import { Usermodel } from '../modeles/user.models';
import donner from 'C:/angular/user-management/src/app/composant/data/donner.json'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  evaluation!:FormGroup
  constructor(private US:UserserviceService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

/*
  ngOnInit(): void {
    this.evaluation = new FormGroup({
      id: new FormControl(''),
      noms: new FormControl(''),
       image:new FormControl(''),
       role:new FormControl(''),
       date_de_création:new FormControl(''),
       date_de_dernière_mis_à_jour:new FormControl(''),
       fortune:new FormControl(''),
       privileges=new FormGroup({
        lecture:new FormControl(''),
       modification: new FormControl(''),
       suppression: new FormControl(''),
       création: new FormControl('')
       })

      }

    })
    }*/
    //userJson:Usermodel[]=this.US.Us;
    userJs=[{
      "id": "tad",
      "noms": "tadjuifouo",
       "image":"src\assets\1.PNG",
       "role":"3",
       "date_de_création":"10/05/2023",
       "date_de_dernière_mis_à_jour":"10/05/2023",
       "fortune":"60000",
       "privilèges":{
        "lecture": "boolean",
      "modification": "boolean",
      "suppression": "boolean",
      "création": "boolean"

    }
    },
    {
      "id": "tad",
      "noms": "tadjuifouo",
       "image":"src\assets\3.PNG",
       "role":"3",
       "date_de_création":"10/05/2023",
       "date_de_dernière_mis_à_jour":"10/05/2023",
       "fortune":"60000",
       "privilèges":{
        "lecture": "boolean",
      "modification": "boolean",
      "suppression": "boolean",
      "création": "boolean"

    }
    },
    {
      "id": "tad",
      "noms": "tadjuifouo",
       "image":"src\assets\5.PNG",
       "role":"3",
       "date_de_création":"10/05/2023",
       "date_de_dernière_mis_à_jour":"10/05/2023",
       "fortune":"60000",
       "privilèges":{
        "lecture": "boolean",
      "modification": "boolean",
      "suppression": "boolean",
      "création": "boolean"

    }
    },
    {
      "id": "tad",
      "noms": "tadjuifouo",
       "image":"src\assets\11.PNG",
       "role":"3",
       "date_de_création":"10/05/2023",
       "date_de_dernière_mis_à_jour":"10/05/2023",
       "fortune":"60000",
       "privilèges":{
        "lecture": "boolean",
      "modification": "boolean",
      "suppression": "boolean",
      "création": "boolean"

    }
    }]


  }



