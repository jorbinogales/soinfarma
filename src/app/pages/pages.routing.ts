import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home', 
        loadChildren: () => import('src/app/pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'capacitacion', 
        loadChildren: () => import('src/app/pages/capacitacion/capacitacion.module').then(m => m.CapacitacionModule)
      },
      {
        path: 'faqs', 
        loadChildren: () => import('src/app/pages/faqs/faqs.module').then(m => m.FaqsModule)
      },
      {
        path: 'landing',
        loadChildren: () => import('src/app/pages/landing/landing.module').then(m => m.LandingModule)
      }
    ],
    
  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }