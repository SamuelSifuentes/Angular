import { Component, OnInit } from '@angular/core';
import{ShoppingCartService} from './shopping-cart.service'

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shopingcartservice: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): any[]{
    return this.shopingcartservice.items
  }
  total(): number{
    return this.shopingcartservice.total()
  }
  clear(){
    this,this.shopingcartservice.clear()
  }
  removeItem(item:any){
    this.shopingcartservice.removeItem(item)
  }
  addItem(item:any){
    this.shopingcartservice.addItem(item)
  }
}
