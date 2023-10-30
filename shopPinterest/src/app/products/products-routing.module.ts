import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemsComponent} from './items/items.component';
import {MainMenuComponent} from '../main-menu/main-menu.component';
import {ShopModule} from '../shop/shop.module';

const routes: Routes = [{path: 'products', component: ItemsComponent}, {path: "products/S", loadChildren: () => import('../shop/shop.module').then((m) => m.ShopModule)}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
