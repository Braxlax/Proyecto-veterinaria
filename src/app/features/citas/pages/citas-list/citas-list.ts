import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Cita } from '../../models/cita.model';
import { CitaService } from '../../services/cita.service';

import { Mascota } from '../../../mascotas/models/mascota.model';
import { MascotaService } from '../../../mascotas/services/mascota.service';

import { Veterinario } from '../../../veterinarios/models/veterinario.model';
import { VeterinarioService } from '../../../veterinarios/services/veterinario.service';

@Component({
  selector: 'app-citas-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './citas-list.html',
  styleUrls: ['./citas-list.css']
})
export class CitasList {

  citas: Cita[] = [];
  mascotas: Mascota[] = [];
  veterinarios: Veterinario[] = [];

  nuevaFecha: string = '';
  nuevoMotivo: string = '';
  nuevaMascotaId: number | null = null;
  nuevoVeterinarioId: number | null = null;

  modoEdicion: boolean = false;
  citaEditandoId: number | null = null;

  constructor(
    private citaService: CitaService,
    private mascotaService: MascotaService,
    private veterinarioService: VeterinarioService
  ) {
    this.citas = this.citaService.getCitas();
    this.mascotas = this.mascotaService.getMascotas();
    this.veterinarios = this.veterinarioService.getVeterinarios();
  }

  guardarCita() {

    if (!this.nuevaMascotaId || !this.nuevoVeterinarioId) return;

    if (this.modoEdicion && this.citaEditandoId !== null) {

      const actualizada: Cita = {
        id: this.citaEditandoId,
        fecha: this.nuevaFecha,
        motivo: this.nuevoMotivo,
        mascotaId: this.nuevaMascotaId,
        veterinarioId: this.nuevoVeterinarioId
      };

      this.citaService.actualizarCita(actualizada);

      this.modoEdicion = false;
      this.citaEditandoId = null;

    } else {

      const nueva: Cita = {
        id: this.citas.length + 1,
        fecha: this.nuevaFecha,
        motivo: this.nuevoMotivo,
        mascotaId: this.nuevaMascotaId,
        veterinarioId: this.nuevoVeterinarioId
      };

      this.citaService.agregarCita(nueva);
    }

    this.citas = this.citaService.getCitas();

    this.nuevaFecha = '';
    this.nuevoMotivo = '';
    this.nuevaMascotaId = null;
    this.nuevoVeterinarioId = null;
  }

  editarCita(c: Cita) {
    this.modoEdicion = true;
    this.citaEditandoId = c.id;

    this.nuevaFecha = c.fecha;
    this.nuevoMotivo = c.motivo;
    this.nuevaMascotaId = c.mascotaId;
    this.nuevoVeterinarioId = c.veterinarioId;
  }

  eliminarCita(id: number) {
    this.citaService.eliminarCita(id);
    this.citas = this.citaService.getCitas();
  }

  obtenerNombreMascota(id: number): string {
    const mascota = this.mascotas.find(m => m.id === id);
    return mascota ? mascota.nombre : 'Desconocido';
  }

  obtenerNombreVeterinario(id: number): string {
    const vet = this.veterinarios.find(v => v.id === id);
    return vet ? vet.nombre : 'Desconocido';
  }
}