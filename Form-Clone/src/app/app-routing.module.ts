import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {ReactiveFormsComponent} from './reactive-forms/reactive-forms.component';
import {TemplateDrivenFormComponent} from './template-driven-form/template-driven-form.component';
import {LocalDbFormComponent} from './local-db-form/local-db-form.component';

const routes: Routes = [{path: 'ReactiveForm', title: "Reactive Form", component: ReactiveFormsComponent},
{path: 'ngModleForm', title: "ngModul Form", component: TemplateDrivenFormComponent},
{path: "Tabel", title: 'Tabel Price', loadChildren: () => import('./table/table.module').then((m) => m.TableModule)},
{path: "LocalDB", title: 'Form with local DB', component: LocalDbFormComponent},
{path: '**', component: AppComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
