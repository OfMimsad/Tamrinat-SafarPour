import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemsComponent} from './items/items.component';
import {MainMenuComponent} from '../main-menu/main-menu.component';

const routes: Routes = [{path: 'products', component: ItemsComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
