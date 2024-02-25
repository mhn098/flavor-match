import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AppModule } from '../../app.module';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-swipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './swipe.component.html',
  styleUrl: './swipe.component.css'
})
export class SwipeComponent {
  public static Route = {
    path: 'restaurant/swipe',
    title: 'Swipe',
    component: SwipeComponent,
    canActivate: []
  };
  public restaurant: {} = {};
constructor(
  public restaurantService: RestaurantService
) {this.restaurant = restaurantService.myData[restaurantService.id]}
}