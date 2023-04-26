import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/class/user.models';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
user!:User[];
  constructor() { }

  ngOnInit(): void {
    this.user=[{"id":"1",
    "nom":"tadjuifouo",
    "image":"chemin",
    "role":"admin",
    "fortune":500000000,
    "dateCreation":"04/05/2023",
    "dateDerniereMisJour":"04/05/2023",
    "privileges":{
      "lecture": true,
      "modification": true,
      "suppression":true,
      "creation":true
    }
  },
  {"id":"2",
  "nom":"tadjuifouo",
  "image":"chemin",
  "role":"admin",
  "fortune":500000000,
  "dateCreation":"04/05/2023",
  "dateDerniereMisJour":"04/05/2023",
  "privileges":{
    "lecture": true,
    "modification": true,
    "suppression":true,
    "creation":true
  }
},
{"id":"3",
"nom":"adelrich",
"image":"chemin",
"role":"admin",
"fortune":10000000,
"dateCreation":"04/05/2023",
"dateDerniereMisJour":"04/05/2023",
"privileges":{
  "lecture": true,
  "modification": true,
  "suppression":true,
  "creation":true
}
},
{"id":"4",
"nom":"sezono",
"image":"chemin",
"role":"admin",
"fortune":550000,
"dateCreation":"04/05/2023",
"dateDerniereMisJour":"04/05/2023",
"privileges":{
  "lecture": true,
  "modification": true,
  "suppression":true,
  "creation":true
}
},
{"id":"5",
"nom":"cezar",
"image":"chemin",
"role":"admin",
"fortune":220000000,
"dateCreation":"04/05/2023",
"dateDerniereMisJour":"04/05/2023",
"privileges":{
  "lecture": true,
  "modification": false,
  "suppression":false,
  "creation":false
}
}];


}







}
