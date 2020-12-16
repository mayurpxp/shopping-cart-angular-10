import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from '../../types/cart.model';
import { ProductItem } from '../../types/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  @Input() cartTotal: number;
  @Input() cartItems: CartItem[];
  @Output() changeCartItem = new EventEmitter<{
    productId: number;
  }>();
  @Output() deleteCartItem = new EventEmitter<{
    productId: number;
  }>();

  total = 0;

  constructor() {}

  ngOnInit(): void {}

  onChangeCartItem(item: ProductItem): void {
    this.changeCartItem.emit({
      productId: item.id,
    });
  }

  onDeleteCartItem(item: ProductItem): void {
    this.deleteCartItem.emit({
      productId: item.id,
    });
  }
}
