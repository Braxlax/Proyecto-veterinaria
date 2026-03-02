import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Veterinario } from '../../models/veterinario.model';
import { VeterinarioService } from '../../services/veterinario.service';

@Component({
  selector: 'app-veterinarios-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './veterinarios-list.html',
  styleUrls: ['./veterinarios-list.css']
})
export class VeterinariosList {

  veterinarios: Veterinario[] = [];

  nuevoNombre: string = '';
  nuevoDni: string = '';

  modoEdicion: boolean = false;
  veterinarioEditandoId: number | null = null;

  constructor(private veterinarioService: VeterinarioService) {
    this.veterinarios = this.veterinarioService.getVeterinarios();
  }

  guardarVeterinario() {

    if (this.modoEdicion && this.veterinarioEditandoId !== null) {

      const actualizado: Veterinario = {
        id: this.veterinarioEditandoId,
        nombre: this.nuevoNombre,
        dni: this.nuevoDni
      };

      this.veterinarioService.actualizarVeterinario(actualizado);

      this.modoEdicion = false;
      this.veterinarioEditandoId = null;

    } else {

      const nuevo: Veterinario = {
        id: this.veterinarios.length + 1,
        nombre: this.nuevoNombre,
        dni: this.nuevoDni
      };

      this.veterinarioService.agregarVeterinario(nuevo);
    }

    this.veterinarios = this.veterinarioService.getVeterinarios();

    this.nuevoNombre = '';
    this.nuevoDni = '';
  }

  editarVeterinario(vet: Veterinario) {
    this.modoEdicion = true;
    this.veterinarioEditandoId = vet.id;

    this.nuevoNombre = vet.nombre;
    this.nuevoDni = vet.dni;
  }

  eliminarVeterinario(id: number) {
    this.veterinarioService.eliminarVeterinario(id);
    this.veterinarios = this.veterinarioService.getVeterinarios();
  }

}