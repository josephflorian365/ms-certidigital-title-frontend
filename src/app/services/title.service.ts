import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private getUrl = environment.apiTitle;

  constructor(private http: HttpClient) { }

  public findById(dni:any): Observable<Blob> {
    return this.http.get(`${this.getUrl}/pdf/generate/${dni}`, {responseType: 'blob'});
  }
}
