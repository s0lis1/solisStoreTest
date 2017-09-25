import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Product} from './../models/product.model';
import { HttpService } from './http.service';
import { PROTOCOL, SERVER_NAME, SERVER_PORT } from '../core/serverProperties';

@Injectable()
export class ProductService{
    
    httpService: HttpService;

    constructor(@Inject(HttpService) httpService: HttpService, private _router: Router){
        this.httpService = httpService;
    }

    getAllProducts(){
        let url: string =  `${PROTOCOL}://${SERVER_NAME}:${SERVER_PORT}/api/products/`;
        return this.httpService.get(url);
    }

    getProductById(id:number){
        let url: string =  `${PROTOCOL}://${SERVER_NAME}:${SERVER_PORT}/api/products/`+id;
        return this.httpService.get(url);
    }
    updateProduct(product:Product){
        let url: string =  `${PROTOCOL}://${SERVER_NAME}:${SERVER_PORT}/api/products/`;
        let dataToSend =  {
				id: product.id,
                description: product.description
            };
            console.log(dataToSend);
        return this.httpService.post(url,dataToSend);
    }
}