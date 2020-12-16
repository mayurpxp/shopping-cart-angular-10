import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../types/cart.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  cartItems$: BehaviorSubject<CartItem[]> = new BehaviorSubject([]);
  cartTotal$ = 0;

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
