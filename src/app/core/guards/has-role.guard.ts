import { inject } from '@angular/core';
import { CanActivateFn, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const hasRoleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  const rolRequerido = route.data['role'];

  const rolUsuario = authService.obtenerRol();

  if (rolUsuario === rolRequerido) {
    return true;
  }

  // Si no tiene el rol correcto, lo mandamos al home
  router.navigate(['/']);
  return false;
};