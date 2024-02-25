import { Injectable } from "@angular/core";
import { restaurant_model } from "./restaurant_model";
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
  })
  export class RestaurantService {
    constructor(private router: Router){}
    dislike: restaurant_model[] = [];
    neutral: restaurant_model[] = [];
    like: restaurant_model[] = [];
    all: restaurant_model[] = [];

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

    public addDislike(restaurant: restaurant_model){
      this.dislike.push(restaurant);
    }

    public getDislike(): restaurant_model[]{
      return this.dislike;
    }

    public addNeutral(restaurant: restaurant_model){
        this.neutral.push(restaurant);
      }
  
    public getNeutral(): restaurant_model[]{
    return this.neutral;
    }

    public addLike(restaurant: restaurant_model){
        this.like.push(restaurant);
      }
  
    public getLike(): restaurant_model[]{
    return this.like;
    }
    
    public filterCity(city: string){
        // take input from menu-select
    }

    public dislikeButton(restaurant: restaurant_model) {
        restaurant.not_seen = false;
        this.addDislike(restaurant);
    }

    public neutralButton(restaurant: restaurant_model) {
        restaurant.not_seen = false;
        this.addNeutral(restaurant);
    }

    public likeButton(restaurant: restaurant_model) {
        restaurant.not_seen = false;
        this.addLike(restaurant);
    }
  }