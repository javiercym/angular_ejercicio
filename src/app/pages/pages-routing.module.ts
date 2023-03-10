import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EjemplosComponent } from './ejemplos/ejemplos.component';

const routes: Routes = [
  
  {path:'cv',component: PagesComponent,
    children:[
      {path:'inicio',component:InicioComponent},
      {path:'sobre-mi',component:SobreMiComponent},
      {path:'contacto',component:ContactoComponent},
      {path:'ejemplos',component:EjemplosComponent},
      
    ]
  },
  {
    path:'**',redirectTo:'cv/inicio'
  }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
