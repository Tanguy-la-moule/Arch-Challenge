import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Project } from '../../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  get_projects(): Observable<Array<Project>> {
    return new Observable( (observer) => {
      this.http.get(environment.API_URL + 'project/')
        .subscribe((data) => {
          const projects: Array<Project> = data['results'].map( project => {
            return {
              id: project.id,
              name: project.name,
              creator: project.created_by,
              organisation: project.org,
            };
          });
          observer.next(projects);
        });
      }
    );
  }
}
