import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from './shared/services/product-service/product.service';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
