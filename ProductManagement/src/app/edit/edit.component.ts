import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  products = [];
  id = null;
  product = null;

  constructor(private _productService: ProductService, private _route: ActivatedRoute, private _router:Router) { 
    this._route.paramMap.subscribe( params => {
      this.id = params.get('id');
      this.products = this._productService.getAllProducts();
      this.product = this.products[this.id];
    })
  }

  update(){
    this._productService.changeProduct(this.id, this.product);
    this._router.navigate(['',"list"]);
  }

  delete(){
    this._route.paramMap.subscribe( params => {
      this.id = params.get('id');
      this._productService.deleteProduct(this.id);
      this._router.navigate(['',"list"]);
    })
  }
  ngOnInit() {
  }

}
