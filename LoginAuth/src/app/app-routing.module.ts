import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {authGuard} from './auth.guard';
import {UserPageComponent} from './user-page/user-page.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
const routes: Routes = [{path: '', redirectTo: '/login', pathMatch: 'full'},
{path: 'login', component: LoginPageComponent},
{path: 'admin', canActivate: [authGuard], component: UserPageComponent},
{path: '**', component: PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
