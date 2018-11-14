import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http, private router: Router) { }

  login(email, password) {
    const payload = {
        'username': email,
        'password': password,
    };
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(environment.API_URL + 'auth/api-jwt-auth/', payload, {headers: headers})
      .pipe(map(res => {
        return res.json();
      }));
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
