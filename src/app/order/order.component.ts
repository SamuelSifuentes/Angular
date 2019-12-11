import { Component, OnInit } from '@angular/core';
import { RadioOpition } from 'app/shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/shopping-cart.model';
import { Order, OrderItem } from './order.model';
import {Router} from '@angular/router'
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms'
@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup



  emaiPatern =/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  numberPatern = /^[0-9]*$/
  constructor(private orderService: OrderService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  delivery: number = 8
  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name:this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email:this.formBuilder.control('',  [Validators.required, Validators.pattern(this.emaiPatern)]),
      emailConfirmation:this.formBuilder.control('',  [Validators.required, Validators.pattern(this.emaiPatern)]),
      address:this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number:this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPatern)]),
      optionalAddress:this.formBuilder.control(''),
      paymentOption:this.formBuilder.control('',[Validators.required])

    },
    {validator: OrderComponent.equalsTo})
  }
  static equalsTo(group: AbstractControl):{[key:string]:boolean}{
    const email= group.get('email')
    const emailConfirmation = group.get('emailConfirmation')
    if(!email.value || !emailConfirmation.value){
      return undefined
    }
    if(email.value !== emailConfirmation.value){
      return {emailsNotMatch:true}
    }
    return undefined
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
