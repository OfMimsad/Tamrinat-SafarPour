import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BackendService
{
  url = 'https://zn-sarand.ir/api/api/v1/price/products/dashboard';
  constructor(private http: HttpClient) {}

  getData(): Observable<any>
  {
    return this.http.get<any>(this.url);
  }

}
