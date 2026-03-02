import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { DuenosList } from './features/duenos/pages/duenos-list/duenos-list';
import { VeterinariosList } from './features/veterinarios/pages/veterinarios-list/veterinarios-list';
import { MascotasList } from './features/mascotas/pages/mascotas-list/mascotas-list';
import { CitasList } from './features/citas/pages/citas-list/citas-list';
import { Login } from './features/auth/pages/login/login';
import { authGuard } from './core/guards/auth.guard';
import { hasRoleGuard } from './core/guards/has-role.guard';

export const routes: Routes = [

  { path: 'login', component: Login },

  {
    path: '',
    component: Home,
    canActivate: [authGuard]
  },

  {
    path: 'duenos',
    component: DuenosList,
    canActivate: [authGuard, hasRoleGuard],
    data: { role: 'admin' }
  },

  {
    path: 'veterinarios',
    component: VeterinariosList,
    canActivate: [authGuard, hasRoleGuard],
    data: { role: 'admin' }
  },

  {
    path: 'mascotas',
    component: MascotasList,
    canActivate: [authGuard]
  },

  {
    path: 'citas',
    component: CitasList,
    canActivate: [authGuard]
  }

];