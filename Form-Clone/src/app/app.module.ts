import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

import { CommonModule } from '@angular/common';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TableModuleModule } from './table-module/table-module.module';

const appRoute : Routes = [{path: 'ReactiveForm', component:ReactiveFormsComponent}, {path:'ngModleForm', component: TemplateDrivenFormComponent}]
@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormsComponent,
    TemplateDrivenFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    TableModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
