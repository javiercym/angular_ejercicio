import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { PagesComponent } from './pages/pages.component';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  {path:'**',component:PagesComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    PagesModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
