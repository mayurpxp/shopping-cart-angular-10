import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShopComponent } from './shop/shop.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ProductComponent } from './shop/product/product.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ShopRoutingModule],
  declarations: [ShopComponent, ProductComponent],
})
export class ShopModule {}
