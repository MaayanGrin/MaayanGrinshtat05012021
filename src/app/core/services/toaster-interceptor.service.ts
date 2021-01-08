import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToasterInterceptorService implements HttpInterceptor {

  constructor(private snackBar: MatSnackBar) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(e => this.handleError(e)));
  }

  private handleError(httpRes: HttpErrorResponse) {
    if (httpRes.status !== 200) {
      this.showSnackbar(`${httpRes.statusText} something went wrong, try again later`);
    }
    return throwError(httpRes);
  }

  private showSnackbar(massage: string): void {
    this.snackBar.open(massage, '', {
      duration: 3000,
      verticalPosition: 'top',
      panelClass: 'error'
    });
  }

}
