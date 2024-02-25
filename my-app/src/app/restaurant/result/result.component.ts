import { Component } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  public static Route = {
    path: 'restaurant/result',
    title: 'Result',
    component: ResultComponent,
    canActivate: []
  };

constructor(
  public restaurantService: RestaurantService
) {}

}
