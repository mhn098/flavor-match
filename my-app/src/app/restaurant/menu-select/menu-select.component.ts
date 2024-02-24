import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
}
