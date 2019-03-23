import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private url = 'https://www.metaweather.com/api/location/862592/';
  private conversionUrl = 'https://cors-anywhere.herokuapp.com/';

  constructor(private http: Http) {
   }

  getWeekForecast(): Observable<any> {
    return this.http.get(this.conversionUrl + this.url).pipe(
      map(response => {
        return response.json();
      })
    );
  }
}
