import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations:[
      FooterComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
  ],
  exports: [
      FooterComponent
  ]
})
export class FooterModule { }