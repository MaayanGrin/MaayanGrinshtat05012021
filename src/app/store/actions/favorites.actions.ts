import {createAction, props} from '@ngrx/store';
import {WeatherLocationFavorite} from '../../shared/models/favorities.models';

export const addToFavorites = createAction(
  '[Favorites] add to Favorites',
  props<{ data: WeatherLocationFavorite }>()
);

export const removeFromFavorites = createAction(
  '[Favorites] Remove From to Favorites',
  props<{ data: WeatherLocationFavorite }>()
);

export const setSelectedFavorite = createAction(
  '[Favorites] Set Selected Favorite',
  props<{ data: WeatherLocationFavorite }>()
);
