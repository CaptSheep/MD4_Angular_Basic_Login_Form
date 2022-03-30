import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
logins : Login[] = [];
loginForm :FormGroup = new FormGroup ({
email : new FormControl,
password : new FormControl
});
  constructor() { }

  ngOnInit() {
  }
login(){
  if(this.loginForm.value.email === 'admin@gmail.com' && this.loginForm.value.password ==="123123"){
   alert ( "Dang nhap thanh cong")
  }
  else{
    alert ("Tai khoan hoac mat khau sai")
  }
}
}
