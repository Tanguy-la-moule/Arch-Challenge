import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: Http) { }

  get_projects() {
    const token = localStorage.getItem('TOKEN');
    const headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'JWT ' + token});
    return this.http.get(environment.API_URL + 'project/', {headers: headers})
      .pipe(map(res => {
        return res.json();
      }));
  };

  get_projects_details(id: string) {
    const token = localStorage.getItem('TOKEN');
    console.log(id);
    const headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'JWT ' + token});
    return this.http.get(environment.API_URL + 'project/' + id + '/', {headers: headers})
      .pipe(map(res => {
        return res.json();
      }));
  };
}
