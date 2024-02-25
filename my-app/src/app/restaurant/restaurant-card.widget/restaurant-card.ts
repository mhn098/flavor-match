import { Component, Input, Output, EventEmitter } from '@angular/core';
import { restaurant_model } from '../restaurant_model';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'restaurant-card-widget',
  templateUrl: './restaurant-card.widget.html',
  styleUrls: ['./restaurant-card.widget.css']
})
export class RestaurantCard {
  @Input() restaurant!: restaurant_model;

  constructor(public restaurantService: RestaurantService){}
}