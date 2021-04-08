import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-data',
  templateUrl: './emp-data.component.html',
  styleUrls: ['./emp-data.component.css']
})
export class EmpDataComponent implements OnInit {

  Property: any = {
    "id": 1,
    "name": "test1",
    "age": "11",
    "gender": "male",
    "email": "test1@gmail.com",
    "phoneNo": "9191919191"
  }

  constructor() { }

  ngOnInit() {
  }

}
