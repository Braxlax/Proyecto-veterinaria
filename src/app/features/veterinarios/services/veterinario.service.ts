import { Injectable } from '@angular/core';
import { Veterinario } from '../models/veterinario.model';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

  private veterinarios: Veterinario[] = [
    { id: 1, nombre: 'Dr. García', dni: '48218541' },
    { id: 2, nombre: 'Dra. Morales', dni: '62512829' },
    { id: 3, nombre: 'Dr. Perez', dni: '94813247'}
  ];

  // Obtener lista
  getVeterinarios(): Veterinario[] {
    return this.veterinarios;
  }

  //  Agregar
  agregarVeterinario(vet: Veterinario) {
    this.veterinarios.push(vet);
  }

  //  Eliminar
  eliminarVeterinario(id: number) {
    this.veterinarios = this.veterinarios.filter(v => v.id !== id);
  }

  //  Actualizar
  actualizarVeterinario(vetActualizado: Veterinario) {
    const index = this.veterinarios.findIndex(v => v.id === vetActualizado.id);

    if (index !== -1) {
      this.veterinarios[index] = vetActualizado;
    }
  } 
}