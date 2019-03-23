import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BreweryService {
  private url = 'https://api.openbrewerydb.org/breweries?by_state=washington';
  private conversionUrl = 'https://cors-anywhere.herokuapp.com/';

  constructor(private http: Http) {
   }

  getBrewery(): Observable<any> {
    return this.http.get(this.conversionUrl + this.url).pipe(
      map(response => {
        return response.json();
      })
    );
  }
}
