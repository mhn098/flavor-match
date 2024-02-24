import { Component, Input, Output, EventEmitter } from '@angular/core';
import { restaurant_model } from '../restaurant_model';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'bottom-tab-widget',
  templateUrl: './bottom-tab.widget.html',
  styleUrls: ['./bottom-tab.widget.css']
})
export class BottomTab {
  @Input() restaurant!: restaurant_model;

  constructor(public restaurantService: RestaurantService) {}
}