import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { MenuSelectComponent } from './restaurant/menu-select/menu-select.component';
import { MainPageComponent } from './restaurant/main-page/main-page.component';
import { SwipeComponent } from './restaurant/swipe/swipe.component';
import { LikedComponent } from './restaurant/liked/liked.component';
import { ReviewComponent } from './restaurant/review/review.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    // MenuSelectComponent,
    // MainPageComponent,
    // SwipeComponent,
    // LikedComponent,
    // ReviewComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ]
})
export class AppModule { }
