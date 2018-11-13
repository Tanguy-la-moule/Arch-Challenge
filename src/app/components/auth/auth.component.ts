import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  login_email: string;
  login_password: string;
  snackbarText: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(email, password){
    this.authService.login(email, password).subscribe(res => {
      if (localStorage) {
        localStorage.setItem('TOKEN', res.token);
      }
      console.log(localStorage.getItem('TOKEN'));
    }, (err) => {
      this.showSnackBar('Problem with identification');
    })
  }

  showSnackBar(message) {
    this.snackbarText = message;
    const x = document.getElementById('snackbar');
    x.className = 'show';
    setTimeout(function() {x.className = x.className.replace('show', ''); }, 3000);
  }
}
