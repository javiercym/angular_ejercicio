import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PagesComponent,
    InicioComponent,
    ContactoComponent,
    SobreMiComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule
  ]
})
export class PagesModule { }
