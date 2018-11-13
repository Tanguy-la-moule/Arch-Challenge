import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  login_email: string;
  login_password: string;
  snackbarText: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(email, password){
    this.authService.login(email, password).subscribe(res => {
      if (localStorage) {
        localStorage.setItem('TOKEN', res.token);
      }
      console.log(localStorage.getItem('TOKEN'));
      this.router.navigate(['project'])
    }, (err) => {
      this.showSnackBar('Problem with identification');
      this.login_password = '';
    })
  }

  showSnackBar(message) {
    this.snackbarText = message;
    const x = document.getElementById('snackbar');
    x.className = 'show';
    setTimeout(function() {x.className = x.className.replace('show', ''); }, 3000);
  }
}
