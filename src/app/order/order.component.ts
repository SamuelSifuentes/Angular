import { Component, OnInit } from '@angular/core';
import { RadioOpition } from 'app/shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/shopping-cart.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }
  paymentOptions: RadioOpition[] = [
    {label: 'Dinheiro', value: 'mon'},
    {label: 'Cartão de Debito', value: 'deb'},
    {label: 'Cartão Refeição', value: 'ref'}
  ]

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
}
