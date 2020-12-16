import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from '../../product-service/product.service';
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

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService
      .getCartItems()
      .subscribe((items) => (this.cartItems = items));
    this.cartTotal = this.productService.cartTotal;
  }

  updateCartTotal(): void {
    let total = 0;
    this.cartItems.map((elem) => (total = total + elem.quantity * elem.price));
    this.cartTotal = total;

    this.productService.setCartItems(this.cartItems);
    this.productService.cartTotal = total;
  }

  onDeleteCartItem(item: ProductItem): void {
    const index = this.cartItems.findIndex((elem) => elem.id === item.id);
    this.cartItems.splice(index, 1);
    this.updateCartTotal();
  }
}
