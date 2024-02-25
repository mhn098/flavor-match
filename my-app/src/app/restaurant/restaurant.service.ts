import { Injectable } from "@angular/core";
import { restaurant_model } from "./restaurant_model";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as Papa from 'papaparse';


@Injectable({
    providedIn: 'root'
  })
  export class RestaurantService {
    private myData: restaurant_model[] = [];
    constructor(private router: Router){
    }

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