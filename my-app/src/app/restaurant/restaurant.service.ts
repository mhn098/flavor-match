import { Injectable } from "@angular/core";
import { restaurant_model } from "./restaurant_model";
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
  })
  export class RestaurantService {
    constructor(private router: Router){}
    liked: restaurant_model[] = [];
    filter: restaurant_model[] = [];


    public mainPage() {
      this.router.navigate(['/restaurant/main-page']);
  }

    public menuSelectPage() {
      this.router.navigate(['/restaurant/menu-select']);
    }

    public likedPage() {
      this.router.navigate(['/restaurant/liked']);
  }

    public reviewPage() {
      this.router.navigate(['/restaurant/review']);
  }

    public likeRestaurant(restaurant: restaurant_model){
      //if statement for liked restaurants
      this.liked.push(restaurant);
    }

    public getLikedRestaurants(): restaurant_model[]{
      return this.liked;
    }


  }