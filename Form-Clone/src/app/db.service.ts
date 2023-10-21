import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DBService
{
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'Application/json'})
  };
  url = "http://localhost:3000/FormData";
  constructor(private http: HttpClient) {}

  getData(): Observable<any>
  {
    return this.http.get<any>(this.url, this.httpOptions);
  }

  postData(value: any): Observable<any>
  {
    return this.http.post(this.url, value, this.httpOptions);
  }

  deleteData(id: any): Observable<any>
  {
    return this.http.delete(this.makeNewUrl(id), this.httpOptions);
  }

  findData(id: any): Observable<any>
  {
    return this.http.get<any>(this.makeNewUrl(id), this.httpOptions);
  }

  updateData(id: any, value: any): Observable<any>
  {
    return this.http.put<any>(this.makeNewUrl(id), value, this.httpOptions);
  }

  makeNewUrl(id: any): string
  {
    return `${this.url}/${id}`;
  }
}
