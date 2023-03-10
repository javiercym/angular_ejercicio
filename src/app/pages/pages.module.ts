import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EjemplosComponent } from './ejemplos/ejemplos.component';



@NgModule({
  declarations: [
    PagesComponent,
    InicioComponent,
    ContactoComponent,
    SobreMiComponent,
    EjemplosComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
