import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products = [];

  constructor(private _productService: ProductService) {
    this.products = this._productService.getAllProducts();
   }

   delete(idx){
     this._productService.deleteProduct(idx);
   }

  ngOnInit() {
  }

}
