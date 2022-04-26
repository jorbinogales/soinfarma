import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from './loading.component';

@NgModule({
  declarations:[
    LoadingComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
  ],
  exports: [
    LoadingComponent,
  ]
})
export class LoadingModule { }