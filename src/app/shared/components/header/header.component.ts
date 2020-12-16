import {
  AfterContentChecked,
  Component,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ProductService } from 'src/app/shared/services/product-service/product.service';
import { ShopComponent } from 'src/app/public/shop/shop/shop.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  count;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // without quantity
    // this.productService.getCartItems().subscribe((items) => {
    //   this.count = items.reduce((a, b) => a + (b['quantity'] || 0), 0);
    // });

    this.productService.getCartItems().subscribe((items) => {
      this.count = items.reduce((a, b) => a + (b['quantity'] || 0), 0);
    });
  }
}
