import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {debounceTime, filter, map, startWith, switchMap, take, tap} from 'rxjs/operators';

import {MatAutocompleteSelectedEvent} from '@angular/material';
import {ACCUWEATHER_API_DEFAULT_AUTOCOMPLETE_SEARCH} from '../shared/consts/weather.consts';
import {IACCUWeatherAutocompleteResponse} from '../shared/models/weather-response.models';
import {WeatherLocationFavorite} from '../shared/models/favorities.models';
import * as fromRoot from '../store/reducers';
import {Store} from '@ngrx/store';
import * as weatherActions from '../store/actions/weather.actions';
import * as favActions from '../store/actions/favorites.actions';

import {
  ACCUWeatherAutocompleteViewModel,
  CurrentConditionsViewModel,
  IDailyForecastViewModel
} from '../shared/models/weather-view.models';
import {iconsGeneratorFunc} from '../shared/services/util.service';


@Component({
  selector: 'app-weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.scss']
})
export class WeatherContainerComponent implements OnInit {

  public weatherSearchControl = new FormControl();
  public iconsGeneratorFunc = iconsGeneratorFunc;
  public filteredOptions$: Observable<ACCUWeatherAutocompleteViewModel[]>;
  public selectedLocationFiveDailyDetails$: Observable<IDailyForecastViewModel[]>;
  public currentWeatherData$: Observable<CurrentConditionsViewModel>;
  public selectedAutoCompleteOption$: Observable<ACCUWeatherAutocompleteViewModel>;

  public isCurrentCityExistInFavoriteList$: Observable<boolean>;
  private favorites$: Observable<WeatherLocationFavorite[]>;
  private allAutocompleteOptions$: Observable<ACCUWeatherAutocompleteViewModel[]>;
  private searchString = '';


  constructor(private store: Store<fromRoot.State>) {
  }

  ngOnInit() {
    this.store.select(fromRoot.getSelectedFavorite).pipe(take(1)).subscribe((data) => {
      const isFavorite = !!data;
      const defaultVal = ACCUWEATHER_API_DEFAULT_AUTOCOMPLETE_SEARCH;
      const key = isFavorite ? data.key : defaultVal.key;
      const localizedName = isFavorite ? data.name : defaultVal.localizedName;

      this.store.dispatch(weatherActions.setAutocompleteSelectedValue(
        {data: new ACCUWeatherAutocompleteViewModel({LocalizedName: localizedName, Key: key})}));
      this.store.dispatch(weatherActions.getCurrentSelectedPlaceWeather({data: key}));
      this.store.dispatch(weatherActions.getFiveDailyWeatherForecasts({data: key}));
      this.store.dispatch(favActions.setSelectedFavorite({data: null}));

      this.filteredOptions$ = this.store.select(fromRoot.getAutocompleteResults);
      this.selectedAutoCompleteOption$ = this.store.select(fromRoot.getAutocompleteSelected);
      this.favorites$ = this.store.select(fromRoot.getFavoritesArray);
      this.isCurrentCityExistInFavoriteList$ = this.store.select(fromRoot.getIsCurrentCityExistInFavoriteList);
      this.checkIfCurrentCityExistInFavoriteArray();

      this.setCurrentWeather();
      this.setDailyForecasts();
      this.setFilersSubscriptions();
    });
  }

  public displayAutoCompleteFn(option: IACCUWeatherAutocompleteResponse): string {
    return option ? option.LocalizedName : null;
  }

  public onAutocompleteSelection(selectionEvent: MatAutocompleteSelectedEvent) {
    const selectedValue: ACCUWeatherAutocompleteViewModel = selectionEvent.option.value;
    this.store.dispatch(weatherActions.setAutocompleteSelectedValue({data: selectedValue}));
    this.store.dispatch(weatherActions.getCurrentSelectedPlaceWeather({data: selectedValue.key}));
    this.store.dispatch(weatherActions.getFiveDailyWeatherForecasts({data: selectedValue.key}));
    this.checkIfCurrentCityExistInFavoriteArray();
  }

  public handleFavoriteEvent(currentSelectionData: CurrentConditionsViewModel) {
    this.favorites$.pipe(
      take(1),
      tap(((favData = []) => {
          this.selectedAutoCompleteOption$.pipe(take(1)).subscribe((autoData) => {
            const isFavExist = !!favData.find(fav => fav.key === autoData.key);
            this.store.dispatch(weatherActions.setCurrentCityExistInFavoriteList(
              {data: isFavExist}));
            const favorite = new WeatherLocationFavorite(
              autoData.localizedName,
              currentSelectionData.temperature.Value,
              currentSelectionData.weatherText,
              currentSelectionData.weatherIcon,
              autoData.key
            );
            if (!isFavExist) {
              this.store.dispatch(favActions.addToFavorites(
                {data: favorite}));
            } else {
              this.store.dispatch(favActions.removeFromFavorites(
                {data: favorite}));
            }
            this.store.dispatch(weatherActions.setCurrentCityExistInFavoriteList(
              {data: !isFavExist}));
          });
        }),
      )).subscribe();
  }

  private checkIfCurrentCityExistInFavoriteArray() {
    this.favorites$.pipe(
      take(1),
      tap(((favData = []) => {
          this.selectedAutoCompleteOption$.pipe(take(1)).subscribe((autoData) => {
            const isFavExist = !!favData.find(fav => fav.key === autoData.key);
            this.store.dispatch(weatherActions.setCurrentCityExistInFavoriteList(
              {data: isFavExist}));
          });
        }),
      )).subscribe();
  }

  private setFilersSubscriptions() {
    this.allAutocompleteOptions$ = this.weatherSearchControl.valueChanges.pipe(
      startWith(''),
      // TODO - move to the store
      tap((searchStr) => this.searchString = searchStr),
      debounceTime(500),
      tap(searchText => {
        this.store.dispatch(weatherActions.getWeatherAutocomplete({data: searchText}));
      }),
      switchMap(() => this.store.select(fromRoot.getAutocompleteResults))
    );

    this.filteredOptions$ = this.allAutocompleteOptions$.pipe(
      startWith(''),
      filter(opt => !!opt),
      map((options: ACCUWeatherAutocompleteViewModel[]) =>
        options.filter((opt) => opt.localizedName && !!this.searchString ?
          opt.localizedName.toLowerCase().includes(String(this.searchString).toLowerCase()) : null)
      ));
  }

  private setDailyForecasts() {
    this.selectedLocationFiveDailyDetails$ = this.store.select(fromRoot.getFiveDaysForecast);
  }

  private setCurrentWeather() {
    this.currentWeatherData$ = this.store.select(fromRoot.getCurrentSelectedData);
  }

}
