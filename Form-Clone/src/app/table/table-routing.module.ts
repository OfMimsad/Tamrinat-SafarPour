import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpTableComponent} from './http-table/http-table.component';

const routes: Routes = [{path: "hTabel", component: HttpTableComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule {}
