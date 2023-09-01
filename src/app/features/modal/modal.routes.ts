import { Routes } from '@angular/router';
import { ModalHomeComponent } from './pages/modal-home/modal-home.component';

export const MODAL_ROUTE: Routes = [
  {
    path: '',
    component: ModalHomeComponent,
    children: [
      {
        path: 'hostlistner',
        loadComponent: () => import('./pages/host-list-page/host-listner-page.component').then((c) => c.HostListnerPageComponent),
      },
      {
        path: 'renderertwo',
        loadComponent: () => import('./pages/renderer-two-page/renderer-two-page.component').then((c) => c.RendererTwoPageComponent),
      },
    ],
  },
];
