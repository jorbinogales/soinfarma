import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavModule } from './nav/nav.module';
import { LayoutComponent } from './layouts/layout.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FooterModule } from './footer/footer.module';
import { LoadingModule } from './loading/loading.module';

@NgModule({
declarations: [
    LayoutComponent
],
imports: [
    CommonModule,
    NavModule,
    RouterModule,
    BrowserModule,
    FooterModule,
    LoadingModule,
  ],
exports: [
    NavModule,
    LayoutComponent,
    FooterModule,
    LoadingModule,
]
})
export class SharedModule { }
