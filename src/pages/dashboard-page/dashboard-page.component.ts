import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from './../../services/weather-service.service';
import { JokeService } from './../../services/joke.service';
import { NameService } from './../../services/name.service';
import { BreweryService } from './../../services/brewery.service';
import { SpacexService } from '../../services/spacex.service';
import 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  providers: [WeatherService, JokeService, NameService, BreweryService, SpacexService]
})
export class DashboardPageComponent implements OnInit {

  public weatherDetail: Array<any>;
  public jokeDetail: Array<any>;
  public nameDetail: Array<any>;
  public breweryDetail: Array<any>;
  public spacexDetail: Array<any>;

  constructor(protected router: Router,
    protected weatherService: WeatherService,
    protected jokeService: JokeService,
    protected nameService: NameService,
    protected breweryService: BreweryService,
    protected spacexService: SpacexService) {
   }

  ngOnInit() {
    if (!sessionStorage.getItem('AuthToken')) {
      this.router.navigate(['/']);
    }

    this.weatherService.getWeekForecast()
    .subscribe(
      weather => {
        this.weatherDetail = weather.consolidated_weather;
    });

    this.jokeService.getJoke()
    .subscribe(
      joke => {
        this.jokeDetail = joke;
    });

    this.nameService.getName()
    .subscribe(
      name => {
        this.nameDetail = name;
    });

    this.breweryService.getBrewery()
    .subscribe(
      brewery => {
        this.breweryDetail = brewery;
    });

    this.spacexService.getSpacex()
    .subscribe(
      spacex => {
        this.spacexDetail = spacex;
    });

  }
}

