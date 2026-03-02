import { Injectable } from '@angular/core';
import { Veterinario } from '../models/veterinario.model';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

  private veterinarios: Veterinario[] = [
    { id: 1, nombre: 'Dr. García', dni: '11111111' },
    { id: 2, nombre: 'Dra. Morales', dni: '22222222' }
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