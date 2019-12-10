import { CartItem } from "./shopping-cart.model"
import { Menuitem } from "../menu-item/menu-item.model"

export class ShoppingCartService {
    items: CartItem[] = []

    clear(){
            this.items = []
    }
    addItem(item:Menuitem){
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
        if(foundItem){
            this.increaseQty(foundItem)
        }else{
            this.items.push(new CartItem(item))
        }
    }
    removeItem(item:CartItem){
        if(item.quantity > 1){
             this.decreaseQty(item) 
        }else{
            this.items.splice(this.items.indexOf(item),1)
        }
        
    }

    total(): number{
        return this.items
        .map(item => item.value())
        .reduce((prev , value)=>prev+value, 0)
    }
    increaseQty(item: CartItem){
        item.quantity = item.quantity +1
    }
    decreaseQty(item: CartItem){
        item.quantity = item.quantity -1
        if(item.quantity === 0){
            this.removeItem(item)
        }

    }
}
