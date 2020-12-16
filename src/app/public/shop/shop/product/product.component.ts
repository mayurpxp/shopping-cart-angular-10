import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product-service/product.service';
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

  productItem: ProductItem[] = this.productService.products;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  onAddCart(item: ProductItem): void {
    this.cartUpdated.emit({
      productId: item.id,
      productName: item.name,
      productPrice: item.price,
    });
  }
}
