import { Component, OnInit } from "@angular/core";
import {
  EmailValidator,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Login } from "../login";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  logins: Login[] = [];
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  login() {
    if(this.loginForm.value.email === "admin@gmail.com" && this.loginForm.value.password === "123123"){
      alert ("Dang nhap thanh cong");
    }
    else {
      alert ("Sai tai khoan hoac mat khau");
    }
  }

  get email() {
    return this.loginForm.get('email');
  }
  
  get password(){
    return this.loginForm.get('password');
  }
}
