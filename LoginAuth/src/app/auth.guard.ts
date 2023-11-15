import {Injectable, inject} from '@angular/core';
import
{
  CanActivateFn,
  Router,
} from '@angular/router';
import {AuthServiceService} from './auth-service.service';
export const authGuard: CanActivateFn = (route, state) =>
{

  if (inject(AuthServiceService).isLoggedIn() == false)
  {
    console.log('test');
    inject(Router).navigate(['/login']);
  }
  return inject(AuthServiceService).isLoggedIn();
  // return false;
};

