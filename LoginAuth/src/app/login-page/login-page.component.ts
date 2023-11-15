import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {AuthServiceService} from '../auth-service.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit
{
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(['']),
  });


  constructor(private authService: AuthServiceService, private router: Router) {}
  ngOnInit()
  {
    // if (this.authService.isLoggedIn())
    // {
    //   this.router.navigate(['admin']);
    // }
  }

  submit()
  {
    this.authService.login(this.loginForm.value).subscribe((result) =>
    {
      console.log(result);
      this.router.navigate(['/admin']);
    }, (err: Error) =>
    {
      alert(err.message);
    });
  }

}
