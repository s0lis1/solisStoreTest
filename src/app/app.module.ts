import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/products/product.component'

import{ ProductService } from './services/product.service'

import { HttpService } from './services/http.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent, ProductComponent
  ],
  imports: [
    BrowserModule, HttpModule, RouterModule.forRoot([
			
			{ path: 'product', component: ProductComponent }
		])
  ],
  providers: [ HttpService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
