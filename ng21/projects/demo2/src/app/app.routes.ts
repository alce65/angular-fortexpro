import { Routes } from '@angular/router';
import { menuOption } from './core/types/menu-option';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home-page'),
    title: 'Inicio | Demo2',
    data: {
      label: 'Inicio',
    },
  },
  {
    path: 'todo',
    loadComponent: () => import('./features/todo/todo-page'),
    title: 'Tareas | Demo2',
    data: {
      label: 'Tareas',
    },
  },

  {
    path: 'about',
    loadComponent: () => import('./features/about/about-page'),
    title: 'Acerca de | Demo2',
    data: {
      label: 'Nosotros',
    },
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

export const menuOptions: menuOption[] = routes
  .filter((item) => item.data && 'label' in item.data)
  .map((item) => ({
    path: item.path as string,
    label: item.data?.['label'],
  }));
