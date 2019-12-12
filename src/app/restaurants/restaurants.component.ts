import { Component, OnInit } from '@angular/core';
import { Restaurant } from "./restaurant/restaurant.model"
import { RestaurantService } from './restaurant.service';
import {trigger, state, style, transition, animate} from '@angular/animations'
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'
import 'rxjs/add/operator/switchMap'
Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations:[
    trigger('toggleSearch',[
      state('hidden', style({
        opacity: 0,
        "max-height":"0px",
        
        
      })),
      state('visible', style({
        opacity: 1,
        "max-height":"70px",
        "margin-top": "20px",
        
      })),
      transition('* => *',animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantsComponent implements OnInit {

  searchForm: FormGroup
  searchControl: FormControl
  constructor(private restaurantService: RestaurantService,
              private fb: FormBuilder) { }
  restaurants: Restaurant[]
  searchBarState = 'hidden'
  ngOnInit() {

    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })
    this.searchControl.valueChanges
    .switchMap(searchTerm => this.restaurantService.restautants(searchTerm))
    .subscribe(restaurants => this.restaurants = restaurants)
    this.restaurantService.restautants()
    .subscribe(restaurants => this.restaurants = restaurants)
  }
  toggleSearch(){
    console.log('opa')
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible': 'hidden'
  }

}
