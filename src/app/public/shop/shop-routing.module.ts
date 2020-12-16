import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './shop/cart/cart.component';

const routes: Routes = [
  { path: '', component: ShopComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
