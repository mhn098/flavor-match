import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-swipe',
  standalone: true,
  imports: [],
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
}
