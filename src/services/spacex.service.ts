import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  private url = 'https://api.spacexdata.com/v3/launches/';
  private conversionUrl = 'https://cors-anywhere.herokuapp.com/';

  constructor(private http: Http) {
   }

  getSpacex(): Observable<any> {
    return this.http.get(this.conversionUrl + this.url).pipe(
      map(response => {
        return response.json();
      })
    );
  }
}
