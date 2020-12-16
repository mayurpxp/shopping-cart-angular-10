import { Component, OnInit } from '@angular/core';
import { CartItem } from '../types/cart.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  cartTotal = 0;
  cartItems: CartItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.updateCartTotal();
  }

  onDeleteCartItem(productData: { productId: number }): void {
    const index = this.cartItems.findIndex(
      (elem) => elem.id === productData.productId
    );
    this.cartItems.splice(index, 1);
    this.updateCartTotal();
  }

  onChangeCartItem(productData: { productId: number }): void {
    this.updateCartTotal();
  }

  onAddCart(productData: {
    productId: number;
    productName: string;
    productPrice: number;
  }): void {
    const index = this.cartItems.findIndex(
      (elem) => elem.id === productData.productId
    );
    if (index === -1) {
      this.cartItems.push({
        id: productData.productId,
        name: productData.productName,
        quantity: 1,
        price: productData.productPrice,
        total: productData.productPrice * 1,
      });
    } else {
      this.cartItems[index].id = productData.productId;
      this.cartItems[index].name = productData.productName;
      this.cartItems[index].quantity++;
      this.cartItems[index].price = productData.productPrice;
      this.cartItems[index].total =
        this.cartItems[index].price * this.cartItems[index].quantity;
    }
    this.updateCartTotal();
  }

  updateCartTotal(): void {
    let total = 0;
    this.cartItems.map((elem) => (total = total + elem.quantity * elem.price));
    this.cartTotal = total;
  }
}
