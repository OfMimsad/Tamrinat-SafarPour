import {Component} from '@angular/core';
import {AuthServiceService} from '../auth-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent
{
  constructor(private authService: AuthServiceService, private router: Router) {}
  logout()
  {
    this.authService.logout();
  }
}
