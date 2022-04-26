import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SafeUrlModule } from 'src/app/pipe/safe-url/safe-url.module';
import { CarouselModule } from 'src/app/shared/carousel/carousel.module';
import { LoadingModule } from 'src/app/shared/loading/loading.module';
import { LandingComponent } from './landing.component';
import { LandingRouting } from './landing.routing';


@NgModule({
  declarations: [
    LandingComponent,
  ],
  imports: [
    SafeUrlModule,
    RouterModule.forChild(LandingRouting),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingModule,
  ],
})
export class LandingModule { }