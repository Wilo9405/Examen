import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { generate, identity } from 'rxjs';

@Component({
  selector: 'app-form-alumnos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-alumnos.component.html',
  styleUrl: './form-alumnos.component.scss'
})
export class FormAlumnosComponent {

  miForm = this.fb.group({
   
    Nombre: ["",[Validators.required]],
    Apellidos: ["",[Validators.required]],
    DNI: ["",[Validators.required]],
    Telefono: ["",[Validators.required]]
    
    })

  

    @Output() alum = new EventEmitter<any>();

    constructor(private fb: FormBuilder) {
    
  }
  ngOnInit(): void{}

  onSubmit():void{
    if (this.miForm.valid) {
      const alumnos = {

        
      ...this.miForm.value,
      avatarUrl: `https://api.multiavatar.com/${this.miForm.value.Nombre}.png`,
      
    }
  }

    };
  sendForm(event: Event){
    event.preventDefault();
    this.miForm.value
    

    if (this.miForm.valid){
      this.alum.emit(this.miForm.value);
      this.miForm.reset();
    }
    
     }
      
 
}


