import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-items-alumnos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './items-alumnos.component.html',
  styleUrl: './items-alumnos.component.scss'
})
export class ItemsAlumnosComponent {
 

  
  @Input() alumnoInput: any [] = []; 

  @Output() remove:EventEmitter<any> = new EventEmitter();
alumno: any;

eliminar(alumno: any) {
  this.remove.emit(alumno);
}

trackById(index: number, item: any): any{
  return item.id;
}

}
