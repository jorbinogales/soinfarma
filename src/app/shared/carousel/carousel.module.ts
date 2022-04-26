import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel.component';

@NgModule({
  declarations:[
    CarouselComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
  ],
  exports: [
    CarouselComponent,
  ]
})
export class CarouselModule { }