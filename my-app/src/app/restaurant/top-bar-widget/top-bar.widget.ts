import { Component, Input, Output, EventEmitter } from '@angular/core';
import { restaurant_model } from '../restaurant_model';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'top-bar-widget',
  templateUrl: './top-bar.widget.html',
  styleUrls: ['./top-bar.widget.css']
})
export class TopBar {
  @Input() restaurant!: restaurant_model;

  constructor(public restaurantService: RestaurantService) {}
}