import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppModule } from '../../app.module';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  public static Route = {
    path: 'restaurant/main-page',
    title: 'Main Page',
    component: MainPageComponent,
    canActivate: []
  };
constructor(
  public restaurantService: RestaurantService
) {}
}
