import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-liked',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liked.component.html',
  styleUrl: './liked.component.css'
})
export class LikedComponent {
  public static Route = {
    path: 'restaurant/liked',
    title: 'Liked',
    component: LikedComponent,
    canActivate: []
  };
constructor(
  public restaurantService: RestaurantService
) {}
}