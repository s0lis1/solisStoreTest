import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import{ ProductService } from './../../services/product.service';
import {Product} from './../../models/product.model'

@Component({
    selector: 'product',
    templateUrl:'./product.component.html'
})

export class ProductComponent{

    productList: Array<Product>;
    productList2: Product;
    productSelected: Product;
    constructor(private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute){

    }
    ngOnInit() {
        this.getAllProducts();

    }

    getAllProducts(){
        this.productService.getAllProducts().subscribe( data => {
            if(data != undefined){
                this.productList= data;
            }
        })
    }
    getProductById(){
        this.productService.getProductById(this.productSelected.id).subscribe( data => {
            if(data != undefined){
                
                this.productList2=data;
                console.log(this.productList2);
            }
        })
    }
    onSelectesProduct(product: Product){
        this.productSelected= product;
        console.log(this.productSelected);
    }
    uodateProduct(){
        this.productService.updateProduct(this.productSelected).subscribe(data =>{
            if(data != undefined){
                
                this.productSelected=data;
                console.log(this.productSelected);
            }
        })
    }
}