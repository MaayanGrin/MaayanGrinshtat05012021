import {ACCUWEATHER_API_ICONS_URL, ACCUWEATHER_API_ICONS_URL_END} from '../consts/weather.consts';

export function iconsGeneratorFunc(icon: number): string {
  return `${ACCUWEATHER_API_ICONS_URL}${icon > 9 ? icon : '0' + icon}${ACCUWEATHER_API_ICONS_URL_END}`;
}
