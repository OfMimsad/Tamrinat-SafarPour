import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShopMenuComponent} from './shop-menu/shop-menu.component';
const routes: Routes = [{path: 'shop', component: ShopMenuComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {}
