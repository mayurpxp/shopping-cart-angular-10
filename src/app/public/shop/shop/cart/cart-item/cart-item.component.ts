import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from '../../../types/cart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItem;
  @Output() cartItemDeleted = new EventEmitter<{
    productId: number;
  }>();
  @Output() cartItemChanged = new EventEmitter<{
    productId: number;
  }>();

  constructor() {}

  ngOnInit() {}

  onCartItemDeleted(event) {
    const id = event.target.getAttribute('id');
    this.cartItemDeleted.emit({
      productId: id,
    });
  }

  onCartItemChanged(event) {
    const id = event.target.getAttribute('id');
    this.cartItemChanged.emit({
      productId: id,
    });
  }
}
