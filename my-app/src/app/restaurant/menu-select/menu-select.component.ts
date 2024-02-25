import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppModule } from '../../app.module';
import { RestaurantService } from '../restaurant.service';

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
  public restaurantService: RestaurantService{
public formCollector(city: string){
}
}
