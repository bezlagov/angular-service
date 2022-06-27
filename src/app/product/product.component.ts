import { Component, OnInit } from '@angular/core';
import { ProductService } from './product-service.service';
import { productInterface } from './productInterface';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  itemToDisplay: productInterface[];
  filterKey: string = "";

  constructor(private productService: ProductService) {
    this.itemToDisplay = this.getProducts();
  }

  ngOnInit(): void {
  }

  getProducts() {
    return this.productService.getList();
  }


  onGetMax() {
    this.itemToDisplay = [];
    this.itemToDisplay.push(this.productService.getHigherPriceProduct());
  }

  onGetMin() {
    this.itemToDisplay = [];
    this.itemToDisplay.push(this.productService.getLowerPriceProduct());
  }

  onGetIncr() {
    this.itemToDisplay = this.productService.ascPriceSort();
  }

  onGetDesc() {
    this.itemToDisplay = this.productService.descPriceSort();
  }

  updateLayout() {
    this.itemToDisplay = this.productService.getFiltered(this.filterKey);
  }
}
