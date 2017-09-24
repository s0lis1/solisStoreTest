import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {

	constructor(private http: Http){

	}


	private getHeaders(){
		let headers: Headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Accept', 'application/json');

		let options: RequestOptions = new RequestOptions();
		options.headers = headers;

		return options;
	}

	
	get(url: string){
		return this.http.get(url, this.getHeaders())
			.map(res=>res.json());
	}


	post(url: string, object: any){
		return this.http.post(url, object, this.getHeaders())
			.map(res=>res.json());
	}

}