import { Routes } from '@angular/router';
import { ReactHomeComponent } from './pages/react-home/react-home.component';

export const FORMREACT_ROUTE: Routes = [
  {
    path: '',
    component: ReactHomeComponent,
    children: [
      {
        path: 'simple',
        loadComponent: () => import('./pages/form-react-page/form-react-page.component').then((c) => c.FormReactPageComponent),
      },
      {
        path: 'dynamic',
        loadComponent: () => import('./pages/dynamic-form-page/dynamic-form-page.component').then((c) => c.DynamicFormPageComponent),
      },
      {
        path: 'inputnumbertest',
        loadComponent: () => import('./pages/input-number-page/input-number-page.component').then((c) => c.InputNumberPageComponent),
      },
    ],
  },
];
