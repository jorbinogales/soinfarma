import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlModule } from './safe-url/safe-url.module';

@NgModule({
  imports: [
    CommonModule,
    SafeUrlModule,
  ],
  exports:[
    SafeUrlModule,
  ]
})
export class PipesModule { }
