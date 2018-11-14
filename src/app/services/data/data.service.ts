import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: Http) { }

  get_all_streams() {
    const token = localStorage.getItem('TOKEN');
    const headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'JWT ' + token});
    return this.http.get(environment.API_URL + 'stream/', {headers: headers})
      .pipe(map(res => {
        return res.json();
      }));
  };

  get_projects_stream(id: string) {
    const token = localStorage.getItem('TOKEN');
    const headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'JWT ' + token});
    return this.http.get(environment.API_URL + 'stream/?project=' + id, {headers: headers})
      .pipe(map(res => {
        return res.json();
      }));
  };

  get_stream_data(id: string) {
    const token = localStorage.getItem('TOKEN');
    const headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'JWT ' + token});
    return this.http.get(environment.API_URL + 'stream/' + id + '/data/', {headers: headers})
      .pipe(map(res => {
        return res.json();
      }));
  };
}
