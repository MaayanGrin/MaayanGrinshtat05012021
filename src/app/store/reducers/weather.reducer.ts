import {Action, createReducer, on} from '@ngrx/store';
import {
  ACCUWeatherAutocompleteViewModel,
  CurrentConditionsViewModel,
  IDailyForecastViewModel,
} from '../../shared/models/weather-view.models';
import * as weatherAction from '../actions/weather.actions';

export const weatherFeatureKey = 'weather';

export interface State {
  autocompleteResults: ACCUWeatherAutocompleteViewModel[];
  autocompleteSelectedValue: ACCUWeatherAutocompleteViewModel;
  currentSelectedData: CurrentConditionsViewModel;
  fiveDaysForecast: IDailyForecastViewModel[];
  isCurrentCityExistInFavoriteList: boolean;
}

export const initialState: State = {
  autocompleteResults: [],
  autocompleteSelectedValue: null,
  currentSelectedData: null,
  fiveDaysForecast: null,
  isCurrentCityExistInFavoriteList: false
};

const weatherReducer = createReducer(
  initialState,
  on(weatherAction.setWeatherAutocomplete,
    (state, {data}) => ({...state, autocompleteResults: data})
  ),
  on(weatherAction.setCurrentSelectedPlaceWeather,
    (state, {data}) => ({...state, currentSelectedData: data})
  ),
  on(weatherAction.setFiveDailyWeatherForecasts,
    (state, {data}) => ({...state, fiveDaysForecast: data})
  ),
  on(weatherAction.setAutocompleteSelectedValue,
    (state, {data}) => ({...state, autocompleteSelectedValue: data}),
  ),
  on(weatherAction.setCurrentCityExistInFavoriteList,
    (state, {data}) => ({...state, isCurrentCityExistInFavoriteList: data})
  )
);

export function reducer(state = initialState, action: Action) {
  return weatherReducer(state, action);
}

export const getAutocompleteSelectedValue = (state: State) => state.autocompleteSelectedValue;
export const getAutocompleteResults = (state: State) => state.autocompleteResults;
export const getCurrentSelectedData = (state: State) => state.currentSelectedData;
export const getFiveDaysForecast = (state: State) => state.fiveDaysForecast;
export const getIsCurrentCityExistInFavoriteList = (state: State) => state.isCurrentCityExistInFavoriteList;
