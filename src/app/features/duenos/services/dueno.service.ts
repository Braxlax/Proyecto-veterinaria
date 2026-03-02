import { Injectable } from '@angular/core';
import { Dueno } from '../models/dueno.model';

@Injectable({
  providedIn: 'root'
})
export class DuenoService {

  private duenos: Dueno[] = [
    { id: 1, nombre: 'Carlos Pérez', dni: '12345678' },
    { id: 2, nombre: 'María López', dni: '87654321' }
  ];

  getDuenos(): Dueno[] {
    return this.duenos;
  }

  agregarDueno(dueno: Dueno) {
    this.duenos.push(dueno);
  }

  eliminarDueno(id: number) {
    this.duenos = this.duenos.filter(d => d.id !== id);
  }

  actualizarDueno(duenoActualizado: Dueno) {
    const index = this.duenos.findIndex(d => d.id === duenoActualizado.id);
    if (index !== -1) {
      this.duenos[index] = duenoActualizado;
    }
  }
}