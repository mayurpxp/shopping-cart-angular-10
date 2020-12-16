import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductItem } from '../../types/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Output() cartUpdated = new EventEmitter<{
    productId: number;
    productName: string;
    productPrice: number;
  }>();

  productItem: ProductItem[] = [
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

  ngOnInit(): void {}

  onAddCart(item: ProductItem): void {
    this.cartUpdated.emit({
      productId: item.id,
      productName: item.name,
      productPrice: item.price,
    });
  }
}
