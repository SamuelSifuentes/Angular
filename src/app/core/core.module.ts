import{NgModule} from '@angular/core'
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantService } from '../restaurants/restaurant.service';
import { OrderService } from '../order/order.service';

@NgModule({
providers: [ShoppingCartService, RestaurantService, OrderService]
})
export class CoreModule {}