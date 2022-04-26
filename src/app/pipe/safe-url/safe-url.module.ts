import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe-url.pipe';

@NgModule({
  declarations:[
    SafePipe,
  ],
  imports: [
    CommonModule,
  ],
  exports:[ 
    SafePipe,
  ]
})
export class SafeUrlModule { }