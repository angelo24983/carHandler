import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Duty } from './shared/duty';
import { MessageService } from './message.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({providedIn: 'root'})
export class DutyService {

  private dutiesUrl = 'api/duties';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /* GET heroes */
  getDuties(): Observable<Duty[]> {
    return this.http.get<Duty[]>(this.dutiesUrl)
    .pipe(
      tap(duties => this.log('fetched duties')),
      catchError(this.handleError<Duty[]>('getDuties'))
    );
  }

  /** GET duty by id. Return `undefined` when id not found */
  getDutyNo404<Data>(id: number): Observable<Duty> {
    const url = `${this.dutiesUrl}/?id=${id}`;
    return this.http.get<Duty[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} duty id=${id}`);
        }),
        catchError(this.handleError<Duty>(`getDuty id=${id}`))
      );
  }

  /* GET heroes by id */
  getDuty(id: number): Observable<Duty> {
    const url = `${this.dutiesUrl}/${id}`;
      return this.http.get<Duty>(url)
      .pipe(
        tap(_ => this.log(`fetched duty id=${id}`)),
        catchError(this.handleError<Duty>(`getDuty id=${id}`))
      );
  }

  /* GET heroes whose name contains search term */
  searchDuties(term: string): Observable<Duty[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Duty[]>(`${this.dutiesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found duties matching "${term}"`)),
      catchError(this.handleError<Duty[]>('searchDuties', []))
    );
  }

  /** PUT: update the duty on the server */
  updateDuty (duty: Duty): Observable<any> {
    return this.http.put(this.dutiesUrl, duty, httpOptions)
    .pipe(
      tap(_ => this.log(`updated duty id=${duty.id}`)),
      catchError(this.handleError<any>('updateDuty'))
    );
  }

  /** POST: add a new duty to the server */
  addDuty (duty: Duty): Observable<Duty> {
    return this.http.post<Duty>(this.dutiesUrl, duty, httpOptions)
    .pipe(
      tap((duty: Duty) => this.log(`added duty with id=${duty.id}`)),
      catchError(this.handleError<Duty>('addDuty'))
    );
  }

  /** DELETE: delete the duty from the server */
  deleteDuty (duty: Duty | number): Observable<Duty> {
    const id = typeof duty === 'number' ? duty : duty.id;
    const url = `${this.dutiesUrl}/${id}`;

    return this.http.delete<Duty>(url, httpOptions)
    .pipe(
      tap(_ => this.log(`deleted duty id=${id}`)),
      catchError(this.handleError<Duty>('deleteDuty'))
    );
  }

  private log(message: string) {
    this.messageService.add('DutyService: ' + message);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
 
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
 
    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);
 
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}