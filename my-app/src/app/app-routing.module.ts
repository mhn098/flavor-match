import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { MenuSelectComponent } from './restaurant/menu-select/menu-select.component';
import { MainPageComponent } from './restaurant/main-page/main-page.component';
import { LikedComponent } from './restaurant/liked/liked.component';
import { SwipeComponent } from './restaurant/swipe/swipe.component';
import { ReviewComponent } from './restaurant/review/review.component';

export const routes: Routes = [
  MenuSelectComponent.Route,
  MainPageComponent.Route,
  LikedComponent.Route,
  SwipeComponent.Route,
  ReviewComponent.Route,
{
  path: 'menu-select',
  title: 'Menu Select',
  loadComponent: () =>
    import('./restaurant/menu-select/menu-select.component').then(
      (m) => m.MenuSelectComponent
    )
},
{
  path: 'main-page',
  title: 'Main Page',
  loadComponent: () =>
    import('./restaurant/main-page/main-page.component').then(
      (m) => m.MainPageComponent
    )
},
{
path: 'liked',
title: 'Like',
loadComponent: () =>
  import('./restaurant/liked/liked.component').then(
    (m) => m.LikedComponent
  )
},
{
  path: 'swipe',
  title: 'Swipe',
  loadComponent: () =>
    import('./restaurant/swipe/swipe.component').then(
      (m) => m.SwipeComponent
    )
},
{
  path: 'review',
  title: 'Review',
  loadComponent: () =>
    import('./restaurant/review/review.component').then(
      (m) => m.ReviewComponent
    )
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
