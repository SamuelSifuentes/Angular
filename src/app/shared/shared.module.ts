import {NgModule, ModuleWithProviders} from '@angular/core'
import{CommonModule} from '@angular/common'
import{FormsModule , ReactiveFormsModule} from '@angular/forms'
import { Routes , RouterModule} from '@angular/router';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';
import { RestaurantService } from '../restaurants/restaurant.service';
import { OrderService } from '../order/order.service';
import { SnackbarComponent } from '../shared/messages/snackbar/snackbar.component';
import { NotificationService } from './messages/notification.service';
import { LoginService } from '../security/login/login.service';
import { LoggedInGuard } from 'app/security/loggedin.guard';
@NgModule({
    declarations:[InputComponent,RadioComponent,RatingComponent, SnackbarComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent,RadioComponent,SnackbarComponent,
        RatingComponent, CommonModule, 
        FormsModule, ReactiveFormsModule]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders{
        return{
            ngModule: SharedModule,
            providers: [ShoppingCartService, RestaurantService, OrderService, NotificationService, LoginService,  LoggedInGuard]
        }
    }
}
