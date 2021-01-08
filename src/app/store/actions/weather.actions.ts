import {createAction, props} from '@ngrx/store';
import {
  ACCUWeatherAutocompleteViewModel,
  CurrentConditionsViewModel,
  IDailyForecastViewModel
} from '../../shared/models/weather-view.models';

export const getWeatherAutocomplete = createAction(
  '[Weather] Get Weather Autocomplete Weather',
  props<{ data: string }>()
);

export const getWeatherAutocompleteSuccess = createAction(
  '[Weather] Get Weather Autocomplete Weather Success',
  props<{ data: ACCUWeatherAutocompleteViewModel[] }>()
);

export const setWeatherAutocomplete = createAction(
  '[Weather] set Weather Autocomplete',
  props<{ data: ACCUWeatherAutocompleteViewModel[] }>()
);

export const getWeatherAutocompleteFailure = createAction(
  '[Weather] Get Weather Autocomplete Weather Failure',
  props<{ error: any }>()
);

export const getCurrentSelectedPlaceWeather = createAction(
  '[Weather] Get Current Selected Place Weather',
  props<{ data: string }>()
);

export const getCurrentSelectedPlaceWeatherSuccess = createAction(
  '[Weather] Get Current Selected Place Weather Success',
  props<{ data: CurrentConditionsViewModel }>()
);

export const setCurrentSelectedPlaceWeather = createAction(
  '[Weather] set Current Selected Place Weather',
  props<{ data: CurrentConditionsViewModel }>()
);

export const getCurrentSelectedPlaceWeatherFailure = createAction(
  '[Weather] Get Current Selected Place Weather Failure',
  props<{ error: any }>()
);

export const getFiveDailyWeatherForecasts = createAction(
  '[Weather] Get Five Daily Weather Forecasts',
  props<{ data: string }>()
);

export const getFiveDailyWeatherForecastsSuccess = createAction(
  '[Weather] Get Five Daily Weather Forecasts Success',
  props<{ data: IDailyForecastViewModel[] }>()
);

export const setFiveDailyWeatherForecasts = createAction(
  '[Weather] set Five Daily Weather Forecasts',
  props<{ data: IDailyForecastViewModel[] }>()
);

export const getFiveDailyWeatherForecastsFailure = createAction(
  '[Weather] Get Five Daily Weather Forecasts Failure',
  props<{ error: any }>()
);

export const setAutocompleteSelectedValue = createAction(
  '[Weather] set Autocomplete Selected Value',
  props<{ data: ACCUWeatherAutocompleteViewModel }>()
);

export const setCurrentCityExistInFavoriteList = createAction(
  '[Weather] set Current City Exist In Favorites List',
  props<{ data: boolean }>()
);

