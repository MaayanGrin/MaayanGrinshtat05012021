import {Action, createReducer, on} from '@ngrx/store';
import * as favActions from '../actions/favorites.actions';
import {WeatherLocationFavorite} from '../../shared/models/favorities.models';

export const favoritesFeatureKey = 'favorites';

export interface State {
  favoritesArray: WeatherLocationFavorite[];
  selectedFavorite: WeatherLocationFavorite;
}

export const initialState: State = {
  favoritesArray: [],
  selectedFavorite: null
};

const favoritesReducer = createReducer(
  initialState,
  on(favActions.removeFromFavorites,
    (state, {data}) => ({...state, favoritesArray: [...state.favoritesArray.filter(fav => fav.key !== data.key)]})
  ),
  on(favActions.addToFavorites,
    (state, {data}) => ({...state, favoritesArray: [...state.favoritesArray, data]})
  ),
  on(favActions.setSelectedFavorite,
    (state, {data}) => ({...state, selectedFavorite: data}))
);

export function reducer(state = initialState, action: Action) {
  return favoritesReducer(state, action);
}

export const getFavoritesArray = (state: State) => state.favoritesArray;
export const getSelectedFavorite = (state: State) => state.selectedFavorite;
