import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {WeatherLocationFavorite} from '../models/favorities.models';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private FavoritesTrack$: BehaviorSubject<WeatherLocationFavorite[]> = new BehaviorSubject<WeatherLocationFavorite[]>([]);

  constructor() {
  }

  public get FavoritesTrack() {
    return this.FavoritesTrack$.getValue();
  }

  public setFavoritesTrack(value: WeatherLocationFavorite[]) {
    this.FavoritesTrack$.next(value);
  }

}
