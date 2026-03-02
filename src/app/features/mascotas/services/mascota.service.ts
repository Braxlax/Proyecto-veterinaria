import { Injectable } from '@angular/core';
import { Mascota } from '../models/mascota.model';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  private mascotas: Mascota[] = [
    { id: 1, nombre: 'Max', especie: 'Perro', edad: 3, duenoId: 1 },
    { id: 2, nombre: 'Luna', especie: 'Gato', edad: 2, duenoId: 2 }
  ];

  getMascotas(): Mascota[] {
    return this.mascotas;
  }

  agregarMascota(mascota: Mascota) {
    this.mascotas.push(mascota);
  }

  eliminarMascota(id: number) {
    this.mascotas = this.mascotas.filter(m => m.id !== id);
  }

  actualizarMascota(mascotaActualizada: Mascota) {
    const index = this.mascotas.findIndex(m => m.id === mascotaActualizada.id);
    if (index !== -1) {
      this.mascotas[index] = mascotaActualizada;
    }
  }
}