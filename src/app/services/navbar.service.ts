import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class navbarService {
    menu:any[]=[{
      titulo:'inicio',
      url:'/cv/inicio'
    },
    {
      titulo:'sobre-mi',
      url:'/cv/sobre-mi'
    },
    {
        titulo:'contacto',
        url:'/cv/contacto'
    },
  ]
} 