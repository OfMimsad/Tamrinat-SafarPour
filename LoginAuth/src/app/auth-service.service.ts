import {Observable, of, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService
{

  constructor(private router: Router) {}

  setToken(token: string): void
  {
    localStorage.setItem('token', token);
  }
  getToken(): string | null
  {
    console.log(localStorage.getItem('token'));
    return localStorage.getItem('token');
  }
  isLoggedIn(): boolean
  {
    if (this.getToken() == undefined)
    {
      return false;
    }
    else
    {
      return true;
    }
  }
  logout()
  {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({username, password}: any): Observable<any>
  {
    if (username === 'akbar' && password === 'akbari')
    {
      this.setToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFrYmFyIiwicGFzc3dvcmQiOiJha2JhcmkiLCJwaG9uZU51bWJlciI6IjA5MTAwMjc1MDIwIn0.TzPFIr6Xe5uIXGI6vHRrbwhSW81YtaXfJwnKH1vCLDE');
      return of({name: 'Tarique Akhtar', email: 'admin@gmail.com'});
    }
    return throwError(new Error('Failed to login'));
  }
}

