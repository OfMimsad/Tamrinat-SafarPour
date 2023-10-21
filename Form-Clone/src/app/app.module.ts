import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {ReactiveFormsComponent} from './reactive-forms/reactive-forms.component';

import {CommonModule} from '@angular/common';
import {TemplateDrivenFormComponent} from './template-driven-form/template-driven-form.component';
import {HttpClientModule} from '@angular/common/http';
import {LocalDBformComponent} from './local-dbform/local-dbform.component';






@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent,
    TemplateDrivenFormComponent,
    LocalDBformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
