import { Component, OnInit, Input , EventEmitter, Output} from '@angular/core';
import {Menuitem} from './menu-item.model'
import {trigger, state, style, transition, animate} from '@angular/animations'

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  animations:[
    trigger('menuItemtAppeared',[
      state('ready', style({
        opacity: 1
      })),
      transition('void => ready', [
        style({
          opacity:0, transform: 'translateY(-20px)'
        }),
        animate('500ms 0s ease-in')
      ])
    ])
  ]
})

export class MenuItemComponent implements OnInit {

  constructor() { }
  @Input() menuItem: Menuitem
  @Output() add = new EventEmitter()
  ngOnInit() {

  }
  menuItemState = 'ready'
  emitAddEvent(){
    this.add.emit(this.menuItem)
  }
}
