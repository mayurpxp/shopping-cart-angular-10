import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from 'src/app/public/cart/types/cart.model';
import { ProductItem } from 'src/app/public/shop/types/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public cartItems$ = new BehaviorSubject([]);
  cartTotal$ = 0;

  products = [
    new ProductItem(
      1,
      'Google pixel',
      50000,
      'https://www.free-mockup.com/wp-content/uploads/edd/2018/04/Google-Pixel-2-Mockup-Phone-PSD.jpg'
    ),
    new ProductItem(
      2,
      'Fairphone',
      25000,
      'https://www.slashgear.com/wp-content/uploads/2020/04/fairphone-3-e-1280x720.jpg'
    ),
    new ProductItem(
      3,
      'iPhone',
      102000,
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeKh5x0vW9gSdLsYfZmZjbpa8Aves0zT99WA&usqp=CAU'
    ),
    new ProductItem(
      4,
      'Moto',
      35000,
      'https://m-cdn.phonearena.com/images/article/128606-two_1200/Heres-how-you-can-get-the-Moto-G-Stylus-and-G-Power-for-free-this-Black-Friday.jpg'
    ),
  ];

  constructor() {}

  getCartItems(): Observable<CartItem[]> {
    return this.cartItems$.asObservable();
  }

  setCartItems(items: CartItem[]): void {
    this.cartItems$.next(items);
  }

  get cartTotal(): number {
    return this.cartTotal$;
  }

  set cartTotal(value: number) {
    this.cartTotal$ = value;
  }
}
