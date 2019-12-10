import { Component, OnInit } from '@angular/core';
import {RestaurantService} from '../../restaurants/restaurant.service'
import {Menuitem } from '../menu-item/menu-item.model'
import {ActivatedRoute} from '@angular/router'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  constructor(private restaurantService: RestaurantService,
    private route: ActivatedRoute) { }
  //menuItems: Menuitem[]
  menuItems: Observable<Menuitem[]>
  ngOnInit() {
    //this.restaurantService.menuOfRestaurant(this.route.parent.snapshot.params['id']).subscribe( menuItem => this.menuItems = menuItem)
    this.menuItems = this.restaurantService
    .menuOfRestaurant(this.route.parent.snapshot.params['id'])
  }
  addMenuItem(item:Menuitem){
    console.log(item)
  }
}
