import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRouting } from './home.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { SafeUrlModule } from 'src/app/pipe/safe-url/safe-url.module';
import { CarouselModule } from 'src/app/shared/carousel/carousel.module';
import { LoadingModule } from 'src/app/shared/loading/loading.module';
import { NavModule } from 'src/app/shared/nav/nav.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    NavModule,
    CarouselModule,
    SafeUrlModule,
    RouterModule.forChild(HomeRouting),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingModule,
  ],
})
export class HomeModule { }