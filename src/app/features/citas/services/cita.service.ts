import { Injectable } from '@angular/core';
import { Cita } from '../models/cita.model';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private citas: Cita[] = [
    { id: 1, fecha: '2025-07-10', motivo: 'Vacunación', mascotaId: 1, veterinarioId: 1 }
  ];

  getCitas(): Cita[] {
    return this.citas;
  }

  agregarCita(cita: Cita) {
    this.citas.push(cita);
  }

  eliminarCita(id: number) {
    this.citas = this.citas.filter(c => c.id !== id);
  }

  actualizarCita(citaActualizada: Cita) {
    const index = this.citas.findIndex(c => c.id === citaActualizada.id);
    if (index !== -1) {
      this.citas[index] = citaActualizada;
    }
  }
}