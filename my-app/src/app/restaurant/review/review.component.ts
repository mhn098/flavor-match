import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { restaurant_model } from "../restaurant_model";

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit{
  public static Route = {
    path: 'restaurant/review',
    title: 'Review',
    component: ReviewComponent,
    canActivate: []
  };

  myData: restaurant_model[] = [];

  constructor(private csvService: RestaurantService) {}

  ngOnInit(): void {
    this.myData = this.csvService.getMyData();
    console.log(this.myData);
  }
}
