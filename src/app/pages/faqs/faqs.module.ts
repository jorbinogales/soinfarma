import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SafeUrlModule } from 'src/app/pipe/safe-url/safe-url.module';
import { CarouselModule } from 'src/app/shared/carousel/carousel.module';
import {MatExpansionModule} from '@angular/material/expansion';
import { FaqsRouting } from './faqs.routing';
import { FaqsComponent } from './faqs.component';


@NgModule({
  declarations: [
    FaqsComponent,
  ],
  imports: [
    MatExpansionModule,
    CarouselModule,
    SafeUrlModule,
    RouterModule.forChild(FaqsRouting),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class FaqsModule { }