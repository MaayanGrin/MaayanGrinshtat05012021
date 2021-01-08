export class AppResponse<T> {
  data: T;

  constructor({data}) {
    this.data = data;
  }
}

export interface HttpResponseBody<T> {
  data: T;
}

export enum EResultCodes {
  Ok = 0,
  Success = 200,

  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  InternalServerError = 500,

  UnknownError = 9999
}
