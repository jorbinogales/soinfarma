import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SafeUrlModule } from 'src/app/pipe/safe-url/safe-url.module';
import { CarouselModule } from 'src/app/shared/carousel/carousel.module';
import { CapacitacionComponent } from './capacitacion.component';
import { CapacitacionRouting } from './capacitacion.routing';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    CapacitacionComponent,
  ],
  imports: [
    MatExpansionModule,
    CarouselModule,
    SafeUrlModule,
    RouterModule.forChild(CapacitacionRouting),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CapacitacionModule { }