import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Http, Headers } from '@angular/http';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Stream } from '../../models/stream';
import { Data } from '../../models/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  get_stream_data(slug: string): Observable<Data> {
    return new Observable((observer) => {
      this.http.get(environment.API_URL + 'stream/' + slug + '/data/')
        .subscribe((result) => {
          console.log(result['results'])
          const data = new Data(slug);
          result['results'].forEach(point => {
            data.addDataPoint(point.int_value, point.timestamp)
          })
          observer.next(data);
        });
      }
    );
  }

  get_projects_stream(id: string): Observable<Array<Stream>> {
    return new Observable((observer) => {
      this.http.get(environment.API_URL + 'stream/?project=' + id)
        .subscribe((data) => {
          const streams: Array<Stream> = data['results'].map(stream => {
            return {
              id: stream.id,
              device: stream.device,
              slug: stream.slug,
              unit: stream.output_unit.unit_full,
              project: stream.project_id
            };
          });
          observer.next(streams);
        });
      }
    );
  }
}
