import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {
  public static Route = {
    path: 'restaurant/review',
    title: 'Review',
    component: ReviewComponent,
    canActivate: []
  };
}
