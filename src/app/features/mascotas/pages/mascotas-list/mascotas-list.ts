import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Mascota } from '../../models/mascota.model';
import { MascotaService } from '../../services/mascota.service';

import { DuenoService } from '../../../duenos/services/dueno.service';
import { Dueno } from '../../../duenos/models/dueno.model';

@Component({
  selector: 'app-mascotas-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mascotas-list.html',
  styleUrls: ['./mascotas-list.css']
})
export class MascotasList {

  mascotas: Mascota[] = [];
  duenos: Dueno[] = [];

  nuevoNombre: string = '';
  nuevaEspecie: string = '';
  nuevaEdad: number = 0;
  nuevoDuenoId: number | null = null;

  modoEdicion: boolean = false;
  mascotaEditandoId: number | null = null;

  constructor(
    private mascotaService: MascotaService,
    private duenoService: DuenoService
  ) {
    this.mascotas = this.mascotaService.getMascotas();
    this.duenos = this.duenoService.getDuenos();
  }

  guardarMascota() {

    if (!this.nuevoDuenoId) return;

    if (this.modoEdicion && this.mascotaEditandoId !== null) {

      const actualizada: Mascota = {
        id: this.mascotaEditandoId,
        nombre: this.nuevoNombre,
        especie: this.nuevaEspecie,
        edad: this.nuevaEdad,
        duenoId: this.nuevoDuenoId
      };

      this.mascotaService.actualizarMascota(actualizada);

      this.modoEdicion = false;
      this.mascotaEditandoId = null;

    } else {

      const nueva: Mascota = {
        id: this.mascotas.length + 1,
        nombre: this.nuevoNombre,
        especie: this.nuevaEspecie,
        edad: this.nuevaEdad,
        duenoId: this.nuevoDuenoId
      };

      this.mascotaService.agregarMascota(nueva);
    }

    this.mascotas = this.mascotaService.getMascotas();

    this.nuevoNombre = '';
    this.nuevaEspecie = '';
    this.nuevaEdad = 0;
    this.nuevoDuenoId = null;
  }

  editarMascota(m: Mascota) {
    this.modoEdicion = true;
    this.mascotaEditandoId = m.id;

    this.nuevoNombre = m.nombre;
    this.nuevaEspecie = m.especie;
    this.nuevaEdad = m.edad;
    this.nuevoDuenoId = m.duenoId;
  }

  eliminarMascota(id: number) {
    this.mascotaService.eliminarMascota(id);
    this.mascotas = this.mascotaService.getMascotas();
  }

  obtenerNombreDueno(duenoId: number): string {
    const dueno = this.duenos.find(d => d.id === duenoId);
    return dueno ? dueno.nombre : 'Desconocido';
  }
}
