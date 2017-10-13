import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  // onSubmit;
  products = [];
  product = {
    title: "",
    price: 0.00,
    imageURL: ""
  }

  constructor(private _productService: ProductService) {
    // this.onSubmit = this._productService.createProduct;
    
  }

  onSubmit(){
    console.log('CreateComponent > onSubmit : prodcut ', this.product); 
    this._productService.createProduct(this.product); 
    this.product = {
      title: "",
      price: 0.00,
      imageURL: ""
    }
  }


  ngOnInit() {
  }

}
