import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { FooterModule } from './shared/footer/footer.module';
import { NavModule } from './shared/nav/nav.module';
import { SharedModule } from './shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppService } from './app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FooterModule,
    RouterModule,
    BrowserModule,
    NavModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
  ],
  providers: [
    AppService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
