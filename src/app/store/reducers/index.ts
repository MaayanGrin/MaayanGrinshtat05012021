import {ActionReducerMap, createFeatureSelector, createSelector, MetaReducer} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import * as fromWeather from './weather.reducer';
import * as fromFavorites from './favorites.reducer';

export interface State {
  [fromFavorites.favoritesFeatureKey]: fromFavorites.State;
  [fromWeather.weatherFeatureKey]: fromWeather.State;
}

export const reducers: ActionReducerMap<State> = {
  favorites: fromFavorites.reducer,
  weather: fromWeather.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectWeatherState = createFeatureSelector<fromWeather.State>(fromWeather.weatherFeatureKey);
export const getAutocompleteResults = createSelector(selectWeatherState, fromWeather.getAutocompleteResults);
export const getCurrentSelectedData = createSelector(selectWeatherState, fromWeather.getCurrentSelectedData);
export const getFiveDaysForecast = createSelector(selectWeatherState, fromWeather.getFiveDaysForecast);
export const getAutocompleteSelected = createSelector(selectWeatherState, fromWeather.getAutocompleteSelectedValue);
export const getIsCurrentCityExistInFavoriteList = createSelector(selectWeatherState, fromWeather.getIsCurrentCityExistInFavoriteList);

export const selectFavoritesState = createFeatureSelector<fromFavorites.State>(fromFavorites.favoritesFeatureKey);
export const getSelectedFavorite = createSelector(selectFavoritesState, fromFavorites.getSelectedFavorite);
export const getFavoritesArray = createSelector(selectFavoritesState, fromFavorites.getFavoritesArray);
