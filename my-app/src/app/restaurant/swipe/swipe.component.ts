import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { AppModule } from '../../app.module';
import { RestaurantService } from '../restaurant.service';
import { restaurant_model } from '../restaurant_model';

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
  public index: number = 0;
constructor(
  public restaurantService: RestaurantService
) {restaurantService.filterData();
}
public hitlike(): void{
  this.restaurantService.likeRestaurant(this.index);
  this.index += 1;
  if(this.index == this.restaurantService.filtered_data.length){
    window.alert('There are no more ' + this.restaurantService.f.cuisine + ' eateries in ' + this.restaurantService.f.city + '.');
  }
}
public hitdislike(): void{
  this.restaurantService.dislikeRestaurant(this.index);
  this.index += 1;
  if(this.index == this.restaurantService.filtered_data.length){
    window.alert('There are no more ' + this.restaurantService.f.cuisine + ' eateries in ' + this.restaurantService.f.city + '.');
  }
}
public hitindifferent(): void{
  this.restaurantService.indifferentRestaurant(this.index);
  this.index += 1;
  if(this.index == this.restaurantService.filtered_data.length){
    window.alert('There are no more ' + this.restaurantService.f.cuisine + ' eateries in ' + this.restaurantService.f.city + '.');
  }
}
}