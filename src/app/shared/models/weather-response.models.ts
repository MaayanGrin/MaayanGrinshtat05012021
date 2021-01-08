export interface ILocalizedDetails {
  ID: string;
  LocalizedName: string;
}

export interface IACCUWeatherAutocompleteResponse {
  Version: number;
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  Country: ILocalizedDetails;
  AdministrativeArea: ILocalizedDetails;
}


export interface IGetCurrentConditionsResponse {
  LocalObservationDateTime: string;
  EpochTime: number;
  WeatherText: string;
  WeatherIcon: number;
  HasPrecipitation: boolean;
  PrecipitationType?: any;
  IsDayTime: boolean;
  Temperature: ICurrentWeatherTemperature;
  RealFeelTemperature: ICurrentWeatherTemperature;
  RealFeelTemperatureShade: ICurrentWeatherTemperature;
  RelativeHumidity: number;
  DewPoint: ICurrentWeatherTemperature;
  Wind: IWindDetails;
  WindGust: IWindGust;
  UVIndex: number;
  UVIndexText: string;
  Visibility: ICurrentWeatherTemperature;
  ObstructionsToVisibility: string;
  CloudCover: number;
  Ceiling: ICurrentWeatherTemperature;
  Pressure: ICurrentWeatherTemperature;
  PressureTendency: IPressureTendency;
  Past24HourTemperatureDeparture: ICurrentWeatherTemperature;
  ApparentTemperature: ICurrentWeatherTemperature;
  WindChillTemperature: ICurrentWeatherTemperature;
  WetBulbTemperature: ICurrentWeatherTemperature;
  Precip1hr: ICurrentWeatherTemperature;
  PrecipitationSummary: IPrecipitationSummary;
  TemperatureSummary: ITemperatureSummary;
  MobileLink: string;
  Link: string;
}

export interface ITemperatureSummary {
  Past6HourRange: IPast6HourRange;
  Past12HourRange: IPast6HourRange;
  Past24HourRange: IPast6HourRange;
}

interface ICurrentWeatherTemperature {
  Metric: IUnitDetails;
  Imperial: IUnitDetails;
}

export interface IPast6HourRange {
  Minimum: ICurrentWeatherTemperature;
  Maximum: ICurrentWeatherTemperature;
}

export interface IPrecipitationSummary {
  Precipitation: ICurrentWeatherTemperature;
  PastHour: ICurrentWeatherTemperature;
  Past3Hours: ICurrentWeatherTemperature;
  Past6Hours: ICurrentWeatherTemperature;
  Past9Hours: ICurrentWeatherTemperature;
  Past12Hours: ICurrentWeatherTemperature;
  Past18Hours: ICurrentWeatherTemperature;
  Past24Hours: ICurrentWeatherTemperature;
}

export interface IPressureTendency {
  LocalizedText: string;
  Code: string;
}

export interface IWindGust {
  Speed: ICurrentWeatherTemperature;
}

export interface IWindDetails {
  Direction: IDirectionDetails;
  Speed: ICurrentWeatherTemperature;
}

// get 5 days of forecast response

export interface IGet5DaysOfForecastResponse {
  Headline: IWeatherForecastHeadline;
  DailyForecasts: IDailyForecast[];
}

export interface IDailyForecast {
  Date: string;
  EpochDate: number;
  Sun: ISunDetails;
  Moon: IMoonDetails;
  Temperature: IDailyForecastTemperature;
  RealFeelTemperature: IDailyForecastTemperature;
  RealFeelTemperatureShade: IDailyForecastTemperature;
  HoursOfSun: number;
  DegreeDaySummary: IDegreeDaySummary;
  AirAndPollen: IAirAndPollenDetails[];
  Day: IDayDetails;
  Night: INightDetails;
  Sources: string[];
  MobileLink: string;
  Link: string;
}

export interface INightDetails {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
  ShortPhrase: string;
  LongPhrase: string;
  PrecipitationProbability: number;
  ThunderstormProbability: number;
  RainProbability: number;
  SnowProbability: number;
  IceProbability: number;
  Wind: IWindForecastDetails;
  WindGust: IWindForecastDetails;
  TotalLiquid: IUnitDetails;
  Rain: IUnitDetails;
  Snow: IUnitDetails;
  Ice: IUnitDetails;
  HoursOfPrecipitation: number;
  HoursOfRain: number;
  HoursOfSnow: number;
  HoursOfIce: number;
  CloudCover: number;
  PrecipitationType?: string;
  PrecipitationIntensity?: string;
}

export interface IDayDetails {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
  ShortPhrase: string;
  LongPhrase: string;
  PrecipitationProbability: number;
  ThunderstormProbability: number;
  RainProbability: number;
  SnowProbability: number;
  IceProbability: number;
  Wind: IWindForecastDetails;
  WindGust: IWindForecastDetails;
  TotalLiquid: IUnitDetails;
  Rain: IUnitDetails;
  Snow: IUnitDetails;
  Ice: IUnitDetails;
  HoursOfPrecipitation: number;
  HoursOfRain: number;
  HoursOfSnow: number;
  HoursOfIce: number;
  CloudCover: number;
}

export interface IWindForecastDetails {
  Speed: IUnitDetails;
  Direction: IDirectionDetails;
}

export interface IDirectionDetails {
  Degrees: number;
  Localized: string;
  English: string;
}

export interface IAirAndPollenDetails {
  Name: string;
  Value: number;
  Category: string;
  CategoryValue: number;
  Type?: string;
}

export interface IDegreeDaySummary {
  Heating: IUnitDetails;
  Cooling: IUnitDetails;
}

export interface IDailyForecastTemperature {
  Minimum: IUnitDetails;
  Maximum: IUnitDetails;
}

export interface IUnitDetails {
  Value: number;
  Unit: string;
  UnitType: number;
}

export interface IMoonDetails {
  Rise: string;
  EpochRise: number;
  Set: string;
  EpochSet: number;
  Phase: string;
  Age: number;
}

export interface ISunDetails {
  Rise: string;
  EpochRise: number;
  Set: string;
  EpochSet: number;
}

export interface IWeatherForecastHeadline {
  EffectiveDate: string;
  EffectiveEpochDate: number;
  Severity: number;
  Text: string;
  Category: string;
  EndDate: string;
  EndEpochDate: number;
  MobileLink: string;
  Link: string;
}
