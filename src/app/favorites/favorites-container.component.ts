import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromRoot from '../store/reducers';
import * as favActions from '../store/actions/favorites.actions';
import {Observable} from 'rxjs';
import {WeatherLocationFavorite} from '../shared/models/favorities.models';
import {iconsGeneratorFunc} from '../shared/services/util.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-favorites-container',
  templateUrl: './favorites-container.component.html',
  styleUrls: ['./favorites-container.component.scss']
})
export class FavoritesContainerComponent implements OnInit {
  public favoritesArray$: Observable<WeatherLocationFavorite[]>;
  public iconsGeneratorFunc = iconsGeneratorFunc;

  constructor(private store: Store<fromRoot.State>, private router: Router) {
  }

  ngOnInit() {
    this.favoritesArray$ = this.store.select(fromRoot.getFavoritesArray);
  }

  public favoriteClicked(fav: WeatherLocationFavorite) {
    this.store.dispatch(favActions.setSelectedFavorite(
      {data: fav}));
    this.router.navigateByUrl('weather/weather').then();
  }

}
