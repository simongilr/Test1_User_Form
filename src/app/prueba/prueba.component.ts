import { Component, OnInit } from '@angular/core';
import { UserArr, MockService } from '../services/mock.service';


@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  constructor( public ms: MockService ){ }

  ngOnInit(){
    this.ms.getUser().subscribe(res => { this.users = [...res]; })
  }

  users: UserArr[] = [];
  registerAct:boolean= false;
  recordAct:boolean= false;

  register(){
    this.registerAct = true;
    this.recordAct = false;
  }

  record(){
    this.recordAct = true;
    this.registerAct = false;
  }

  body = { name : '',lastName: '',email: '',phone: '',city: '',country: ''}

  addNewUser(){
    this.ms.addNewUser(this.body).subscribe(res => {
      this.users.push(res)
    })
    this.body = { name : '',lastName: '',email: '',phone: '',city: '',country: ''}
  }

}
