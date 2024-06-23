import { Routes } from '@angular/router';
import { ListAlumnosComponent } from './list-alumnos/list-alumnos.component';
import { FormAlumnosComponent } from './form-alumnos/form-alumnos.component';

export const routes: Routes = [
    
    {path: '',component: ListAlumnosComponent},
    {path: 'form',component:FormAlumnosComponent},
    
    
    
   

];
