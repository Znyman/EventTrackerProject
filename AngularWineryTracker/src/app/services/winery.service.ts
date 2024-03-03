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

  public create(winery: Winery): Observable<Winery> {
    return this.http.post<Winery>(this.url, winery).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError(
           () => new Error( 'WineryService.create(): error creating Winery: ' + err )
        );
      })
    );
  }

  update(editWinery: Winery) {
    return this.http.put<Winery>(this.url + "/" + editWinery.id, editWinery).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError(
           () => new Error( 'WineryService.update(): error updating Winery: ' + err )
        );
      })
    );
  }

  destroy(id: number) {
    return this.http.delete<Winery>(this.url + "/" + id).pipe(
      catchError((err: any) => {
        console.error(err);
        return throwError(
           () => new Error( 'WineryService.destroy(): error destroying Winery: ' + err )
        );
      })
    );
  }

  getSearchWineries(city: string): Observable<Winery[]> {
    return this.http.get<Winery[]>(this.url + "/search/" + city).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('WineryService.getSearchWineries(): error retrieving search wineries: ' + err)
        );
      })
    );
  }

}
