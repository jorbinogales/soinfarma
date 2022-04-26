import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { Layout_content } from './route/layout.router';
import { LayoutComponent } from './shared/layouts/layout.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo:'home', 
    pathMatch: 'full'
  },
  { 
    path: '', 
    component: LayoutComponent, 
    children: Layout_content, 
  },
];

@NgModule({
  imports: [
    [
      RouterModule.forRoot(routes, {
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
        preloadingStrategy: PreloadAllModules,
      })
    ],
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }