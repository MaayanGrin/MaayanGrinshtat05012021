import {ACCUWeatherAutocompleteViewModel} from '../models/weather-view.models';

export const ACCUWEATHER_API_AUTOCOMPLETE_URL = 'locations/v1/cities/autocomplete';
export const ACCUWEATHER_API_CONDITIONS_URL = 'currentconditions/v1';
export const ACCUWEATHER_API_5DAYS_OF_FORECASTS_URL = 'forecasts/v1/daily/5day';
export const ACCUWEATHER_API_ICONS_URL = 'https://developer.accuweather.com/sites/default/files/';
export const ACCUWEATHER_API_ICONS_URL_END = '-s.png';

export const ACCUWEATHER_API_DEFAULT_AUTOCOMPLETE_SEARCH: ACCUWeatherAutocompleteViewModel = {
  key: '215854',
  localizedName: 'Tel Aviv'
};
