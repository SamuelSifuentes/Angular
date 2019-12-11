import { Component, OnInit } from '@angular/core';
import { RadioOpition } from 'app/shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/shopping-cart.model';
import { Order, OrderItem } from './order.model';
import {Router} from '@angular/router'
@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  constructor(private orderService: OrderService,
    private router: Router) { }

  delivery: number = 8
  ngOnInit() {
  }
  paymentOptions: RadioOpition[] = [
    {label: 'Dinheiro', value: 'mon'},
    {label: 'Cartão de Debito', value: 'deb'},
    {label: 'Cartão Refeição', value: 'ref'}
  ]

  itemsValue(): number{
    return this.orderService.itemsValue()
  }
  cartItems(): CartItem[]{
    return this.orderService.cartItems()
  }

  increaseQty(item: CartItem){
    this.orderService.increaseQty(item)
  }
  decreaseQty(item: CartItem){
    this.orderService.decreaseQty(item)
  }
  remove(item: CartItem){
    this.orderService.remove(item)
  }
  checkOrder(order: Order){
    order.odrderItems = this.cartItems()
    .map((item:CartItem)=> new OrderItem(item.quantity, item.menuItem.id))
    this.orderService.checkOrder(order)
    .subscribe((orderId: string)=>{
      this.router.navigate(['/order-summary'])
      console.log(`${orderId}`)
      this.orderService.clear()
    })
    console.log(order)
  }
}
