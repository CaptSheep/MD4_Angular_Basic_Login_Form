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
    console.log(this.loginForm.value)
  }

  get email() {
    return this.loginForm.get('email');
  }
  
  get password(){
    return this.loginForm.get('password');
  }
}
