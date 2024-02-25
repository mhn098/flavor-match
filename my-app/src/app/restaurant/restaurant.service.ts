import { Injectable } from "@angular/core";
import { restaurant_model } from "./restaurant_model";
import { Router } from '@angular/router';
import { filter_model } from "./filter_model";

@Injectable({
    providedIn: 'root'
  })
  export class RestaurantService {
    constructor(private router: Router){}
    liked: restaurant_model[] = [];
    filter: restaurant_model[] = [];
    f: filter_model = {
      city: '',
      cuisine: ''
    }


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

    public filterS(i_city: string, i_cuisine: string){
      this.f.city = i_city;
      this.f.cuisine = i_cuisine;
      console.log(this.f.city);
      console.log(this.f.cuisine);
    }
  }