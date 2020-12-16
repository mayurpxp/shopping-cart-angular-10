import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product-service/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  count;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getCartItems().subscribe((items) => {
      this.count = items.reduce((a, b) => a + (b['quantity'] || 0), 0);
    });
  }
}
