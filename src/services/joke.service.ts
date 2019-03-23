import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JokeService {
  private url = 'https://official-joke-api.appspot.com/random_ten';
  private conversionUrl = 'https://cors-anywhere.herokuapp.com/';

  constructor(private http: Http) {
   }

  getJoke(): Observable<any> {
    return this.http.get(this.conversionUrl + this.url).pipe(
      map(response => {
        return response.json();
      })
    );
  }
}
