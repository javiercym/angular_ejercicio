import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class dataService {
    data:any[]=[
    {
      nombre :'Mongo',
      imagen:'https://www.muylinux.com/wp-content/uploads/2019/01/mongodb.png',
      descipcion:'MongoDB es una base de datos NoSQL orientada a documentos que apareció a mediados de la década de 2000. Se utiliza para almacenar volúmenes masivos de datos. A diferencia de una base de datos relacional SQL tradicional, MongoDB no se basa en tablas y columnas.'
    },
    {
        nombre :'Express',
        imagen:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUbjpHNiAc2MvMN1SAm7Ns5N_M-h2szTYEPecG_iKD0QXp5Ion52kG0FBsF-6Q6U5t3fY&usqp=CAU',
        descipcion:'Express es un framework web transigente, escrito en JavaScript y alojado dentro del entorno de ejecución NodeJS.'
    },
    {
        nombre :'Angular',
        imagen:'https://www.mindinventory.com/blog/wp-content/uploads/2022/11/angular-15.webp',
        descipcion:'Angular es un framework de ingeniería de software de código abierto mantenido por Google, que sirve para desarrollar aplicaciones web de estilo Single Page Application (SPA) y Progressive Web App (PWA). Sirve tanto para versiones móviles como de escritorio.'
    },
    {
        nombre :'Node',
        imagen:'https://railsware.com/blog/wp-content/uploads/2018/09/2400%D1%851260-rw-blog-node-js.png',
        descipcion:'Ideado como un entorno de ejecución de JavaScript orientado a eventos asíncronos, Node. js está diseñado para crear aplicaciones network escalables.'
    }
  ]
} 