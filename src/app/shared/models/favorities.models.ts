export class WeatherLocationFavorite {
  key: string;
  name: string;
  degrees: number;
  currentWeatherText: string;
  icon: number;

  constructor(name: string, degrees: number, currentWeatherText: string, icon: number, key: string) {
    this.key = key;
    this.name = name;
    this.degrees = degrees;
    this.currentWeatherText = currentWeatherText;
    this.icon = icon;
  }
}
