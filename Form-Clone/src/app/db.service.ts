import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {GenericService} from './generic.service';
// import {GenericHttpService} from './generic-service.service';

@Injectable({
  providedIn: 'root'
})
export class DBService
{
  constructor(private genericService: GenericService) {}

  getData(): Observable<any>
  {
    // return this.http.get<any>(this.url, this.httpOptions);
    return this.genericService.get('');
  }

  postData(value: any): Observable<any>
  {
    // return this.http.post(this.url, value, this.httpOptions);
    return this.genericService.post('', value);
  }

  deleteData(id: any): Observable<any>
  {
    // return this.http.delete(this.makeNewUrl(id), this.httpOptions);
    return this.genericService.delete(`/${id}`);
  }

  findData(id: any): Observable<any>
  {
    // return this.http.get<any>(this.makeNewUrl(id), this.httpOptions);
    return this.genericService.get(`/${id}`);
  }

  updateData(id: any, value: any): Observable<any>
  {
    // return this.http.put<any>(this.makeNewUrl(id), value, this.httpOptions);
    return this.genericService.put(`/${id}`, value);
  }
}
