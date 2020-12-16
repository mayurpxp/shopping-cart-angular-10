import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from '../../types/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  @Input() cartTotal: number;
  @Input() cartItems: CartItem[];
  @Output() cartItemChanged = new EventEmitter<{
    productId: number;
  }>();
  @Output() cartItemDeleted = new EventEmitter<{
    productId: number;
  }>();

  total: number = 0;

  constructor() {}

  ngOnInit() {}

  onCartItemChanged(productData: { productId: number }) {
    this.cartItemChanged.emit({
      productId: productData.productId,
    });
  }

  onCartItemDeleted(productData: { productId: number }) {
    this.cartItemDeleted.emit({
      productId: productData.productId,
    });
  }
}
