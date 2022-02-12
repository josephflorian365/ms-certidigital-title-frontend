import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private getUrl = environment.apiTitle;

  constructor(private http: HttpClient) { }

  public findByDni(dni: any): Observable<Blob> {
    return this.http.get(`${this.getUrl}/pdf/generate/${dni}`, { responseType: 'blob' })
      .pipe(
        catchError(this.errorHandler)
          );
  }

  errorHandler(error:HttpErrorResponse){
    return throwError(error.message);
  }
}
