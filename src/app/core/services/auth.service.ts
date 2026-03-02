import { Injectable } from '@angular/core';

export type Rol = 'admin' | 'usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioActual: { username: string; rol: Rol } | null = null;

  login(username: string, password: string): boolean {

    // Login simulado
    if (username === 'admin' && password === '1234') {
      this.usuarioActual = { username, rol: 'admin' };
      return true;
    }

    if (username === 'usuario' && password === '1234') {
      this.usuarioActual = { username, rol: 'usuario' };
      return true;
    }

    return false;
  }

  logout() {
    this.usuarioActual = null;
  }

  estaLogueado(): boolean {
    return this.usuarioActual !== null;
  }

  obtenerRol(): Rol | null {
    return this.usuarioActual?.rol || null;
  }

  obtenerUsuario() {
    return this.usuarioActual;
  }
}