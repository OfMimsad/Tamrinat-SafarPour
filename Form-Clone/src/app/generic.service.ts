import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError, BehaviorSubject} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GenericService
{
  constructor(private httpClient: HttpClient) {}
  appRoot = environment.serverUrl;

  get<T>(url: string, headers?: any): Observable<Object>
  {
    if (headers == null)
    {
      headers = new HttpHeaders({'Content-Type': 'application/json'});
    }
    return this.httpClient.get(this.appRoot + url, {headers});
  }

  delete(url: string, body?: any): Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'}),
      body: body,
    };
    return this.httpClient.delete(this.appRoot + url, httpOptions);
  }

  post<T>(url: string, data: any, headers?: any): Observable<Object>
  {
    if (headers == null)
    {
      headers = new HttpHeaders({'Content-Type': 'application/json'});
    }
    if (headers == 'undefined')
    {
      return this.httpClient.post(this.appRoot + url, data);
    } else
    {
      return this.httpClient.post(this.appRoot + url, data, {headers});
    }
  }

  put<T>(url: string, body: any = null, headers?: any): Observable<Object>
  {
    if (headers == null)
    {
      headers = new HttpHeaders({'Content-Type': 'application/json'});
    }
    if (headers == 'undefined')
    {
      return this.httpClient.put(this.appRoot + url, body);
    } else
    {
      return this.httpClient.put(this.appRoot + url, body, {headers});
    }
  }
}