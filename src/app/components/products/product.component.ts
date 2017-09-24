import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import{ ProductService } from './../../services/product.service';
import {Product} from './../../models/product.model'

@Component({
    selector: 'product',
    templateUrl:'./product.component.html'
})

export class ProductComponent{

    productList: Array<Product>;
    constructor(private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute){

    }
    ngOnInit() {
        this.getAllProducts();

    }

    getAllProducts(){
        this.productService.getAllProducts().subscribe( data => {
            if(data != undefined){
                console.log(data);
                this.productList= data;
            }
        })
    }
}