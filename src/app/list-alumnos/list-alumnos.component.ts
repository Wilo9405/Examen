import { Component, EventEmitter } from '@angular/core';
import { FormAlumnosComponent } from '../form-alumnos/form-alumnos.component';
import { ItemsAlumnosComponent } from '../items-alumnos/items-alumnos.component';

@Component({
  selector: 'app-list-alumnos',
  standalone: true,
  imports: [FormAlumnosComponent,ItemsAlumnosComponent],
  templateUrl: './list-alumnos.component.html',
  styleUrl: './list-alumnos.component.scss'
})
export class ListAlumnosComponent {
  alumnos: any[] = [];
  remove: EventEmitter<any> = new EventEmitter<any>();

  addAlumno(alumno: any) {
    this.alumnos.push(alumno);
  }

  eliminar(alumno: any) {
    const index = this.alumnos.findIndex(a => a.id === alumno.id);
    if (index !== -1) {
      this.alumnos.splice(index, 1);
      // Emitir evento para eliminar este alumno específico
      this.remove.emit(alumno);
    }
  }

}
