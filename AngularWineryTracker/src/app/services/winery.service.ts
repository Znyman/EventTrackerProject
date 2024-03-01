import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, catchError, throwError } from 'rxjs';
import { Winery } from '../models/winery';

@Injectable({
  providedIn: 'root'
})
export class WineryService {
  private url = environment.baseUrl + "api/wineries";


  constructor(private http: HttpClient) { }

  public index(): Observable<Winery[]> {
    return this.http.get<Winery[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('WineryService.index(): error retrieving wineries: ' + err)
        );
      })
    );
  }












}
