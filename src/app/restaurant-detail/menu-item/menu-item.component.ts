import { Component, OnInit, Input , EventEmitter, Output} from '@angular/core';
import {Menuitem} from './menu-item.model'
@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  constructor() { }
  @Input() menuItem: Menuitem
  @Output() add = new EventEmitter()
  ngOnInit() {

  }
 
  emitAddEvent(){
    this.add.emit(this.menuItem)
  }
}
