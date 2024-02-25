import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppModule } from '../../app.module';
import { RestaurantService } from '../restaurant.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { filter_model } from '../filter_model';

@Component({
  selector: 'app-menu-select',
  standalone: true,
  imports: [],
  templateUrl: './menu-select.component.html',
  styleUrl: './menu-select.component.css'
})
export class MenuSelectComponent {
  public static Route = {
    path: 'restaurant/menu-select',
    title: 'Menu Select',
    component: MenuSelectComponent,
    canActivate: []
  };

  constructor(
  public restaurantService: RestaurantService,
  private formBuilder: FormBuilder
) {}

public filter(i_city: string, i_cuisine: string){
  let city = i_city;
  let cuisine = i_cuisine;

  this.restaurantService.filterS(city, cuisine);
}
}
