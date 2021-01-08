import {Injectable} from '@angular/core';
import {WeatherApiService} from './weather-api.service';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {
  IACCUWeatherAutocompleteResponse,
  IGet5DaysOfForecastResponse,
  IGetCurrentConditionsResponse
} from '../models/weather-response.models';
import {FiveDaysOfForecastViewModel, IDailyForecastViewModel} from '../models/weather-view.models';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private weatherApiService: WeatherApiService) {
  }

  public getAutocompleteResults(query: string): Observable<IACCUWeatherAutocompleteResponse[]> {
    return this.weatherApiService.getAutocompleteResults(query).pipe(map ((res) => res.data));
  }

  public getCurrentSelectedPlaceForecast(locationKey: string): Observable<IGetCurrentConditionsResponse> {
    return this.weatherApiService.getCurrentConditions(locationKey).pipe(map ((res) => res.data[0]));
  }

  public get5DaysOfDailyForecasts(locationKey: string): Observable<IDailyForecastViewModel[]> {
    return this.weatherApiService.get5DaysOfDailyForecasts(locationKey).pipe(
      (map((res) => new FiveDaysOfForecastViewModel(res.data).forecasts)));
  }
}
