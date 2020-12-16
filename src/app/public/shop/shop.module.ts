import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopComponent } from './shop/shop.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ProductComponent } from './shop/product/product.component';
import { CartComponent } from './shop/cart/cart.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ShopRoutingModule],
  declarations: [ShopComponent, ProductComponent, CartComponent],
})
export class ShopModule {}
