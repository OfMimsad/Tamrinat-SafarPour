import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {ReactiveFormsComponent} from './reactive-forms/reactive-forms.component';
import {TemplateDrivenFormComponent} from './template-driven-form/template-driven-form.component';
import {LocalDBformComponent} from './local-dbform/local-dbform.component';


const routes: Routes = [{path: 'ReactiveForm', title: "Reactive Form", component: ReactiveFormsComponent},
{path: 'ngModleForm', title: "ngModul Form", component: TemplateDrivenFormComponent},
{path: "Tabel", title: 'Tabel Price', loadChildren: () => import('./table/table.module').then((m) => m.TableModule)},
{path: "DB", component: LocalDBformComponent},
{path: "edit/:id", component: LocalDBformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
