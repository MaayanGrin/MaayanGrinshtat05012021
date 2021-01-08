import {EResultCodes} from './api.models';

const DEFAULT_APP_ERROR_TYPE = 9999;
const AppErrorsTranslationMapping = {
  9999: 'Unknown error',
  401: 'Unauthorized', // must be listed in i18n json file_formData
  500: 'General Error', // must be listed in i18n json file_formData

  0: 'an error occurred',
  801: 'Unknown error',
};

export interface IAppErrorPayload {
  status: number;
  error: string;
}

export interface IAppError {
  status: number;
  value: string;
  translateKey: string;
}

export class AppError implements IAppError {
  value: string;
  translateKey: string;
  status: number;
  data: string;

  constructor({status = DEFAULT_APP_ERROR_TYPE, error}: IAppErrorPayload) {
    this.status = status || 9999;
    this.value = error || '';
    if (!EResultCodes[status]) {
      console.error('New Type of Error found:', status);
    }
    this.translateKey = !!AppErrorsTranslationMapping[status] ?
      AppErrorsTranslationMapping[status] :
      AppErrorsTranslationMapping[DEFAULT_APP_ERROR_TYPE];
  }
}
