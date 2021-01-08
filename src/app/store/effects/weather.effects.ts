import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {HttpClient} from '@angular/common/http';
import {catchError, filter, map, switchMap, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import * as weatherAction from '../actions/weather.actions';
import {WeatherService} from '../../shared/services/weather.service';
import {
  ACCUWeatherAutocompleteResultsViewModel,
  CurrentConditionsViewModel,
  FiveDaysOfForecastViewModel, IDailyForecastViewModel
} from '../../shared/models/weather-view.models';
import {
  IACCUWeatherAutocompleteResponse,
  IGet5DaysOfForecastResponse,
  IGetCurrentConditionsResponse
} from '../../shared/models/weather-response.models';

@Injectable()
export class WeatherEffects {

  @Effect()
  getWeatherAutocomplete$: Observable<Action> = this.actions$.pipe(
    ofType(weatherAction.getWeatherAutocomplete),
    filter(action => typeof action.data === 'string' && !!action.data),
    switchMap((action) => this.weatherApiService.getAutocompleteResults(action.data)),
    map((data: IACCUWeatherAutocompleteResponse[]) => {
      return weatherAction.getWeatherAutocompleteSuccess({
        data: new ACCUWeatherAutocompleteResultsViewModel(data).autocompleteResults
      });
    }),
    catchError(
      (err) => of(weatherAction.getWeatherAutocompleteFailure({error: err}))),
  );

  @Effect()
  getWeatherAutocompleteSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(weatherAction.getWeatherAutocompleteSuccess),
    map((data) => weatherAction.setWeatherAutocomplete(data))
  );

  @Effect()
  setCurrentSelectedPlaceWeather$: Observable<Action> = this.actions$.pipe(
    ofType(weatherAction.getCurrentSelectedPlaceWeather),
    switchMap((action) => this.weatherApiService.getCurrentSelectedPlaceForecast(action.data)),
    map((data: IGetCurrentConditionsResponse) => {
      return weatherAction.getCurrentSelectedPlaceWeatherSuccess({
        data: new CurrentConditionsViewModel(data)
      });
    }),
    catchError((err) => of(weatherAction.getCurrentSelectedPlaceWeatherFailure({error: err})))
  );

  @Effect()
  getCurrentSelectedPlaceWeatherSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(weatherAction.getCurrentSelectedPlaceWeatherSuccess),
    map((data) => weatherAction.setCurrentSelectedPlaceWeather(data))
  );

  @Effect()
  getFiveDailyWeatherForecasts$: Observable<Action> = this.actions$.pipe(
    ofType(weatherAction.getFiveDailyWeatherForecasts),
    switchMap((action) => this.weatherApiService.get5DaysOfDailyForecasts(action.data)),
    map((data: IDailyForecastViewModel[]) => {
      return weatherAction.getFiveDailyWeatherForecastsSuccess({ data });
    }),
    catchError((err) => of(weatherAction.getFiveDailyWeatherForecastsFailure({error: err})))
  );

  @Effect()
  getFiveDailyWeatherForecastsSuccess$: Observable<Action> = this.actions$.pipe(
    ofType(weatherAction.getFiveDailyWeatherForecastsSuccess),
    map((data) => weatherAction.setFiveDailyWeatherForecasts(data))
  );

  constructor(private actions$: Actions,
              private http: HttpClient,
              private weatherApiService: WeatherService) {}
}
