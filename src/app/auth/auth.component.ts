import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  login_email: string;
  login_password: string;

  constructor() { }

  ngOnInit() {
  }

  login(email, password) {
    console.log(email);
    console.log(password);
  }
}
