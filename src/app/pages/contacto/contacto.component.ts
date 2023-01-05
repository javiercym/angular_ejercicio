import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{
  
  public validarFormulario!: FormGroup;
  constructor(private formBuilder:FormBuilder){}

  ngOnInit(): void{
    this.validarFormulario = this.formBuilder.group({
      nombre:['', 
        [
          Validators.required,
          Validators.minLength(10)
          
        ]
      ],
      email:['', 
        [
          Validators.required,
          Validators.email
        ]
      ],
      text:['',
        [
          Validators.required
        ]
      ]
    })
  }
}
