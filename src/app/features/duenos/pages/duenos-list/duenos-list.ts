import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Dueno } from '../../models/dueno.model';
import { DuenoService } from '../../services/dueno.service';

@Component({
  selector: 'app-duenos-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './duenos-list.html',
  styleUrls: ['./duenos-list.css']
})
export class DuenosList {

  duenos: Dueno[] = [];

  nuevoNombre: string = '';
  nuevoDni: string = '';

  modoEdicion: boolean = false;
  duenoEditandoId: number | null = null;

  constructor(private duenoService: DuenoService) {
    this.duenos = this.duenoService.getDuenos();
  }

  guardarDueno() {

    if (this.modoEdicion && this.duenoEditandoId !== null) {

      const actualizado: Dueno = {
        id: this.duenoEditandoId,
        nombre: this.nuevoNombre,
        dni: this.nuevoDni
      };

      this.duenoService.actualizarDueno(actualizado);

      this.modoEdicion = false;
      this.duenoEditandoId = null;

    } else {

      const nuevo: Dueno = {
        id: this.duenos.length + 1,
        nombre: this.nuevoNombre,
        dni: this.nuevoDni
      };

      this.duenoService.agregarDueno(nuevo);
    }

    this.duenos = this.duenoService.getDuenos();

    this.nuevoNombre = '';
    this.nuevoDni = '';
  }

  editarDueno(d: Dueno) {
    this.modoEdicion = true;
    this.duenoEditandoId = d.id;

    this.nuevoNombre = d.nombre;
    this.nuevoDni = d.dni;
  }

  eliminarDueno(id: number) {
    this.duenoService.eliminarDueno(id);
    this.duenos = this.duenoService.getDuenos();
  }
}
