import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  products = [];
  product = {
    title: "",
    price: 0.00,
    imageURL: ""
  }

  constructor() { }

  getAllProducts(){
    console.log(this.products[0]);
    return this.products;
  }

  createProduct(product){
    console.log("Service > createProduct");
    console.log("Service > createProduct > products", this.products);
    this.products.push(product);
  }

  deleteProduct(id){
    this.products.splice(id, 1);
  }

  changeProduct(id, product){
    this.products[id] = product;
  }
}
