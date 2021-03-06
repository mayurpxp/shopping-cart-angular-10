import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CartRoutingModule],
  declarations: [CartComponent],
})
export class CartModule {}
