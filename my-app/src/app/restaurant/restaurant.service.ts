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
    constructor(private router: Router, private http: HttpClient){
      this.loadCsvData();
    }
    private loadCsvData(): void {
      const csvUrl = './csv_data.csv';
      this.http.get(csvUrl, { responseType: 'text' }).pipe(
        map((csvData: string) => {
          const parsedData = Papa.parse(csvData, { header: true });
          this.myData = parsedData.data.map((item: any) => ({
            name: item.name,
            phone_number: item.phone_number,
            address: item.address,
            zip_code: item.zip_code,
            city: item.city,
            cuisine: item.cuisine,
            is_fast_food: item.is_fast_food,
            is_breakast: item.is_breakast
          }));
        })
      ).subscribe();
    }
  
    getMyData(): restaurant_model[] {
      return this.myData;
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