import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { restaurant_model } from "../restaurant_model";
import { AppModule } from '../../app.module';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-review',
  // standalone: true,
  // imports: [],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent{
  public static Route = {
    path: 'restaurant/review',
    title: 'Review',
    component: ReviewComponent,
    canActivate: []
  };

  myData: restaurant_model[] = [];

  constructor(public restaurantService: RestaurantService) {}

}
